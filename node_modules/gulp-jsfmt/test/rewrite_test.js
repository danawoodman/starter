'use strict';

var fs = require('fs');
var path = require('path');
var es = require('event-stream');
var through = require('through2');
var gutil = require('gulp-util');
var jsfmt = require('../');

describe('rewrite', function () {
  it('should let files pass through when no rewrite pattern is issued', function (done) {
    var stream = jsfmt.rewrite();
    var s = 'module.exports = function () {\n\t_.reduce(aa, bb, cc);\n};';
    var n = 0;
    stream.pipe(through.obj(function (file, _, cb) {
      file.contents.toString().should.eql(s);
      this.push(file);
      n++;
      cb();
    }, function (cb) {
      n.should.eql(1)
      cb();
      done();
    }));

    stream.write(new gutil.File({
      contents: new Buffer(s)
    }));
    stream.end();
  });

  it('should let null files pass through', function (done) {
    var stream = jsfmt.rewrite('_.reduce(a, b, c) -> a.reduce(b, c)');
    var n = 0;
    stream.pipe(through.obj(function (file, _, cb) {
      should.not.exist(file.contents);
      n++;
      this.push(file);
      cb();
    }, function (cb) {
      n.should.eql(1);
      cb();
      done();
    }));

    stream.write(new gutil.File({
      contents: null
    }));
    stream.end();
  });

  it('should work in buffer mode', function (done) {
    var stream = jsfmt.rewrite('_.reduce(a, b, c) -> a.reduce(b, c)');
    var s = 'module.exports = function () {\n\t_.reduce(aa, bb, cc);\n};';
    var n = 0;
    stream.pipe(through.obj(function (file, _, cb) {
      file.contents.toString().should.eql('module.exports = function () {\n\taa.reduce(bb, cc);\n};');
      this.push(file);
      n++;
      cb();
    }, function (cb) {
      n.should.eql(1)
      cb();
      done();
    }));

    stream.write(new gutil.File({
      contents: new Buffer(s)
    }));
    stream.end();
  });

  it('should work in stream mode', function (done) {
    var stream = jsfmt.rewrite('_.reduce(a, b, c) -> a.reduce(b, c)');
    stream.once('data', function (file) {
      file.isStream().should.eql(true);
      file.contents.pipe(es.wait(function (err, data) {
        data.toString().should.eql('module.exports = function () {\n\taa.reduce(bb, cc);\n};');
        done();
      }))
    });
    stream.write(new gutil.File({
      contents: es.readArray(['module.exports = function () {\n', '\t_.reduce(aa, bb, cc);\n', '};'])
    }));
  });
});
