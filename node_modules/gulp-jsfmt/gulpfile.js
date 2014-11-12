'use strict';

var gulp = require('gulp');
var mocha = require('gulp-mocha');

gulp.task('mocha', function () {
  var chai = require('chai');
  global.should = chai.should();

  return gulp.src('./test/**/*_test.js')
    .pipe(mocha({
      reporter: 'spec',
      globals: ['should']
    }));
})

gulp.task('default', ['mocha']);