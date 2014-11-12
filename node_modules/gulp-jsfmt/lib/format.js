'use strict';

var jsfmt = require('jsfmt');
var through = require('through2');
var BufferStreams = require('bufferstreams');
var util = require('./util');

module.exports = function() {
  var config = jsfmt.getConfig();

  function fmt(buffer) {
    var contents = buffer.toString(),
      formattedContents;

    formattedContents = jsfmt.format(contents, config);

    return new Buffer(formattedContents.toString());
  }

  return through.obj(function(file, _, cb) {

    if (file.isBuffer()) {
      file.contents = fmt(file.contents);
    } else if (file.isStream()) {
      file.contents = file.contents.pipe(new BufferStreams(function(err, buf, cb) {
        cb(null, fmt(buf));
      }));

    }

    this.push(file);
    return cb();
  });
};
