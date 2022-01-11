# PSNPlatinum
A userscript that augments [PSNP](https://psnprofiles.com/) with various QoL enhancements and features.
___
## Installation/Usage
0. Install a userscript manager browser extension (such as [Tampermonkey](https://www.tampermonkey.net/)).
1. Click [**here**](https://github.com/GIONAScm2/PSNPlatinum/raw/main/PSNPlatinum.user.js) to install the script.
2. Make sure you're signed into PSNP, otherwise the script won't work.

#### Mobile Compatibility
- **Android:** Most mobile browsers don't feature browser extensions, so your options are limited. I use [Firefox Nightly](https://blog.mozilla.org/addons/2020/09/29/expanded-extension-support-in-firefox-for-android-nightly/).
- **Apple:** Safari should work.
___
## Features
#### GENERAL:
- Improves search bars
  - Faster searching via forced page refreshes
  - More relevant results *(searching "call of duty" will show only the 23 CoD games rather than 1,350+ unrelated games)*
  - Keeps cursor at the end of the search text after searching so that subsequent searches are faster
- Marks games across the site that you've played (blue), platted (green), and completed (grey)
- Attaches a clickable icon (`+`/`-`) to unplayed games to mark them as 'owned', marking them blue across the site
- Settings menu in PSNP's dropdown menu to customize preferences:
  - [ ] **Platify:** Makes the site more platinum-oriented, like platted games being considered completed (grey)
  - [ ] **Flagged:** Alters the UI/UX to provide a fuller experience for flagged users
  - [ ] **Ownership Icons:** Toggles the ownership icons (`+`/`-`) described above
- Adds 'Series' tab to nav menu to quickly access PSNP's experimental Series catalog
#### PROFILE (self):
- Automatically caches games so that they can be marked across the site
  - The first time you visit your profile, ***all*** your games will be cached, which may take 5-10s; you will be warned if you try to leave the page during that time
  - On subsequent visits, the caching is instantaneous since only the visible games are cached/updated
- 'Stackify' button shows only your stackable games, and your progress in them (E.G. `1/3`); only one game is shown per set of stacks
- [X] **Flagged:** If checked, intrusive red panel will be removed
#### PROFILE (other user):
- 'Envy' button shows only games that you don't own
#### GAMES:
- When filtering Platform to view only PS3 games, cross-platform games are removed
#### TROPHY LISTS:
- Game titles are changed from uppercase to proper case (I can't be the only one who was triggered by this)
- Clicking names of Recent Players takes you to their trophy list for the game, sorted by date
  - You can still go to their profile by clicking their avatar
#### TROPHY PAGES:
- Similarly to trophy lists, clicking names of First/Latest Achievers takes you to their list, sorted by date
#### 100% CLUB:
- If you're the first to finish a game and PSNP hasn't created its First/Fastest tables yet, they will be manually created (useful for taking screenshots)
- [X] **Flagged:** If checked, First/Latest/Fastest entries will be inserted, if applicable
#### SERIES CATALOG:
- 'Load All' button loads all [game series](https://psnprofiles.com/series) onto the page (useful in conjunction with CTRL+F, since PSNP's series search bar doesn't currently work)
#### SERIES PAGES:
- Creates a header that shows your aggregate progress towards completing all the series' games
- [X] **Platify:** If checked, nonplats will be hidden, and the completion icon-sprites will be based solely on plat count

___
## Gallery
Go [**here**](https://imgur.com/a/Mqma4uG) to see images of the userscript in action.
