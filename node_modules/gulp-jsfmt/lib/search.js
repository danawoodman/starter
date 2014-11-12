'use strict';

var jsfmt = require('jsfmt');
var through = require('through2');
var BufferStreams = require('bufferstreams');
var util = require('./util');

require('sugar');

module.exports = function () {
  var opts = util.parseOpts(arguments);

  function fmt(buffer) {
    var matches = [];

    if (opts.patterns.length > 0) {
      var contents = buffer.toString();
      opts.patterns.each(function (p) {
        matches.add(jsfmt.search(contents, p));
      });
    }

    return matches;
  }

  return through.obj(function (file, _, cb) {
    var matched = file.isNull(); // if no content, consider it a match and pass it through

    if (file.isBuffer()) {
      file.matches = fmt(file.contents);
    } else if (file.isStream()) {
      file.contents = file.contents.pipe(new BufferStreams(function (err, buf, cb) {
        file.matches = fmt(buf);
        cb(null, buf);
      }));
    }

    this.push(file);
    return cb();
  });
};
