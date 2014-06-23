var gulp       = require('gulp');
var clean      = require('gulp-clean');
var spawn      = require('child_process').spawn;
var gutil      = require('gulp-util');
var streamify  = require('gulp-streamify');
var dotenv     = require('dotenv');
var connect    = require('connect');
var source     = require('vinyl-source-stream');
var uglify     = require('gulp-uglify');
var open       = require("open");
var browserify = require('browserify');
var jshint     = require('gulp-jshint');
var mocha      = require('gulp-mocha');
var watchify   = require('watchify');
var less       = require('gulp-less');
var stylish    = require('jshint-stylish');


// Make sure environment variables set in the .env file get
// loading into the environment.
dotenv.load();

// Configure the application paths to suite:
var config = {
  debug        : process.env.DEBUG ? !!process.env.DEBUG : false,
  protocol     : 'http://',
  host         : 'localhost',
  port         : process.env.PORT || 80,
  paths        : {
    bundle      : 'index.js',
    src         : './src',
    main        : './src/index.js',
    scripts     : './src/**/*.js',
    scriptsDest : './dist/js',
    styles      : './src/**/*.less',
    stylesDest  : './dist/css',
    images      : './src/img/**/*',
    imagesDest  : './dist/img',
    templates   : './src/**/*.html',
    tests       : './spec/**/*.js',
    dest        : './dist',
  }
};

gulp.task('default', ['watch']);

gulp.task('dist', ['clean'], function () {
  gulp.start('html');
  gulp.start('less');
  gulp.start('js');
});

gulp.task('clean', function () {
  return gulp.src(config.paths.dest + '/*')
    .pipe(clean());
});

gulp.task('watch', [
  'fb-flo',
  'server',
  'watch-js',
  'watch-less',
  'watch-html',
  'watch-tests',
]);


/*********************************************************************************
 * Testing Tasks
 ********************************************************************************/

gulp.task('tests', function () {
  return gulp.src(config.paths.tests)
    .pipe(mocha({ reporter: 'nyan' }));
});

gulp.task('watch-tests', function () {
  gulp.watch(config.paths.tests, ['tests']);
});


/*********************************************************************************
 * Stylesheet Tasks
 ********************************************************************************/

gulp.task('clean-css', function () {
  return gulp.src(config.paths.dest + '/**/*.css')
    .pipe(clean());
});

gulp.task('watch-less', ['less'], function () {
  gulp.watch(config.paths.styles, ['less']);
});

gulp.task('less', ['clean-css'], function () {
  return gulp.src(config.paths.styles)
    .pipe(less({ sourceMap: true }))
    .pipe(gulp.dest(config.paths.stylesDest));
});

gulp.task('fb-flo', function() {
    var node = spawn('node', ['flo.js'], { stdio: 'inherit' });
    node.on('close', function (code) {
    if (code === 8) {
      gulp.log('Error detected, turning off fb-flo...');
    }
  });
});


/*********************************************************************************
 * JavaScript Tasks
 ********************************************************************************/

gulp.task('clean-js', function () {
  return gulp.src(config.paths.dest + '/**/*.js')
    .pipe(clean());
});

function scripts(watch) {
  var bundler, rebundle;
  if (watch) {
    bundler = watchify(config.paths.main, {basedir: __dirname});
  } else {
    bundler = browserify(config.paths.main, {basedir: __dirname});
  }

  // Transforms:
  //bundler.transform(reactify);

  rebundle = function() {
    var stream = bundler.bundle({ debug: config.debug });
    stream.on('error', function (error) {
      gutil.log(gutil.colors.red('Error with browserify:\n', error));
      gutil.beep();
      return;
    });

    stream = stream.pipe(source(config.paths.bundle))
      .pipe(jshint())
      .pipe(jshint.reporter(stylish))
      .pipe(gulp.dest(config.paths.scriptsDest))

    return stream;
  };

  bundler.on('update', rebundle);
  return rebundle();
}

gulp.task('js', ['clean-js'], function () {
  return scripts(false);
});

gulp.task('watch-js', function () {
  return scripts(true);
});


/*********************************************************************************
 * HTML Tasks
 ********************************************************************************/

gulp.task('clean-html', function () {
  return gulp.src(config.paths.dest + '/**/*.html')
    .pipe(clean());
});

gulp.task('watch-html', ['html'], function () {
  gulp.watch(config.paths.templates, ['html']);
});

gulp.task('html', ['clean-html'], function () {
  return gulp.src(config.paths.templates)
    .pipe(gulp.dest(config.paths.dest));
});

gulp.task('clean-images', function () {
  return gulp.src(config.paths.imagesDest)
    .pipe(clean());
});

gulp.task('watch-images', ['images'], function () {
  gulp.watch(config.paths.images, ['images']);
});

gulp.task('images', ['clean-images'], function () {
  return gulp.src(config.paths.images)
    .pipe(gulp.dest(config.paths.imagesDest));
});

gulp.task('server', function (next) {
  var server = connect();

  // Server the dist directory content.
  server.use(connect.static(config.paths.dest))
        .listen(config.port, next);

  // Open up the default web browser and view the application.
  open(config.protocol + config.host + ':' + config.port);
});
