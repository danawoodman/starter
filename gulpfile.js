var gulp = require('gulp');
var clean = require('gulp-clean');
var rename = require('gulp-rename');
var nodemon = require('gulp-nodemon');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');
var sourcemaps = require('gulp-sourcemaps');
var less = require('gulp-less');
var jsfmt = require('gulp-jsfmt');
var nodemon = require('gulp-nodemon');
var browserify = require('browserify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');
var spawn = require('child_process').spawn;
var dotenv = require('dotenv');
var connect = require('connect');
var open = require('open');
var stylish = require('jshint-stylish');

// Make sure environment variables set in the .env file get
// loading into the environment.
dotenv.load();

// Configure the application paths to suite:
var config = {
  debug: process.env.DEBUG ? !!process.env.DEBUG : false,
  production: process.env.NODE_ENV === 'production',
  host: 'localhost',
  port: process.env.PORT || 80,
  protocol: 'http://',
  paths: {
    bundle: 'index.js',
    main: './src/frontend/index.jsx',
    scripts: './src/frontend/**/*.(js|jsx)',
    styles: './src/frontend/index.less',
    images: './src/frontend/img/**/*',
    imagesDest: './dist/img',
    templates: './src/frontend/**/*.html',
    tests: './test/**/*.js',
    dest: './dist',
  }
};


gulp.task('dist', ['clean'], function () {
  gulp.start('html');
  gulp.start('less');
  gulp.start('scripts');
  gulp.start('images');
});

gulp.task('clean', function () {
  return gulp.src(config.paths.dest + '/*')
    .pipe(clean());
});

gulp.task('watch', ['dist'], function () {
  gulp.watch(config.paths.templates, ['html']);
  gulp.watch(config.paths.tests, ['test']);
  gulp.watch(config.paths.scripts, ['test']);
  gulp.watch(config.paths.styles, ['less']);
  gulp.watch(config.paths.images, ['images']);
  gulp.start('fb-flo');
  gulp.start('watch-scripts');
});


/*********************************************************************************
 * JavaScript Tasks
 ********************************************************************************/

gulp.task('clean-scripts', function () {
  return gulp.src(config.paths.dest + '/**/*.js')
    .pipe(clean());
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

gulp.task('scripts', ['clean-scripts'], function () {
  return scripts(false);
});

gulp.task('watch-scripts', ['clean-scripts'], function () {
  return scripts(true);
});

gulp.task('fmt', function () {
  return gulp
    .src(config.paths.scripts)
    .pipe(jsfmt.format())
    .pipe(gulp.dest('src/frontend'));
});


/*********************************************************************************
 * Testing Tasks
 ********************************************************************************/

gulp.task('test', function () {
  return gulp.src(config.paths.tests)
    .pipe(mocha({ reporter: 'nyan' }));
});


/*********************************************************************************
 * Stylesheet Tasks
 ********************************************************************************/

gulp.task('clean-css', function () {
  return gulp.src(config.paths.dest + '/**/*.css')
    .pipe(clean());
});

gulp.task('less', ['clean-css'], function () {
  return gulp.src(config.paths.styles)
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.paths.dest));
});

gulp.task('fb-flo', function () {
  var node = spawn('node', ['flo.js'], { stdio: 'inherit' });
  node.on('close', function (code) {
    console.log('Close fb-flo');
    if (code === 8) {
      gutil.log('Error detected, turning off fb-flo...');
    }
  });
});


/*********************************************************************************
 * HTML Tasks
 ********************************************************************************/

gulp.task('clean-html', function () {
  return gulp.src(config.paths.dest + '/**/*.html')
    .pipe(clean());
});

gulp.task('html', ['clean-html'], function () {
  return gulp.src(config.paths.templates)
    .pipe(gulp.dest(config.paths.dest));
});

gulp.task('clean-images', function () {
  return gulp.src(config.paths.imagesDest)
    .pipe(clean());
});

gulp.task('images', ['clean-images'], function () {
  return gulp.src(config.paths.images)
    .pipe(gulp.dest(config.paths.imagesDest));
});

gulp.task('serve', ['watch'], function () {
  nodemon({
    script: 'src/backend/server.js',
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

gulp.task('default', ['serve']);
