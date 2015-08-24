/* global describe, it */

(function () {
    'use strict';

    describe('Initial jasmine test', function () {
        describe('Test if a string test is equal test', function () {
            it('test === test', function () {
                expect('test').toEqual('test');
            });
        });
    });
})();
