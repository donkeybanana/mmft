'use strict';

/**
 * Disable the MMFT keyboard
 */
var elements = $('textarea, input:text, search');
    elements.unbindMmkb().removeClass('__mm');
