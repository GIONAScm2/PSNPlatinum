/* eslint-disable no-unused-vars */

/******************************************************************************************************************************
                                                       PSNP
******************************************************************************************************************************/
/** A basic trophy. Also contains static utility functions. */
class Trophy {
    /** Constructs a basic Trophy (from Profile)
     * @param {HTMLTableRowElement} tr - The \<tr\> representing the trophy */
    constructor(tr) {
        // Trophy list trophies each have 7 <td>, whereas Advisor and Log trophies have >7 and require a different rarity selector.
        const standard = tr.children.length === 7;

        this.el = tr;
        this.name = tr.querySelector('td > a.title').textContent.trim();
        this.desc = tr.querySelector('td > br').nextSibling.textContent.trim();
        /** Number that uniquely identifies a trophy within a list, ranging from 1 to [number of trophies] */
        this.id = +tr.querySelector('a.title').getAttribute('href').split('/')[3].split('-')[0];
        this.image = tr.querySelector('img').getAttribute('src');
        this.rarity = standard
            ? +tr.querySelector('td.hover-hide span.typo-top').textContent.trim().replace('%', '')
            : +tr.querySelector('td:nth-last-of-type(2) > span > span.typo-top').textContent.trim().replace('%', '');
        this.type = tr.querySelector(' td > span > img[title]').getAttribute('title').trim();
        /** @type {boolean} */
        this.isCompleted = standard
            ? tr.querySelector('td:nth-of-type(3) > span > span.typo-top-date') !== null
            : tr.querySelector('td:nth-of-type(6) > span > span.typo-top-date') !== null;
        this.dateEarned = Trophy.parseDate(tr);
    }

    get rarityString() { return this.rarity.toFixed(2); }
    /** Bronze, Silver, Gold, or Platinum */
    /** Trophy earn date (ms), or null if unearned */
    /** Point value corresponding to trophy type */
    get points() {
        let pts = 0;
        switch (this.type) {
            case 'Bronze':
                pts = 15;
                break;
            case 'Silver':
                pts = 30;
                break;
            case 'Gold':
                pts = 90;
                break;
            case 'Platinum':
                pts = 180;
                break;
        }
        return pts;
    }


    /** Returns trophy nodes from PSNP trophy lists, Trophy Log, and Trophy Advisor.
    * @param {{omitDLC: boolean, doc: document}} opts 
    * @returns {NodeListOf<HTMLTableRowElement>} */
    static getNodes(opts = {}) {
        const defaults = { omitDLC: false, doc: document }
        opts = Object.assign({}, defaults, opts);

        const trophyGroups = opts.doc.querySelectorAll('#content > div.row > :is(div.col-xs, div.col-xs-12) > div.box > table:last-child > tbody');
        if (trophyGroups.length === 0) {
            console.log('ERROR: No trophies selected');
            return [];
        } else if (opts.omitDLC) {
            return trophyGroups[0].querySelectorAll('tr:not(:empty)')
        } else {
            return opts.doc.querySelectorAll('#content > div.row > :is(div.col-xs, div.col-xs-12) > div.box > table:last-child > tbody > tr:not(:empty)');
        }
    }
    /** Returns an array of trophies from the supplied (or current) document. Works with PSNP trophy lists, Trophy Log, and Trophy Advisor.
     * @param {{omitDLC: boolean, doc: document}} opts
     * @returns {Trophy[]} */
    static getTrophies(opts = {}) {
        const trophies = [];
        this.getNodes(opts).forEach((tr) => trophies.push(new Trophy(tr)));
        return trophies;
    }
    /** Returns the date (ms) a trophy was earned, or null if unearned.
     * @param {HTMLTableRowElement} tr */
    static parseDate(tr) {
        let dateEarned = tr.querySelector('td > :is(span.separator.right, center)');
        if (!dateEarned?.querySelector('nobr')) {
            return null;
        }

        const date = dateEarned.querySelector('span.typo-top-date > nobr').textContent.trim().replace(/(\d+)(st|nd|rd|th)/, "$1"), // 4th Apr 2021 -> 4 Apr 2021
            time = dateEarned.querySelector('span.typo-bottom-date > nobr').textContent.trim(); // 1:03:44 PM
        return new Date(Date.parse(`${date} ${time}`)); // 1622518461000
    }
}

/** A trophy with extra details: game, number, owners, achievers */
class TrophyFromLog extends Trophy {
    #game;
    constructor(tr) {
        super(tr);
        this.game = tr.querySelector('a > img.game').getAttribute('title');
    }
    get game() { return this.#game }
}



/** Utility class containing properties and methods unique to PSNP trophy lists */
class TrophyList {
    id;
    /** @type {HTMLTableRowElement[]} */
    stacks = [];
    /** @type {HTMLTableRowElement[]} */
    recentPlayers = [];

    constructor(doc = document) {
        doc.querySelectorAll('div.col-xs-4 >  div.title.flex.v-align > div.grow > h3').forEach((h3) => {
            if (h3.textContent === 'Other Platforms and Regions') {
                this.stacks = Array.from(h3.closest('div.title.flex.v-align').nextElementSibling.querySelectorAll('tr'));
            }
            else if (h3.textContent === "Recent Players")
                this.recentPlayers = Array.from(h3.closest('div.title.flex.v-align').nextElementSibling.querySelectorAll('tr'));
        });
        // this.id = +doc.URL.split('/')[4].split('-')[0];
    }
}



/** Basic PSNP game, containing only universally-present properties. */
class Game {
    /** @param {HTMLTableRowElement} tr - The \<tr\> representing the trophy */
    constructor(tr) {
        this.el = tr;
        this.name = tr.querySelector(':is(a.title, td > span > span > a)').textContent.trim();
        this.url = 'https://psnprofiles.com' + tr.querySelector(':is(a.title, td > span > span > a)').getAttribute('href');
        this.id = +tr.querySelector(':is(a.title, td > span > span > a)').getAttribute('href').split('/')[2].split('-')[0];
        // Tests general case first (Games, Profile, and Series pages), then trophy list-specific case.
        this.stack = tr.querySelector('tr :is(span, td) > bullet')
            ? tr.querySelector(':is(span, td) > bullet').nextSibling.textContent.trim()
            : tr.querySelector('td > span.separator > span.typo-top')
                ? tr.querySelector('td > span.separator > span.typo-top').textContent.trim()
                : '';
        // this.image = tr.querySelector('img').getAttribute('src');
        this.platformArray = Array.from(tr.querySelectorAll('span.tag.platform')).map((tag) => tag.textContent);
        this.platforms = {
            Vita: this.platformArray.includes('Vita'),
            PS3: this.platformArray.includes('PS3'),
            PS4: this.platformArray.includes('PS4'),
            PS5: this.platformArray.includes('PS5'),
            VR: this.platformArray.includes('VR')
        };
    }

    get numPlatforms() { return Object.values(this.platforms).filter(b => b === true).length; }


    /** Returns NodeList of games from Profile(?q=), Games(?q=), Series, and TrophyList ("Other Platforms and Regions"). */
    static getNodes(doc = document) {
        if (doc.URL.includes('/trophies/'))
            return new TrophyList(doc).stacks
        return Array.from(doc.querySelectorAll(`:is(#game_list, #search-results:not([style='display: none;']), #gamesTable:not([style='display: none;']), table.series:not(.legend)) tbody > tr:not(:empty, [id='load-more'], [id='table-loading'])`));
    }

    toJSON() {
        return { name: this.name, id: this.id, stack: this.stack, platforms: this.platforms, played: this.played, url: this.url };
    }
}

/** PSNP game with additional fields, including user progress (Profile, Series) */
class GameWithProgress extends Game {
    #hasPlat;
    #isPlatted;
    #hasDLC;
    #percent;
    #rarityBase;
    #rarityFull;
    #speedString;
    #speed;

    /** @param {HTMLTableRowElement} tr - The \<tr\> representing the trophy */
    constructor(tr) {
        super(tr);
        this.#hasPlat = !!tr.querySelector('img.icon-sprite.platinum-18');
        this.#isPlatted = !!tr.querySelector('img.icon-sprite.platinum-18.earned');
        this.#hasDLC = tr.querySelectorAll('td > span.separator.completion-status > span').length === 2;
        this.#percent = +tr.querySelector('div.progress-bar > span')?.textContent.replace('%', '');
        this.#rarityBase = +tr.querySelector('td > span.separator.completion-status > span:first-of-type')?.textContent.replace('%', ''); //+tr.querySelector('span[title="Platinum Rarity"]')?.textContent.replace('%', '');
        this.#rarityFull = +tr.querySelector('td > span.separator.completion-status > span:last-of-type')?.textContent.replace('%', ''); //+tr.querySelector('span[title="Completion Rate"]')?.textContent.replace('%', '');
        this.#speedString = tr.querySelector('td[style*="width: 100%;"] > div.small-info:nth-of-type(3) > bullet + b')?.textContent.trim() || '';
        this.#speed = this.speedString ? GameWithProgress.speedStringToSeconds(this.speedString) : null;
    }

    get hasPlat() { return this.#hasPlat; }
    get isPlatted() { return this.#isPlatted; }
    set isPlatted(x) { this.#isPlatted = x; }
    /** True if game has 2 different rarity numbers. NOTE: PSNP currently doesn't show a base rarity for nonplats with DLC, so those cases are undetectable.  */
    get hasDLC() { return this.#hasDLC; }
    /** Number (int), or NaN if unstarted. */
    get percent() { return this.#percent; }
    /** Number (float) of the first displayed rarity. */
    get rarityBase() { return this.#rarityBase; }
    /** Number (float) of the last displayed rarity. Equal to rarityBase for games without DLC. */
    get rarityFull() { return this.#rarityFull; }
    /** String representing game completion speed, of the form of the form `<num> <timeMetric>(s), <num> <timeMetric>(s)`. */
    get speedString() { return this.#speedString; }
    /** Completion speed in seconds, otherwise null. */
    get speed() { return this.#speed; }

    /** Parses a Fastest Achiever's speed as seconds. speedString is always of the form `<num> <timeMetric>(s), <num> <timeMetric>(s)`.
     * @param {string} speedString */
    static speedStringToSeconds(speedString) {
        const speeds = speedString.split(', ');
        let seconds = 0;

        for (const speed of speeds) {
            const time = parseInt(speed.split(' ')[0]);
            const timeMetric = speed.split(' ')[1].substring(0, 3);

            switch (timeMetric) {
                case "sec":
                    seconds += time;
                    break;
                case "min":
                    seconds += 60 * time;
                    break;
                case "hou":
                    seconds += 60 * 60 * time;
                    break;
                case "day":
                    seconds += 60 * 60 * 24 * time;
                    break;
                case "wee":
                    seconds += 60 * 60 * 24 * 7 * time;
                    break;
                case "mon":
                    seconds += 60 * 60 * 24 * 30.4 * time; // PSNP calculates a month as 30.4 days (https://forum.psnprofiles.com/topic/61709-bug-in-calculating-time-between-trophies/)
                    break;
                case "yea":
                    seconds += 60 * 60 * 24 * 365 * time;
                    break;
            }
        }
        return seconds;
    }

    /** Converts seconds into a PSNP speedString of the form `<num> <timeMetric>(s), <num> <timeMetric>(s)`. 
     *  The largest metrics are always used (EG: `2 years, 1 month`, even if it omits an additional 3 weeks).
     * @param {number} sec */
    static secondsToSpeedString(sec) {
        let speedString = "";

        for (let i = 0; i < 2; i++) {
            if (i === 1) {
                speedString += ", ";
            }

            if (sec >= 31536000) { // YEARS
                const years = Math.floor(sec / 31536000);
                sec -= 31536000 * years;
                speedString += `${years} year${years > 1 ? 's' : ''}`;
            } else if (sec >= 2626560) { // MONTHS
                const months = Math.floor(sec / 2626560); // seconds in 30.4 days (PSNP calculates a month as 30.4 days)
                sec -= 2626560 * months;
                speedString += `${months} month${months > 1 ? 's' : ''}`;
            } else if (sec >= 604800) { // WEEKS
                const weeks = Math.floor(sec / 604800);
                sec -= 604800 * weeks;
                speedString += `${weeks} week${weeks > 1 ? 's' : ''}`;
            } else if (sec >= 86400) { // DAYS
                const days = Math.floor(sec / 86400);
                sec -= 86400 * days;
                speedString += `${days} day${days > 1 ? 's' : ''}`;
            } else if (sec >= 3600) { // HOURS
                const hours = Math.floor(sec / 3600);
                sec -= 3600 * hours;
                speedString += `${hours} hour${hours > 1 ? 's' : ''}`;
            } else if (sec >= 60) { // MINUTES
                const mins = Math.floor(sec / 60);
                sec -= 60 * mins;
                speedString += `${mins} minute${mins > 1 ? 's' : ''}`;
            } else { // SECONDS
                speedString += `${sec} second${sec > 1 ? 's' : ''}`;
                break;
            }
        }
        return speedString;
    }

    toJSON() {
        const obj = {
            hasPlat: this.hasPlat, isPlatted: this.isPlatted, hasDLC: this.hasDLC, percent: this.percent, rarityBase: this.rarityBase,
            rarityFull: this.rarityFull, speedString: this.speedString, speed: this.speed
        };
        return Object.assign(obj, super.toJSON())
    }
}



class SeriesRow {
    /** @param {HTMLTableRowElement} tr */
    constructor(tr) {
        this.el = tr;
        this.id = +tr.querySelector('a.title').getAttribute('href').split('/')[2].split('-')[0];
        this.name = tr.querySelector('a.title').textContent.trim();
        this.numGames = +tr.querySelector('td > span.small-info > b').textContent.replace(/,/g, "").trim();
        this.numPlats = +tr.querySelector('span.icon-sprite.platinum')?.nextElementSibling?.textContent.replace(/,/g, "").trim() || 0;
        this.numGolds = +tr.querySelector('span.icon-sprite.gold')?.nextElementSibling?.textContent.replace(/,/g, "").trim() || 0;
        this.numSilvers = +tr.querySelector('span.icon-sprite.silver')?.nextElementSibling?.textContent.replace(/,/g, "").trim() || 0;
        this.numBronze = +tr.querySelector('span.icon-sprite.bronze')?.nextElementSibling?.textContent.replace(/,/g, "").trim() || 0;
    }

    static monitorSeriesList(platify) {
        let seriesList = Game.getNodes().map(n => new SeriesRow(n));
        if (platify) {// Hides series without plats and makes numGames = numPlats
            seriesList.forEach(series => {
                if (!series.numPlats) {
                    series.el.classList.add('noplats');
                    series.el.style.display = 'none';
                }
                else if (series.numPlats < series.numGames)
                    series.el.querySelector('td > span.small-info > b').textContent = series.numPlats;
            });
            const numHidden = document.querySelectorAll('tbody > tr.noplats').length;
            document.querySelector('#numHidden').textContent = `(${numHidden} hidden)`;
        }
        let numLoaded = platify ? document.querySelectorAll('tbody > tr:not(.noplats)').length : seriesList.length;
        document.querySelector('#numLoaded').textContent = `${numLoaded} loaded`;

        setTimeout(() => { this.monitorSeriesList(platify); }, 500);

    }
}



class Series {
    constructor(doc = document) {
        /** Div containing tables (stages). 
         * @type {HTMLElement} */
        this.el = doc.querySelector('div#content div.col-xs');
        /** @type {number} */
        this.id = +doc.querySelector('picture.series > img').getAttribute('src').split('/')[4];
        /** @type {string} */
        this.name = doc.querySelector('div.series-info div.ellipsis > span').textContent.trim();
        this.stages = Array.from(this.el.querySelectorAll('table.box.zebra.series')).map(s => new Series.Stage(s));
        this.hasStage0 = this.stages[0].stageNum === 0;
    }
    /** @type {GameWithProgress[]} */
    get games() { return this.stages.flatMap(s => s.games); }
    get numPlats() { return this.stages.reduce((sum, s) => sum + s.numPlats, 0) }
    get numPlatted() { return this.stages.reduce((sum, s) => sum + s.numPlatted, 0) }//{ return this.games.filter(g => g.isPlatted).length; }
    get numCompleted() { return this.stages.reduce((sum, s) => sum + s.numCompleted, 0) }//{ return this.games.filter(g => g.percent === 100).length; }

    /** Visually transforms a series to be platinum-oriented by hiding nonplats and having the completion `.icon-sprite`s
     *  factor out nonplats and DLC. Also has the capacity to hide DLC rarity and make platted games appear 100% completed. */
    platify() {
        const nums = [];
        for (let i = 0; i < this.stages.length; i++) {
            const stage = this.stages[i];
            stage.platifyIconSprites();
            // Stage 0 is a special case (reserved for spinoff games), so if it's removed, it shouldn't be replaced.
            if (stage.stageNum === 0) {
                stage.platifyGames();
                continue;
            }
            // Each stageNum is stored in queue and assigned to the next eligible Stage (to maintain sequential stageNums)
            nums.push(stage.stageNum);
            if (stage.platifyGames()) stage.stageNum = nums.shift();
        }
    }

    /** Creates and appends a header that displays aggregate series progress. */
    showProgressHeader(psnID, platify) {
        // Deleting series name's text node and normalizing capitalization
        document.querySelector('h3').style.textTransform = 'none';
        document.querySelector('h3 > span').nextSibling.remove();

        const completed = platify ? this.numPlatted : this.numCompleted
            , total = platify ? this.numPlats : this.games.length
            , progress = `<b>${this.name} (${completed}/${total})</b>`
            , header = newElement('span', { style: `font-size:26px;` });
        // Header is colored cyan if series is completed
        header.innerHTML = `${completed === total ? progress.fontcolor('#00ffff') : progress} for <b>${psnID}</b>`;
        document.querySelector('h3').append(header);
    }

    static Stage = class {
        // Private to implement custom setter.
        #stageNum;
        /** @param {HTMLTableElement} el */
        constructor(el) {
            this.el = el;
            /** \<td\> containing stageNum; see platify() for details. */
            this.tdStageNum = el.querySelector('tr:first-of-type td:first-of-type');
            /** \<td\> containing stageNum; see platify() for details. */
            this.tdStageicon = el.querySelector('tr:first-of-type td:last-of-type');
            /** Stage number. "No stage" = 0.
             *  @type {number} */
            this.#stageNum = this.tdStageNum.querySelector('span.typo-top').nextElementSibling === null ? parseInt(this.tdStageNum.querySelector('span.typo-top').textContent) : 0;
            this.games = Array.from(el.querySelectorAll('tr')).map(tr => new GameWithProgress(tr));
        }
        get numPlats() { return this.games.filter(g => g.hasPlat).length; }
        get numPlatted() { return this.games.filter(g => g.isPlatted).length; }
        get numCompleted() { return this.games.filter(g => g.percent === 100).length }
        get stageNum() { return this.#stageNum; }
        set stageNum(n) {
            this.#stageNum = n;
            this.el.querySelector('span.typo-top').textContent = n;
        }

        /** Modifies the Stage's completion icon-sprite to reflect only plats, showing Basic Completion (green icon + background)
         *  for 1 platted Stage game rather than 1 completed one, and Full Completion (blue icon + background) for platting all
         *  Stage games rather than completing them. */
        platifyIconSprites() {
            if (!this.numPlatted || this.numCompleted === this.games.length) return;

            const oldC = this.numCompleted > 0 ? { bg: 'basic-completion', icon: 'completion' } : { bg: 'incomplete', icon: 'incomplete' }
                , newC = this.numPlatted === this.numPlats ? { bg: 'full-completion', icon: 'completion-star' } : { bg: 'basic-completion', icon: 'completion' };

            // The first 2 classList replacements affect the background color; 3rd affects icon type.
            this.el.classList.replace(oldC.bg, newC.bg);
            this.tdStageicon.classList.replace(oldC.bg, newC.bg);
            this.tdStageicon.querySelector('img.icon-sprite').classList.replace(oldC.icon, newC.icon);
        }
        /** Platifies a Stage's games and returns `true` if the Stage survives, or `false` if it's discarded due to having no plats.
         *  (Used in conjunction with Series.platify()) */
        platifyGames() {
            /** A 'Stage leader' is the first Game (\<tr\>) in a Stage (\<table\>). While other Games have 5 \<td\>, the Stage leader has 7, as
             *  it contains the Stage number and the icon-sprite representing Stage completion. So if the Stage leader has no plat, its \<td\>
             *  elements get iteratively passed to subsequent Games until a suitable Stage leader is found (or until the Stage is discarded). */
            let suitableLeader = false;

            for (let i = 0; i < this.games.length; i++) {
                const current = this.games[i];

                // Hiding DLC rarity
                // if (current.hasDLC) current.el.querySelector('td > span.separator.completion-status > span.completion').style.display = 'none';

                // If platted, put completion bar to 100%
                // if (current.isPlatted) {
                //     current.el.querySelector('div.progress-bar > div').style.width = '100%';
                //     current.el.querySelector('div.progress-bar > span').textContent = '100%';
                // }

                // If current game has plat, Stage has suitable leader and won't be discarded.
                if (current.hasPlat) suitableLeader = true;
                // If current game doesn't have plat...
                else {
                    // ...And there's still no suitable Stage leader and no more Games, discard the entire Stage.
                    if (!suitableLeader && i == this.games.length - 1) this.el.style.display = 'none';
                    else {
                        // ...And there's still no suitable Stage leader, make the next Game the Stage leader.
                        if (!suitableLeader) {
                            this.games[i + 1].el.insertBefore(this.tdStageNum, this.games[i + 1].el.childNodes[0]);
                            this.games[i + 1].el.appendChild(this.tdStageicon);
                        }
                        // Discard current game
                        current.el.style.display = 'none';
                    }
                }
            }
            return suitableLeader;
        }
    }
}

/******************************************************************************************************************************
                                                       UTILITY
******************************************************************************************************************************/
/** Creates an HTML element.
 * @param {string} tagname 
 * @param {{attr: string}} [attributes] 
 * @param  {string[] | HTMLElement[]} [children]
 * @returns HTMLElement */
function newElement(tagname, attributes = {}, ...children) {
    const el = document.createElement(tagname)
    for (const key in attributes) {
        el.setAttribute(key, attributes[key])
    }
    children.forEach(child => {
        if (typeof child === 'string') {
            el.appendChild(document.createTextNode(child))
        } else {
            el.appendChild(child)
        }
    });
    return el;
}

/** console.debug() with color.
 * @param {string} text  Message to display
 * @param {string} color Message color */
function colorLog(text, color) {
    console.debug(`%c${text}`, `color: ${color}`);
}

/** Fetches a URL and returns the parsed HTML Document.
 * @param {string} url 
 * @returns */
async function fetchDoc(url, opt) {
    const parser = new DOMParser();
    let doc = await fetch(url, opt);
    doc = await doc.text();
    return parser.parseFromString(doc, 'text/html');
}

function copyToClipboard(text) {
    var type = "text/html";
    var blob = new Blob([text], { type });
    // eslint-disable-next-line no-undef
    var data = [new ClipboardItem({ [type]: blob })];
    navigator.clipboard.write(data)
}

/** Returns true if `x` is a pure object, otherwise false if it's a primitive/null/array/function/Map/Set. */
function isObject(x) { return typeof x === 'object' && x !== null && !Array.isArray(x) && !(x instanceof Map) && !(x instanceof Set); }

/** Assigns all mutual enumerable properties of `source` to `target`. */
function assignSharedProps(target, source) {
    Object.keys(source).filter(key => key in target).forEach(key => {
        console.log(`${target[key]} = ${source[key]} (${key})`);

        if (isObject(target[key]) && isObject(source[key])) {
            assignSharedProps(target[key], source[key])
        }
        else target[key] = source[key];
    });
}

/** Populates a trophy/achievement list with checkboxes that allow easy copying to 
 *  clipboard with RTF designed specifically for OneNote. */
class CopyCheckbox {
    richContainer = newElement('div', {});

    /** @param {Trophy[]} trophies */
    constructor(...trophies) {
        this.members = [];
        this.selected = [];
        this.addMembers(...trophies)
    }

    addMembers(...trophies) {
        trophies.forEach(ach => {
            const cb = ach.el.querySelector('input.copyCheck') || newElement('input', { type: 'checkbox', style: `margin-left:5px;`, class: 'copyCheck' });
            cb.addEventListener('change', async (e) => {
                if (e.target.checked) this.selected.push(ach);
                else this.selected.splice(this.selected.indexOf(ach), 1);
                this.richContainer.innerHTML = '';
                this.selected.forEach(sel => { this.richContainer.innerHTML += `<b>${sel.name}</b>&shy;${'\v' + sel.desc}<br>`; });
                copyToClipboard(this.richContainer.innerHTML);
            });
            // if (ach.el.querySelector)
            ach.el.querySelector(':is(td > a.title, .titleAnchor)').after(cb);
        });
        this.members = [...this.members, ...trophies]
    }

}