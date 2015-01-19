'use strict';

/**
 * State and dispatch tables
 */
var STATE = false,
    STATE_ICON = {
      false: 'mmft-128.png',
      true: 'mmft-128-on.png'
    },
    STATE_DISPATCH = {
      false: 'keyboard_disable.js',
      true: 'keyboard_enable.js'
    };

/**
 * Toggle keyboard on click
 */
chrome.browserAction.onClicked.addListener(function(tab) {
  STATE = !STATE;

  // Change state
  chrome.tabs.executeScript(null, {
    file: 'scripts/state/' + STATE_DISPATCH[STATE]
  }, function(){
    // console.log(arguments);
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

