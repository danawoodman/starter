var gulp = require('gulp');
var del = require('del');
var sourcemaps = require('gulp-sourcemaps');
var less = require('gulp-less');
var config = require('./config');

gulp.task('clean-styles', function (done) {
  del([config.paths.dest + '/**/*.css'], done);
});

gulp.task('styles', function () {
  return gulp.src(config.paths.baseStylePath)
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.paths.dest));
});
