// define namespace or use an existing one
'use strict';

var TRANSLATION = {
     showLess: 'Show less',
     showMore: 'Show more'
};

var WIMDU = (function(module, T) {
    var $rootModule;

    var toggleExtendedSection = function(evt) {
        evt.preventDefault();
        var $current = $(this);
        $rootModule.parent().find('.details').toggle();
        $current.toggleClass('expanded');
        if ($current.hasClass('expanded')) {
            $current.html(T.showLess);
        } else {
            $current.html(T.showMore);
        }
    };


    var attachEvents = function() {
        $rootModule
            .find('a')
            .on('click', toggleExtendedSection);
    };
    var init = function(elem) {
        $rootModule = $(elem);
        attachEvents();
    };

    module.ShowSection = {
        init: init
    };
    return module;
}(WIMDU || {}, TRANSLATION));

