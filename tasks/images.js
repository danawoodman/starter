var gulp = require('gulp');
var del = require('del');
var config = require('./config');

gulp.task('clean-images', function (done) {
  del([config.paths.imagesDest], done);
});

gulp.task('images', ['clean-images'], function () {
  return gulp.src(config.paths.images)
    .pipe(gulp.dest(config.paths.imagesDest));
});
