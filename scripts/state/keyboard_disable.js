'use strict';

/**
 * Disable the MMFT keyboard
 */
console.log('mmft.keyboard.disable');
var elements = $('textarea, input:text, search');
    elements.unbindMmkb().removeClass('__mm');
console.log(elements);
