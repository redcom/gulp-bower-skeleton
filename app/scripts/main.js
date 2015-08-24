'use strict';
var WIMDU = WIMDU || {};

$(function() {

    if('ShowSection' in WIMDU) { // probe to find if the ShowSelection module is present
        WIMDU.ShowSection.init('.extendSection');
    }

});
