var gulp = require('gulp');
var del = require('del');
var browserify = require('browserify');
var watchify = require('watchify');
var gutil = require('gulp-util');
//var uglify = require('gulp-uglify');
var jsfmt = require('gulp-jsfmt');
var jshint = require('gulp-jshint');
//var stylish = require('jshint-stylish');
var source = require('vinyl-source-stream');
var config = require('./config');

gulp.task('clean-scripts', function (done) {
  del([config.paths.dest + '/**/*.js'], done);
});

function scripts(watch) {
  var bundler = browserify({
    entries: [config.paths.main],
    basedir: __dirname,
    debug: !config.production,
    extensions: ['.jsx'],
    // Required for watchify
    cache: {}, packageCache: {}, fullPaths: watch
  });

  if (watch) {
    bundler = watchify(bundler);
  }

  bundler.transform('reactify');
  bundler.on('update', rebundle);

  function rebundle() {
    return bundler
      .bundle()
      .on('error', function (e) {
        gutil.log('Browserify error', e);
        this.emit('end');
      })
      .pipe(source(config.paths.bundle))
      .pipe(jshint())
      .pipe(gulp.dest(config.paths.dest));
  }

  return rebundle();
}

gulp.task('scripts', function () {
  return scripts(false);
});

gulp.task('watch-scripts', function () {
  return scripts(true);
});

gulp.task('fmt', function () {
  return gulp
    .src(config.paths.scripts)
    .pipe(jsfmt.format())
    .pipe(gulp.dest('./src/frontend'));
});
