'use strict';

/**
 * State and dispatch tables
 */
var STATE = false,
    STATE_ICON = {
      false: 'mmft-16.png',
      true: 'mmft-off.png'
    },
    STATE_DISPATCH = {
      false: '$("textarea, input:text, search").mmkb().addClass("__mm");',
      true: '$("textarea, input:text, search").unbindMmkb().removeClass("__mm");'
    };

/**
 * Toggle keyboard on click
 */
chrome.browserAction.onClicked.addListener(function() {
  STATE = !STATE;

  chrome.tabs.executeScript({
    code: STATE_DISPATCH[STATE]
  });
});

/**
 * Update the icon on click
 */
function setIcon() {
  chrome.browserAction.setIcon({
    path: 'icons/' + STATE_ICON[STATE]
  });
}
chrome.browserAction.onClicked.addListener(setIcon);

