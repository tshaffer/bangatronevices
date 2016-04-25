'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by tedshaffer on 4/25/16.
 */

var ThumbServices = function () {
    function ThumbServices() {
        _classCallCheck(this, ThumbServices);
    }

    _createClass(ThumbServices, [{
        key: 'getThumbSpec',
        value: function getThumbSpec() {

            console.log("getThumbSpec invoked");

            var fs = require('fs');
            var path = require('path');

            var mediaLibraryThumbs = [];

            var dir = '/Users/tedshaffer/Documents/Projects/electron/ba-2/public';
            var suffix = "jpg";

            var numColumns = 2;

            var thumbCount = 0;
            var columnIndex = 0;
            var imageItemThumb = {};

            var files = fs.readdirSync(dir);
            files.forEach(function (file) {

                var filePath = path.format({
                    root: "/",
                    dir: dir,
                    base: file,
                    ext: "." + suffix,
                    name: "file"
                });

                var url = path.relative(dir, filePath);
                var filePath = filePath;

                var thumb = {};

                thumb.id = thumbCount.toString();
                thumb.thumbUrl = "public/" + url;
                thumb.path = url;
                thumb.fileName = file;

                thumbCount++;

                var keyColumn = "column" + columnIndex.toString();
                imageItemThumb[keyColumn] = thumb;
                columnIndex++;

                if (columnIndex % numColumns == 0) {
                    mediaLibraryThumbs.push(imageItemThumb);
                    imageItemThumb = {};
                    columnIndex = 0;
                }
            });

            console.log("getThumbSpec complete");

            return mediaLibraryThumbs;
        }
    }]);

    return ThumbServices;
}();

exports.default = ThumbServices;
