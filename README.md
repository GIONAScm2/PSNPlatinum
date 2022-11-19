# PSNPlatinum
A userscript that augments [PSNP](https://psnprofiles.com/) with various QoL enhancements and features.

**NOTE:** v3.0.0 revamps the source code, so expect some initial instability.
___
## Installation/Usage
0. Install a userscript manager browser extension (such as [Tampermonkey](https://www.tampermonkey.net/)).
1. Click [**here**](https://github.com/GIONAScm2/PSNPlatinum/raw/main/PSNPlatinum.user.js) to install the script.
2. Make sure you're signed into PSNP, otherwise most features won't work.

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
- Adds 'Series' tab to nav menu to quickly access PSNP's experimental Series catalog
- Clicking PSN IDs now redirects you to their trophy list, sorted by date earned (Recent Players, 100% Club, )
  - You can still go to their profile by clicking their avatar
- Settings menu in PSNP's dropdown menu to customize preferences:
  - [ ] `Platify`: Makes the site more platinum-oriented, like platted games being considered completed (grey)
  - [ ] `Flagged`: Alters the UI/UX to provide a fuller experience for flagged users
  - [ ] `Ownership Icons`: Toggles the ownership icons (`+`/`-`) described above
  - [ ] `[Load All] Hide Completed`: 'Load All' buttons will hide your completed games instead of coloring them
  - [ ] `Hide Multiplatform From Filtered`: Hides multiplatform games from the 'Games' page when a platform filter is applied
#### PROFILE (self):
- Automatically caches games so that they can be marked across the site
  - *This initially takes 5-10s (during which you'll be prevented from leaving the page), but then it's instantaneous*
- `Stackify` button shows only your stackable games, and your progress in them (E.G. `1/3`); only one game is shown per set of stacks
- [X] `Flagged`: If checked, intrusive red panel will be removed
#### PROFILE (other user):
- `Envy` button shows all the user's games that you don't own, applying any active filters/sorting
#### GAMES:
- `Load All` button loads all games from current page to last page, applying any active filters/sorting
- [X] `Hide Multiplatform From Filtered`: If checked, multiplatform lists will be hidden when you have filters applied; this also affects the `Load All` button
#### TROPHY LISTS:
- Game titles are changed from uppercase to proper case (I can't be the only one who was triggered by this)
#### TROPHY PAGES:
- Clicking names of First/Latest Achievers takes you to their list, sorted by date
#### 100% CLUB:
- If you're the first to finish a game and PSNP hasn't created its First/Fastest tables yet, they will be manually created (useful for taking screenshots)
- [X] `Flagged`: If checked, First/Latest/Fastest entries will be inserted, if applicable
#### SERIES CATALOG:
- `Load All` button loads all [game series](https://psnprofiles.com/series) from current page to last page, applying any active filters/sorting
  - Since PSNP's Series search bar doesn't currently work, this (in conjunction with CTRL+F) is a decent workaround
#### SERIES PAGES:
- Creates a header that shows your aggregate progress towards completing all the series' games
- [X] `Platify`: If checked, nonplats will be hidden, and the completion icon-sprites will be based solely on plat count
#### FORUMS:
- Adds shortcuts to forum threads to quickly navigate to corresponding trophy list

___
## Gallery
Go [**here**](https://imgur.com/a/Mqma4uG) to see images of the userscript in action.
