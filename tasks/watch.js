var gulp = require('gulp');
var config = require('./config');

gulp.task('watch', ['serve'], function (done) {
  gulp.watch(config.paths.templates, ['html']);
  gulp.watch(config.paths.tests, ['test']);
  gulp.watch(config.paths.scripts, ['test']);
  gulp.watch(config.paths.styles, ['styles']);
  gulp.watch(config.paths.images, ['images']);
  gulp.start('watch-scripts');
  gulp.start('fb-flo');
  done();
});
