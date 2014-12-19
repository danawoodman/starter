var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var config = require('./config');

gulp.task('serve', ['dist'], function () {
  nodemon({
    script: config.paths.server,
    ext: 'js',
    env: {
      'NODE_ENV': 'development'
    }
  })
    //.on('start', ['watch'])
    //.on('change', ['watch'])
    .on('restart', function () {
      console.log('Restarted node server!');
    });
});
