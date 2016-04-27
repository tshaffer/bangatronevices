/**
 * Created by tedshaffer on 4/25/16.
 */
export default class ThumbServices  {

    constructor() {
    }

    getThumbSpec() {

        console.log("getThumbSpec invoked");

        const fs = require('fs');
        var path = require('path');

        let mediaLibraryThumbs = [];

        var dir = '/Users/tedshaffer/Documents/Projects/electron/ba-2/public';
        var suffix = "jpg";
        
        var files = fs.readdirSync(dir);
        files.forEach(function(file) {

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

            thumb.id = mediaLibraryThumbs.length.toString();
            thumb.thumbUrl = "public/" + url;
            thumb.path = url;
            thumb.fileName = file;

            mediaLibraryThumbs.push(thumb);
        });

        console.log("getThumbSpec complete");

        return mediaLibraryThumbs;
    }
}
