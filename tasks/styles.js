var gulp = require('gulp');
var del = require('del');
var sourcemaps = require('gulp-sourcemaps');
var less = require('gulp-less');
var config = require('./config');

gulp.task('clean-css', function (done) {
  del([config.paths.dest + '/**/*.css'], done);
});

gulp.task('less', ['clean-css'], function () {
  return gulp.src(config.paths.styles)
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.paths.dest));
});
