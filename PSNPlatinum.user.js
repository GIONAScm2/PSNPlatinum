// ==UserScript==
// @name         PSNPlatinum
// @author       GIONAScm2
// @namespace    https://github.com/GIONAScm2/PSNPlatinum
// @version      2.56
// @description  Script that improves PSNProfiles with new features.
// @downloadURL  https://github.com/GIONAScm2/PSNPlatinum/raw/main/PSNPlatinum.user.js
// @updateURL    https://github.com/GIONAScm2/PSNPlatinum/raw/main/PSNPlatinum.user.js
// @match        https://*.psnprofiles.com/*
// @require      https://github.com/GIONAScm2/PSNPlatinum/raw/main/TrophyFunctions.js
// ==/UserScript==

/// <reference path="./../TrophyFunctions.js"/>     // Enables IntelliSense
/* global colorLog, fetchDoc, newElement, copyToClipboard, TrophyList, Trophy,  Game, GameWithProgress, SeriesRow, Series, CopyCheckbox, */  // ESLint whitelist

class Settings {
    static #key = 'PSNPlatinum_Settings';
    static #data = {
        psnID: '',
        bools: {
            platify: { val: false, name: 'Platify', desc: `Makes the site more platinum-oriented` },
            flagged: { val: false, name: 'Flagged', desc: `Hides the flag box from your profile and injects plat time into '100% Club'` },
            ownershipIcons: { val: true, name: 'Ownership Icons', desc: `Lets you mark any game as 'owned', coloring it blue whenever it appears` },
            loadAllHideCompleted: { val: false, name: '[Load All] Hide Completed', desc: `"Load All" buttons will hide your completed games instead of coloring them` },
            hideMultiplatform: { val: false, name: `Hide Multiplatform From Filtered`, desc: `Hides multiplatform games from the 'Games' page when a platform filter is applied` },
        },
        colors: {
            /** Grey */
            completed: 'hsl(40, 6%, 90%)',
            /** Green */
            merelyPlatted: 'hsl(120, 100%, 95%)',
            /** Blue */
            playedOrOwned: 'hsl(220, 100%, 95%)'
        },
        games: Settings.#createGameMap(),
    }
    /** Font Awesome icons */
    static #fa = {
        url: 'https://kit.fontawesome.com/601d807845.js',
        i: {
            settings: () => newElement('i', { class: 'fas fa-cog' }),
            own: function addOwnIcon() {
                let icon = newElement('i', { class: 'far fa-plus-square iconOwnership', title: `Register game as 'owned'`, style: `cursor: pointer; margin-left:5px; background-color:#80ff80;` });
                icon.addEventListener('click', function onclickOwnIcon() {
                    const game = new Game(this.closest('tr'));
                    if (!Settings.games.has(game.id)) {
                        Settings.games.set(game.id, game);
                        Settings.save();
                        Settings.games.markOrHide(game);
                        this.replaceWith(Settings.icons.disown());
                    }
                });

                return icon;
            },
            disown: function addDisownIcon() {
                let icon = newElement('i', { class: 'far fa-minus-square iconOwnership', title: `Unregister game as 'owned'`, style: `cursor: pointer; margin-left:5px; background-color:#ff9999;` });
                icon.addEventListener('click', function onclickDisownIcon() {
                    const game = new Game(this.closest('tr'));
                    if (!Settings.games.isPlayed(game.id)) { // If game exists in cache, but is unplayed (played games shouldn't be uncached)
                        Settings.games.delete(game.id);
                        Settings.save();
                        Settings.games.markOrHide(game);
                        this.replaceWith(Settings.icons.own());
                    }
                });
                return icon;
            },
            trophy: () => newElement('i', { class: 'fas fa-trophy' }),
        }
    }

    static get psnID() { return this.#data.psnID; }
    static get bools() { return this.#data.bools; }
    static get colors() { return this.#data.colors; }
    static get games() { return this.#data.games; }
    static get icons() { return this.#fa.i; }

    /** If user is logged in, loads their settings profile (or creates one). */
    static init() {
        document.querySelector('head').append(newElement('script', { src: this.#fa.url, crossorigin: 'anonymous' }));
        if (!loggedIn) return;
        else if (!this.load() && !viewingForumSubdomain) {
            this.#data.psnID = loggedIn.textContent.trim();
            console.log(`Created Settings data for new user '${this.psnID}'`);
        }
        // Embed settings if load succeeded or new settings were created
        if (this.psnID) {
            this.#appendSettingsMenu();
        }
    }

    static #createGameMap(x) {
        class GameMap extends Map {
            constructor(map) { map ? super(map) : super(); }
            /** Returns true if the passed Game ID is played (has numerical percent), otherwise false.
            * @param {number} id */
            isPlayed(id) {
                const g = this.get(id);
                if (!g || g.percent === undefined || isNaN(g.percent)) return false;
                return true;
            }
            /** Returns true if the passed Game ID is cached and completed, otherwise false.
             * @param {number} id */
            isCompleted(id) {
                if (!this.isPlayed(id)) return false;
                /** @type {GameWithProgress} */
                const g = this.get(id);
                return Settings.bools.platify.val ? g.isPlatted : g.percent === 100;
            }
            /** @param {Game[]} games */
            markOrHide(...games) {
                games.forEach(game => {
                    const completed = this.isCompleted(game.id)
                        , merelyPlatted = !completed && this.isPlayed(game.id) && this.get(game.id).isPlatted
                        , playedOrOwned = !completed && this.has(game.id);

                    if (completed) {
                        game.el.querySelectorAll('td:not([rowspan])').forEach((x) => x.style.backgroundColor = Settings.colors.completed);
                        // Settings.bools.loadAllHideCompleted.val
                        //     ? game.el.style.display='none'
                        //     : game.el.querySelectorAll('td:not([rowspan])').forEach((x) => x.style.backgroundColor = Settings.colors.completed);
                    }
                    else if (merelyPlatted) game.el.querySelectorAll('td:not([rowspan])').forEach((x) => x.style.backgroundColor = Settings.colors.merelyPlatted); // Green
                    else if (playedOrOwned) game.el.querySelectorAll('td:not([rowspan])').forEach((x) => x.style.backgroundColor = Settings.colors.playedOrOwned); // Blue
                    else game.el.querySelectorAll('td:not([rowspan])').forEach((x) => x.style.backgroundColor = ''); // Clears any formatting
                });
            }
            /** @param {Game[]} games */
            appendOwnershipIcon(...games) {
                if (!Settings.bools.ownershipIcons) return;
                games.forEach(game => {
                    if (this.isPlayed(game.id)) return;
                    const icon = this.has(game.id) ? Settings.icons.disown() : Settings.icons.own();
                    if (game.el.querySelector('.iconOwnership')) game.el.querySelector('.iconOwnership').replaceWith(icon)
                    else game.el.querySelector('a.title, span > a').parentNode.appendChild(icon);
                });
            }
        }
        return new GameMap(x);
    }

    /** Saves user settings to localStorage. */
    static save() {
        localStorage.setItem(this.#key, JSON.stringify(this.#data, (key, value) => {
            if (value instanceof Map) {
                return {
                    dataType: 'Map',
                    value: [...value],
                };
            } else {
                return value;
            }
        }));
    }

    /** Attempts to load settings from localStorage, returning true if successful, otherwise false. */
    static load() {
        const storedSettings = JSON.parse(localStorage.getItem(this.#key), (key, value) => {
            if (typeof value === 'object' && value !== null) {
                if (value.dataType === 'Map') {
                    return Settings.#createGameMap(value.value);
                }
            }
            return value;
        });

        if (storedSettings) {
            // Load PSN ID
            if ('psnID' in storedSettings) this.#data.psnID = storedSettings.psnID || '';
            // Load saved boolean values
            Object.entries(this.#data.bools).filter(([key]) => key in storedSettings?.bools).forEach(([key, value]) => {
                // console.log(`${key}: ${value.val} -> ${storedSettings.bools[key].val}`);
                value.val = storedSettings.bools[key]?.val || value.val;
            });
            // Load game data
            if ('games' in storedSettings) this.#data.games = storedSettings.games;

            this.save();
            return true;
        }
        else {
            return false;
        }
    }

    /** Creates and injects an interactive settings menu. */
    static #appendSettingsMenu() {

        /** Modal Settings window */
        const settingsWindow = newElement('div', { style: `width:100%; height:100%; z-index:2000000000; display:none; position:fixed; top:0; left:0; overflow:auto; background-color:rgba(0,0,0,0.4); padding: 200px;` },
            newElement('div', { id: 'settings-outer', style: `background-color:white; height:250px; max-width:1000px; margin:auto;` },
                newElement('div', { id: 'settings-inner', style: `position:relative; padding: 10px 20px 20px; height:100%;` },
                    newElement('h1', { style: `color:blue; text-align:center; font-weight:bold; ` }, `${GM_info.script.name} Settings`),
                    (function generateCheckboxes(bools) {
                        const checkboxes = newElement('div', { id: 'bools', style: `margin-top:10px;` });
                        Object.entries(bools).forEach(([key, value]) => {
                            let el = newElement('div', { style: `margin-top:10px ` },
                                newElement('input', { type: 'checkbox', id: `check-${key}`, style: `margin-right:10px; `, [value.val ? 'checked' : 'null']: '' }),
                                bools[key].name,
                                newElement('span', { style: `margin-left:10px; font-style:italic; ` }, `(${value.desc})`));

                            el.querySelector(`#check-${key}`).addEventListener('click', () => {
                                bools[key].val = el.querySelector(`#check-${key}`).checked;
                                Settings.save();

                                const msg = settingsWindow.querySelector('#settings-saved');
                                msg.style.visibility = 'visible';
                                setTimeout(() => { msg.style.visibility = 'hidden'; }, 1000);
                            });
                            checkboxes.appendChild(el);
                        })
                        return checkboxes;
                    })(Settings.bools),

                    // 'Settings saved' message
                    (function showSettingsSaved() {
                        const el = newElement('div', { style: `position:absolute;  bottom:10px; visibility:hidden ` },
                            newElement('span', { id: 'settings-saved', style: `color:green; font-weight:bold;` }, 'Settings saved'));
                        return el;
                    })(),
                )
            ));
        settingsWindow.onclick = (e) => {
            if (e.target == settingsWindow) settingsWindow.style.display = "none";
            window.history.replaceState({}, '', window.location.href.replace(/#$/, ''));
        }
        document.body.appendChild(settingsWindow);

        // Adding Settings button to dropdown:
        const btnSettings = newElement('li', { class: 'ipsMenu_item' }, newElement('a', { id: 'settingsbtn', href: 'javascript:void(0);' }, 'PSNPlatinum ', this.icons.settings()));
        btnSettings.querySelector('#settingsbtn').onclick = () => { settingsWindow.style.display = 'block' }
        const anchor = viewingForumSubdomain
            ? null //document.querySelector('#elUserLink_menu > li.ipsMenu_sep')  // No need to read user settings from forums just yet
            : document.querySelectorAll('ul.dropdown-menu.right li.divider')[1];
        anchor?.before(btnSettings);
    }
}


class PSNProfile {
    constructor(doc = document) {
        this.psnID = doc.querySelector('div#user-bar span.username').textContent.trim();
        this.stats = {
            gamesPlayed: +doc.querySelector('span.stat.grow:nth-of-type(1)').childNodes[0].textContent.replace(/,/g, ""),
            gamesCompleted: +doc.querySelector('span.stat.grow:nth-of-type(2)').childNodes[0].textContent.replace(/,/g, ""),
            completion: +doc.querySelector('span.stat.grow:nth-of-type(3)').childNodes[0].textContent.replace('%', ''),
            unearnedTrophies: +doc.querySelector('span.stat.grow:nth-of-type(4)').childNodes[0].textContent.replace(/,/g, ""),
            trophiesPerDay: +doc.querySelector('span.stat.grow:nth-of-type(5)').childNodes[0].textContent,
            views: +doc.querySelector('span.stat.grow:nth-of-type(6)').childNodes[0].textContent.replace(/,/g, "")
        };
        this.numPages = Math.ceil(this.stats.gamesPlayed / 100);
    }

    static #stayOnPage(e) {
        // Cancel the event as stated by the standard.
        e.preventDefault();
        // Chrome requires returnValue to be set.
        e.returnValue = '';
        return '';
    }

    /** Parses user's profile and caches all their games so that the data can be quickly accessed anytime. */
    static async cacheGames() {
        const profile = new PSNProfile();
        let done = false, numUpdated = 0, numNew = 0, parsed = 0;
        if (Settings.games.size < profile.stats.gamesPlayed)
            window.addEventListener('beforeunload', this.#stayOnPage);

        for (let i = 1; i <= profile.numPages && !done; i++) {
            const doc = i === 1 ? document : await fetchDoc(`https://psnprofiles.com/${Settings.psnID}?completion=all&order=last-played&pf=all&page=${i}`);
            let nodes = Game.getNodes(doc)
            for (let j = 0; j < nodes.length; j++) {
                // const num = (j + 1) + (100 * (i - 1));
                const game = new GameWithProgress(nodes[j]);
                const stored = Settings.games.get(game.id);
                parsed++;

                if (!stored) {
                    numNew++;
                    Settings.games.set(game.id, game);
                }
                else {
                    const unchanged = game.percent === stored.percent && game.stack === stored.stack && game.rarityBase === stored.rarityBase && game.rarityFull === stored.rarityFull;
                    // If game looks to be already cached, stop updating after current page (considering late syncs)
                    if (unchanged) {
                        done = true;
                        continue;
                    }
                    else {
                        Settings.games.set(game.id, game);
                        numUpdated++;
                    }
                }
            }
            console.log(`${i}/${profile.numPages} pages parsed`);
        }
        Settings.save();
        console.log(`Parsed ${parsed} games: ${numNew} new, ${numUpdated} updated, ${parsed - numNew - numUpdated} unchanged. (${Settings.games.size} in cache)`);
        window.removeEventListener('beforeunload', this.#stayOnPage);
    }

    /** Parses user's profile and shows only the games that stack, and how many stacks the user has completed. Shows only 1 game per set of stacks. */
    static async stackify() {
        this.remove();
        /** Collection of Games to dictate whether a game page should be visited.
         * @type {Map<number, Game>}  */
        const parsed = new Map()
            , profile = new PSNProfile()
            , gameContainer = document.querySelector('#content :is(#gamesTable, #search-results) > tbody')

        // Prepping the DOM
        window.addEventListener('scroll', function (e) { e.stopPropagation(); }, true);
        document.querySelector('#load-more')?.remove();
        Game.getNodes().forEach(g => g.remove());

        for (let i = 1; i <= profile.numPages; i++) {
            const doc = await fetchDoc(`https://psnprofiles.com/${profile.psnID}?completion=all&order=last-played&pf=all&page=${i}`)
            let gameNodes = Game.getNodes(doc)
            for (let j = 0; j < gameNodes.length; j++) {
                const game = new GameWithProgress(gameNodes[j])
                    , stacks = { total: 0, completed: 0, games: [game], str: '', color: '' };

                if (parsed.get(game.id) || game?.hasStacks === false || (Settings.bools.platify.val && !game.hasPlat)) continue;

                // Parse stack info for current game
                stacks.total++;
                if (Settings.games.isCompleted(game.id)) stacks.completed++;
                parsed.set(game.id, game);

                // Visit game page to parse its stacks, if any
                const gamePage = await fetchDoc(game.url);
                new TrophyList(gamePage).stacks.forEach(s => {
                    const stack = new Game(s);
                    stacks.games.push(stack);
                    stacks.total++;
                    if (Settings.games.isCompleted(stack.id)) stacks.completed++;
                    parsed.set(stack.id, stack)
                });

                // Update stack data (even if just to say the initial game has none)
                stacks.games.forEach(g => {
                    const stored = Settings.games.get(g.id);
                    if (stored) {
                        stored.hasStacks = stacks.total > 1;
                        Settings.games.set(stored.id, stored);
                    }
                });
                Settings.save();

                // Building & appending element
                if (stacks.games.length === 1) continue;
                stacks.str = `(${stacks.completed}/${stacks.total})`;
                stacks.color = stacks.completed === stacks.total ? 'green' : 'red';
                const el = newElement('span', { class: 'stackify', style: `color:${stacks.color}; font-weight:500;` }, stacks.str);
                game.el.querySelector('a.title').closest('span').appendChild(el);
                gameContainer.appendChild(game.el);
            }
        }
    }

    /** Parses another user's profile and shows only the games that you don't own. */
    static async envy() {
        this.remove();
        const profile = new PSNProfile();
        const gameContainer = document.querySelector('#content :is(#gamesTable, #search-results) > tbody');

        // Prepping the DOM
        window.addEventListener('scroll', function (e) { e.stopPropagation(); }, true);
        document.querySelector('#load-more')?.remove();
        Game.getNodes().forEach(g => g.remove());

        // Check for filters/params
        let sp = new URLSearchParams(location.search);
        sp = {
            completion: sp.get('completion') || 'all',
            order: sp.get('order') || 'last-played',
            pf: sp.get('pf') || 'all'
        };

        for (let i = 1; i <= profile.numPages; i++) {
            const url = `https://psnprofiles.com/${profile.psnID}?completion=${sp.completion}&order=${sp.order}&pf=${sp.pf}&page=${i}`;
            const doc = await fetchDoc(url);
            let gameNodes = Game.getNodes(doc)
            for (let j = 0; j < gameNodes.length; j++) {
                const game = new GameWithProgress(gameNodes[j]);
                if (!Settings.games.has(game.id)) gameContainer.appendChild(game.el);
            }
            monitorGames();
        }
    }
}


function searchBarEnhancer(searchBar) {
    setTimeout(() => {
        // Removes any 'AND'/'OR' values (PSNP copies the URL query into the search bar for some reason...)
        searchBar.value = (searchBar.value.match(/\S+/g) || []).filter((word => word !== 'AND' && word !== 'OR')).join(' ');
        // Keeps cursor at the end of search text (PSNP resets it to the beginning)
        if (searchBar.value !== '') searchBar.selectionStart = searchBar.selectionEnd = searchBar.value.length;
    }, 500);

    // Refines search results by inserting `AND`
    searchBar.addEventListener("keydown", function (e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            e.stopPropagation();

            const words = this.value.match(/\S+/g) || [];
            for (let i = 0; i < words.length - 1; i++) {
                //if (words[i].toString().toUpperCase() === "N++") words[i] = "nplusplus";
                if ((words[i] !== "AND" && words[i] !== "OR") && (words[i + 1] !== "AND" && words[i + 1] !== "OR")) words[i] += " AND ";
                else words[i] += " ";
            }
            const query = encodeURIComponent(words.join(''));
            const key = viewingAnyProfile ? 'search' : 'q';
            if (window.location.search) location = window.location.pathname + `?${key}=${query}`;
            else if (viewingAnyProfile) location = window.location.pathname + `?${key}=${query}`;
            else if (location.href.includes('/leaderboard')) location = `/search/users?${key}=${query}`;
            else location = '/search' + window.location.pathname + `?${key}=${query}`;
        }
    });
}

/** Dynamically inserts completion time into First, Last, and Fastest Achievers.
 * @param {document} doc */
async function insertFirstLatestFastest(doc = document) {
    const tables = doc.querySelectorAll('#content div.col-xs-4 tbody'),
        tFirst = tables[0], tFirstUsers = tFirst.querySelectorAll('tr'),
        tLatest = tables[1], tLatestUsers = tLatest.querySelectorAll('tr'),
        tFastest = tables[2], tFastestUsers = tFastest.querySelectorAll('tr'),
        noAchievers = tFirstUsers.length === 0;

    // Fetching user's trophy list
    let url = window.location.href.replace('100-club', 'trophies');
    url = `${url}/${Settings.psnID}?order=date`;
    let trophyList = await fetchDoc(url);

    // Scraping the relevant data
    const avatar = trophyList.querySelector('a > img.trophy').getAttribute('src').replace('/m/', '/s/');
    trophyList = trophyList.querySelector('div.col-xs table.zebra > tbody');
    const firstTrophy = trophyList.querySelector('tr:first-of-type');
    const lastTrophy = Settings.bools.platify.val
        ? trophyList.querySelector('td img[title="Platinum"]').closest('tr')
        : trophyList.querySelector('tr:last-of-type');
    if (!lastTrophy.classList.contains('completed')) return false;
    const dateElements = lastTrophy.querySelector('td > span.separator.right').childNodes;

    // [First] Comparing dates and adjusting accordingly
    const myDate = Trophy.parseDate(lastTrophy);
    let rankFirst = 0, qualified = false;
    tFirstUsers.forEach((tr, i) => {
        const theirDate = Trophy.parseDate(tr);
        if (!qualified && myDate <= theirDate) {
            rankFirst = i + 1;
            qualified = true;
        }
        if (qualified) tr.querySelector('td.rank').textContent = i + 2;
    });
    if (qualified && tFirstUsers[49]) tFirstUsers[49].remove();

    // [Latest] Comparing dates and adjusting accordingly
    let rankLatest = 0; qualified = false;
    tLatestUsers.forEach((tr, i) => {
        const theirDate = Trophy.parseDate(tr);
        if (!qualified && myDate >= theirDate) {
            rankLatest = i + 1;
            qualified = true;
        }
        if (qualified) tr.querySelector('td.rank').textContent = i + 2;
    });
    if (qualified && tLatestUsers[49]) tLatestUsers[49].remove();

    // [Fastest] Comparing speeds and adjusting accordingly
    const mySpeed = (Trophy.parseDate(lastTrophy) - Trophy.parseDate(firstTrophy)) / 1000;
    let rankFastest = 0; qualified = false;
    tFastestUsers.forEach((tr, i) => {
        const theirSpeed = GameWithProgress.speedStringToSeconds(tr.querySelector('span.typo-top-date nobr').textContent);
        if (!qualified && mySpeed <= theirSpeed) {
            rankFastest = i + 1;
            qualified = true;
        }
        if (qualified) tr.querySelector('td.rank').textContent = i + 2;
    });
    if (qualified && tFastestUsers[49]) tFastestUsers[49].remove();

    // Adjusting ranks if page is empty
    if (noAchievers) {
        rankFirst++; rankLatest++; rankFastest++;
    }
    // Creating elements
    const myFirst = newElement('tr', { style: `background-color:${Settings.colors.completed};` },
        newElement('td', { class: 'rank', style: [noAchievers ? 'padding-left:10px;padding-right:10px;' : ''] }, `${rankFirst}`),
        newElement('td', {},
            newElement('a', { href: `/${Settings.psnID}` },
                newElement('img', { class: 'trophy sm', src: `${avatar}` }, ''))),
        newElement('td', { style: `width: 100%;` },
            newElement('a', { class: 'title', href: `/${Settings.psnID}` }, `${Settings.psnID}`)),
        newElement('td', {},
            newElement('center', {}, ...dateElements))
    );
    const myLatest = myFirst.cloneNode(true);
    myLatest.querySelector('td.rank').textContent = rankLatest;
    const myFastest = myFirst.cloneNode(true);
    myFastest.querySelector('td.rank').textContent = rankFastest;
    myFastest.querySelector('td:last-of-type').classList.add('right');
    myFastest.querySelector('td:last-of-type').replaceChildren(newElement('span', { class: 'typo-top-date' },
        newElement('nobr', {}, `${GameWithProgress.secondsToSpeedString(mySpeed)}`)));

    // Inserting elements if ranked
    if (rankFirst > 0) tFirst.insertBefore(myFirst, tFirstUsers[rankFirst - 1]);
    else if (noAchievers) tFirst.appendChild(myFirst);
    if (rankLatest > 0) tLatest.insertBefore(myLatest, tLatestUsers[rankLatest - 1]);
    else if (noAchievers) tLatest.appendChild(myLatest);
    if (rankFastest > 0) tFastest.insertBefore(myFastest, tFastestUsers[rankFastest - 1]);
    else if (noAchievers) tFastest.appendChild(myFastest);

    return true;
}

/** Constructs a 100% Club for when there isn't one.
 * @param {document} doc */
function constructFastest() {
    const first = newElement('div', { class: 'col-xs-4' },
        newElement('div', { class: 'title center flex v-align' },
            newElement('div', { class: 'grow' },
                newElement('h3', {}, 'First Achievers'))),
        newElement('table', { class: 'box zebra no-top-border' },
            newElement('tbody', {}))
    );
    const latest = first.cloneNode(true);
    latest.querySelector('h3').textContent = 'Latest Achievers';
    const fastest = first.cloneNode(true);
    fastest.querySelector('h3').textContent = 'Fastest Achievers';

    return newElement('div', { class: 'row' }, first, latest, fastest);
}

/** Applies enhancements to games once, or every `ms`.
 * @param {number} ms */
function monitorGames(ms) {
    let games = Game.getNodes().map(g => new Game(g));
    console.log('found: ' + games.length);
    Settings.games.markOrHide(...games);
    Settings.games.appendOwnershipIcon(...games);
    if (ms) setTimeout(() => { monitorGames(ms) }, ms);
}

/** Returns the \<tbody\> that holds the games on the current (or passed) page.
 * @param {*} doc 
 * @returns {HTMLTableSectionElement} */
function getGamesTableBody(doc = document) { return doc.querySelector(':is(#game_list > tbody, #gamesTable > tbody, #search-results > tbody)'); }



/** Creates and appends button */
async function createLoadAllPagesBtn(cb) {
    const btn = newElement('a', {
        href: 'javascript:void(0);',
        title: 'Loads all rows from current page to last page',
        style: `background:#64a75c; color: #fff; font-weight:500; text-transform:none; display:inline-block; font-family:'Roboto', Arial, Verdana, sans-serif;` +
            `text-align:center; padding:4px 8px 4px 8px; border-radius: 2px; white-space:nowrap; margin-right: 20px; font-size:14px;`,
    }, 'Load All');
    btn.addEventListener('click', onclickLoadMore);
    document.querySelector('#content div.col-xs-8 div.grow').appendChild(btn);


    // Helper functions
    async function onclickLoadMore(e) {
        e.currentTarget.removeEventListener('click', onclickLoadMore);
        e.currentTarget.style.display = 'none';

        // Clearing the DOM
        window.addEventListener('scroll', function (e) { e.stopPropagation(); }, true);
        document.querySelectorAll('ul.pagination').forEach(ul => ul.style.display = 'none');
        Game.getNodes().forEach(g => g.remove());
        document.querySelector('#load-more')?.remove();

        await iteratePages(cb);
    }

    async function iteratePages(cbPage) {
        const baseUrl = location.href.split('?')[0];
        const sp = new URLSearchParams(location.search);
        const pages = +document.querySelector('#content ul.pagination:not(.small) > li:nth-last-child(2) > a').textContent;
        const page = +sp.get('page') || 1;
        const order = sp.has('order') ? `&order=${sp.get('order')}` : '';
        const platform = sp.has('platform') ? `&platform=${sp.get('platform')}` : '';

        for (let i = page; i <= pages; i++) {
            console.log(`${baseUrl}?page=${i}${order}${platform}`);
            const doc = await fetchDoc(`${baseUrl}?page=${i}${order}${platform}`);
            cbPage(doc);
            await asyncTimeout(1000);
        }
    }
}

async function asyncTimeout(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }






/******************************************************************************************************************************
                                                        START OF SCRIPT
******************************************************************************************************************************/
var loggedIn = document.querySelector(':is(a.dropdown-toggle.cf > span, #elUserLink)'),
    viewingForumSubdomain = location.hostname.split('.')[0] === 'forum',
    viewingAnyThread = viewingForumSubdomain && location.pathname.split('/')[1] === 'topic',
    viewingSubforum = location.pathname.split('/')[1] === 'forum',
    viewingAnyProfile = document.querySelector('div.user-bar > div.avatar') && location.href.split('/').length === 4,
    games;

(async () => {
    const start = performance.now();
    Settings.init();
    await main();
    colorLog(`**********END OF DEBUGGING (${Math.round(performance.now() - start)}ms)**********`, 'blue');
})();

async function main() {
    colorLog(`${GM_info.script.name} (v${GM_info.script.version}) is running ` + Settings.psnID ? `(PSN: '${Settings.psnID}')` : `in Limited Mode`, 'green');


    // Globally improves search bars
    const searchBar = document.querySelector('input#search');
    if (searchBar) searchBarEnhancer(searchBar);

    // Globally adds Series tab
    const seriesTab = newElement('li', {}, newElement('a', { href: 'https://psnprofiles.com/series' }, 'Series'));
    document.querySelector('div.navigation > ul > li:nth-child(4)')?.after(seriesTab);

    /******************************************************************************************************************************
                                                        PROFILE[?search=]
    ******************************************************************************************************************************/
    if (viewingAnyProfile && loggedIn) {
        games = Game.getNodes().map(g => new GameWithProgress(g));
        const anchor = document.querySelector('#content div.col-xs-8 div.grow');
        const btnStackify = newElement('a', {
            href: '#',
            id: 'btnStackify',
            title: 'Evaluates and marks your stack progress for all loaded games',
            style: `background:#64a75c; color: #fff; font-weight:500; text-transform:none; display:inline-block; font-family:'Roboto', Arial, Verdana, sans-serif;` +
                `text-align:center; padding:4px 8px 4px 8px; border-radius: 2px; white-space:nowrap; margin-right: 20px; font-size:14px;`,
        }, 'Stackify');


        /******************************************************************************************************************************
                                                                OWN PROFILE
        ******************************************************************************************************************************/
        if (viewingAnyProfile && location.pathname === `/${Settings.psnID}`) {
            // Shows stack progress
            anchor.appendChild(btnStackify);
            btnStackify.addEventListener('click', PSNProfile.stackify);

            // If flagged, hide red panel
            const flagBox = document.querySelector('div.red');
            if (flagBox && Settings.bools.flagged.val) {
                flagBox.nextElementSibling.remove();
                flagBox.remove();
            }

            // Cache any new games
            await PSNProfile.cacheGames();
        }
        /******************************************************************************************************************************
                                                                OTHER PROFILE
        ******************************************************************************************************************************/
        else {
            const btnEnvy = btnStackify.cloneNode(true);
            btnEnvy.textContent = 'Envy';
            btnEnvy.setAttribute('id', 'btnEnvy')
            btnEnvy.setAttribute('title', `Shows only the games you don't own.`)

            anchor.appendChild(btnEnvy);
            btnEnvy.addEventListener('click', PSNProfile.envy);

            monitorGames(2000);
        }
    }
    /******************************************************************************************************************************
                                                            GAMES[?q=]
    ******************************************************************************************************************************/
    else if (location.href.includes("/games") && loggedIn) {
        games = Game.getNodes().map(g => new Game(g));
        const header = document.querySelector('#content div.col-xs-8 div.grow');
        const table = getGamesTableBody();
        const sp = new URLSearchParams(window.location.search);

        monitorGames();

        createLoadAllPagesBtn(cbGames);

        // Hide multiplatform games if filtered (and setting is enabled)
        if (Settings.bools.hideMultiplatform.val && sp.get('platform') !== 'psvr') {
            games.forEach(g => { if (g.numPlatforms > 1) g.el.style.display = 'none'; });
        }

        // Highly specific feature that only I care about (copying Game IDs)
        if (Settings.psnID === 'GIONAScm2') {
            games.forEach((game, i) => {
                const checkbox = newElement('input', { "type": "checkbox", "style": `margin-left:5px;`, "class": "copyCheck" });
                checkbox.addEventListener('change', async function () {
                    if (this.checked) copyToClipboard(game.id);
                });
                games[i].el.querySelector('td > a.title')?.after(checkbox);
            })
        }

        /** Callback function for each page */
        function cbGames(doc) {
            const games = Game.getNodes(doc).map(el => new Game(el));
            Settings.games.markOrHide(...games);

            // Hide multiplatform games if filtered (and setting is enabled)
            if (Settings.bools.hideMultiplatform.val && sp.get('platform') !== 'psvr') {
                games.forEach(g => { if (g.numPlatforms > 1) g.el.style.display = 'none'; });
            }
            // Hide completed games (if setting is enabled)
            if (Settings.bools.loadAllHideCompleted.val) {
                games.forEach(g => { if (Settings.games.isCompleted(g.id)) g.el.style.display = 'none'; });
            }

            games.forEach(g => {
                table.appendChild(g.el);
            });
            monitorGames();
        }
    }
    /******************************************************************************************************************************
                                                        TROPHY LIST
    ******************************************************************************************************************************/
    else if (location.href.includes("/trophies/")) {
        const list = new TrophyList()
            , trophies = Trophy.getTrophies({ omitDLC: false })
            , h3 = document.querySelector('#banner > div.banner-overlay > div > div.title-bar.flex.v-align > div.grow > h3'),
            anchor = document.querySelector('div.title-bar.flex.v-align > div.grow');

        // Normalize game title capitalization
        h3.style.textTransform = "none";

        // Clicking a Recent Player's name will redirect to their list for the game, sorted by date (delay prevents a conflict with Husky's script)
        setTimeout(() => {
            list.recentPlayers.forEach((el) => {
                let path = location.pathname.split('/');
                path[3] = el.querySelector('.small-title').textContent.trim() + '?order=date';
                path = 'https://psnprofiles.com' + path.join('/');
                el.querySelector('.small-title').setAttribute('href', path);
            })
        }, 800);

        monitorGames();

        // Dev feature
        if (Settings.psnID === 'GIONAScm2') {
            new CopyCheckbox(...trophies);

            const cbAll = newElement('input', { type: 'checkbox', style: `margin-left:5px;` }, 'All');
            cbAll.addEventListener('change', function () {
                if (this.checked) document.querySelectorAll('input.copyCheck').forEach(cb => { if (!cb.checked) cb.click(); })
                else document.querySelectorAll('input.copyCheck').forEach(cb => { if (cb.checked) cb.click(); })
            });
            anchor.appendChild(cbAll);
        }

    }
    /******************************************************************************************************************************
                                                        TROPHY
    ******************************************************************************************************************************/
    else if (location.href.includes("/trophy/")) {
        const players = document.querySelectorAll('div.col-xs-6 tr'); // both first & latest achievers

        setTimeout(() => {
            players.forEach(el => {
                let path = location.pathname.split('/');
                path[1] = 'trophies', path[3] = el.querySelector('a.title').textContent.trim() + '?order=date';
                path = 'https://psnprofiles.com' + path.join('/');
                el.querySelector('a.title').setAttribute('href', path);
            });
        }, 800);
    }
    /******************************************************************************************************************************
                                                        100% CLUB
    ******************************************************************************************************************************/
    else if (location.href.includes("/100-club/") && loggedIn) {
        const noAchievers = document.querySelector('div#content > div.center');
        const players = document.querySelectorAll('.col-xs-4 tr');

        if (noAchievers) {
            document.querySelector('div#content').replaceChildren(constructFastest());
            await insertFirstLatestFastest();
        }
        else if (Settings.bools.flagged.val) {
            await insertFirstLatestFastest();
        }

        setTimeout(() => {
            players.forEach(el => {
                let path = location.pathname.split('/');
                path[1] = 'trophies', path[3] = el.querySelector('a.title').textContent.trim() + '?order=date';
                path = 'https://psnprofiles.com' + path.join('/');
                el.querySelector('a.title').setAttribute('href', path);
            });
        }, 800);

    }
    /******************************************************************************************************************************
                                                       SERIES CATALOG
    ******************************************************************************************************************************/
    else if (window.location.pathname === '/series') {
        const header = document.querySelector('#content div.col-xs-8 div.grow');
        const table = getGamesTableBody();
        const infoDiv = newElement('div', { style: `display:inline-block; padding:4px 8px 4px 8px; width:200px; color:white; font-weight:500; margin-right:10px;` },
            newElement('span', { id: 'numLoaded', style: `display:inline-block; float:left;` }),
            newElement('span', { id: 'numHidden', style: `display:inline-block; float:right;` })
        );

        // Setting up DOM
        header.style.cssText += 'text-align:right;'
        header.querySelector('h3').style.cssText += 'float:left;'
        header.appendChild(infoDiv);
        createLoadAllPagesBtn(cbSeries);

        SeriesRow.refreshHeader(Settings.bools.platify.val);

        /** Callback function for each page */
        function cbSeries(doc) {
            const seriesRows = Game.getNodes(doc).map(el => new SeriesRow(el));
            seriesRows.forEach(s => {
                table.appendChild(s.el);
            });
            SeriesRow.refreshHeader(Settings.bools.platify.val);
        }

    }
    /******************************************************************************************************************************
                                                        SERIES
    ******************************************************************************************************************************/
    else if (location.href.includes("/series/") && loggedIn) {
        monitorGames();

        const series = new Series();
        if (Settings.bools.platify.val) series.platify();

        // Displays series progress. Name is the user's PSN ID, unless they're viewing someone else's progress.
        const name = location.href.split('/').length === 6 ? location.href.split('/')[5] : Settings.psnID;
        series.showProgressHeader(name, Settings.bools.platify.val);
    }
    /******************************************************************************************************************************
                                                        TROPHY GUIDE
    ******************************************************************************************************************************/
    else if (location.pathname.substring(0, 7) === '/guide/') {
        const roadmapStages = document.querySelectorAll('div#roadmapSteps div[id] > div.guide');


        // Ability to mass-copy the names and descriptions of each trophy in a given stage.
        if (Settings.psnID === 'GIONAScm2') {
            const rich = newElement('div', {});

            roadmapStages.forEach(stage => {
                const trophies = [...stage.querySelectorAll('div.trophy')].map(t => ({
                    name: t.querySelector('a.title').textContent,
                    desc: t.querySelector('span').textContent
                }));
                // Checkbox next to stage name to select (copy) all of its trophies
                const cb = newElement('input', { type: 'radio', name: 'stage', style: `margin-left:5px;` });
                cb.addEventListener('change', function () {
                    if (this.checked) {
                        rich.innerHTML = '';
                        trophies.forEach(trophy => {
                            const richTrophyInfo = `<b>${trophy.name}</b>&shy;${'\v' + trophy.desc}`;
                            rich.innerHTML += `${richTrophyInfo}<br>`;
                            copyToClipboard(rich.innerHTML);
                        });
                    }
                });
                stage.querySelector('h1').appendChild(cb);
            });
        }
    }
    /******************************************************************************************************************************
                                                        SUBFORUM
    ******************************************************************************************************************************/
    else if (viewingSubforum) {
        console.log('viewing subforum');
    }
    /******************************************************************************************************************************
                                                        FORUM THREAD
    ******************************************************************************************************************************/
    else if (viewingAnyThread) {
        console.log('viewing thread');
        const nav = document.querySelector('ul[itemscope]');

        // If viewing game topic, create shortcut to trophy list
        if (nav.querySelector('li:nth-child(3) > a > span')?.textContent.trim() === 'Game Forums') {
            let url = nav.querySelector('li:nth-child(5) a').getAttribute('href');
            fetchDoc(url).then(doc => {
                url = doc.querySelector('div.ipsType_richText.ipsType_normal > a').getAttribute('href');
                document.querySelector('#trophylist').setAttribute('href', url);
            });
            const btnTrophyList = newElement('li', { itemprop: "itemListElement", itemscope: '' },
                newElement('a', { id: 'trophylist' },
                    Settings.icons.trophy(), newElement('i', { class: 'fa fa-angle-right' }))
            );
            nav.querySelector('li:nth-child(5)').before(btnTrophyList);
        }
    }

}