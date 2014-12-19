var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var gutil = require('gulp-util');
var spawn = require('child_process').spawn;
var connect = require('connect');
var requireDir = require('require-dir');
var dir = requireDir('./tasks');

gulp.task('fb-flo', function () {
  var node = spawn('node', ['flo.js'], { stdio: 'inherit' });
  node.on('close', function (code) {
    console.log('Close fb-flo');
    if (code === 8) {
      gutil.log('Error detected, turning off fb-flo...');
    }
  });
});

gulp.task('default', ['watch']);
