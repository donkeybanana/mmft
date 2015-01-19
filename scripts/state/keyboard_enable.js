'use strict';

/**
 * Enable the MMFT keyboard
 */
console.log('mmft.keyboard.enable');
var elements = $('textarea, input:text, search');
    elements.mmkb().addClass('__mm');
console.log(elements);
