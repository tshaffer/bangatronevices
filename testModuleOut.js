'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by tedshaffer on 4/24/16.
 */

var TestModule = function () {
    function TestModule() {
        _classCallCheck(this, TestModule);
    }

    _createClass(TestModule, [{
        key: 'invokeTest',
        value: function invokeTest() {

            console.log("test module invoked");

            var remote = require('electron').remote;
            var dialog = remote.dialog;
            var Menu = remote.Menu;

            var fs = require('fs');
            var path = require('path');

            console.log("test module complete");
        }
    }]);

    return TestModule;
}();

exports.default = TestModule;
