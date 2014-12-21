var gulp = require('gulp');
var del = require('del');
var config = require('./config');

gulp.task('clean-html', function (done) {
  del([config.paths.dest + '/**/*.html'], done);
});

gulp.task('html', function () {
  return gulp.src(config.paths.templates)
    .pipe(gulp.dest(config.paths.dest));
});
