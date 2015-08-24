/* global describe, it */

(function() {
    'use strict';

    describe('Module :: ShowSection ', function() {
        var $fixture;
        beforeEach(function() {
            var fixture = [
                "<div id='testContent'>",
                "<div class='details'> <p> Eine Kaution in </p> </div>",
                "<div class='extendSection'> <a href='#'>Show more</a> </div>",
                "</div>",
            ].join('');

            $fixture = $(fixture);
            $fixture.appendTo($('body'));


        });

        afterEach(function() {
            $fixture.remove();
        });

        describe('Check is module is present', function() {
            it('ShowSection in WIMDU namespace is present', function() {

                expect('ShowSection' in WIMDU).toBe(true);
            });
            it('ShowSection module has an "init" method', function() {

                expect(typeof WIMDU.ShowSection.init).toEqual('function');
            });
        });

        describe('Check if ShowSelection works properly', function() {
            it('init method should attach an event', function() {

                spyOn($.fn, 'on');

                WIMDU.ShowSection.init('.extendSection');

                expect($.fn.on).toHaveBeenCalled();
                expect($.fn.on.calls.mostRecent().args[0]).toEqual('click');
                $.fn.on.calls.reset();
            });

            it('click event should toggleClass on "a" tag and toggle expandedSection', function() {

                spyOn($.fn, 'toggleClass');
                spyOn($.fn, 'toggle');
                WIMDU.ShowSection.init('.extendSection');

                $fixture.find('a').click();

                // changing the inner part of a Tag
                expect($.fn.toggleClass).toHaveBeenCalled();
                expect($.fn.toggleClass.calls.mostRecent().args[0]).toEqual('expanded');
                $.fn.toggleClass.calls.reset();

                // expanding or collapsing the section
                expect($.fn.toggle).toHaveBeenCalled();
                $.fn.toggle.calls.reset();
            });
        });
    });
})();

