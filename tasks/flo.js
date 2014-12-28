var gulp = require('gulp');
var flo = require('fb-flo');
var fs  = require('fs');
//var spawn = require('child_process').spawn;
var gutil = require('gulp-util');

//gulp.task('fb-flo', function () {
  //var node = spawn('node', ['flo.js'], { stdio: 'inherit' });
  //node.on('close', function (code) {
    //console.log('Close fb-flo');
    //if (code === 8) {
      //gutil.log('Error detected, turning off fb-flo...');
    //}
  //});
//});

gulp.task('fb-flo', function (done) {
  server = flo(
    './dist', {
      port: 8888,
      host: 'localhost',
      verbose: false,
      glob: [
        '**/*.{js,css,html}',
        '!**/*.{tmp,log,jpg,png,gif}'
      ]
    },
    resolver
  )
    .once('ready', done);
});

function resolver(filepath, callback) {
  gutil.log('Reloading "', filepath, '" with flo...');

  var file = './dist/' + filepath;

  callback({
    resourceURL: filepath,
    contents: fs.readFileSync(file),
    update: function (_window, _resourceURL) {
      console.log('Resource ' + _resourceURL + ' has just been updated with new content');
    },
    reload: filepath.match(/\.(js|html)$/)
  });
}

//function resolver(filepath, callback) {
  //reloader = map(function(file, cb) {
    //callback({
      //reload: !!reload,
      //resourceURL: path.relative('dest', file.path).replace('\\', '/'),
      //contents: file.contents.toString()
    //});
    //cb(null, file);
  //});

  //gulp
    //.src(path.resolve('app', filepath))
    //.pipe($.if(minimatch(filepath, globs.less), lazy.less()))
    //.pipe($.if(minimatch(filepath, globs.js), lazy.js()))
    //.pipe(gulp.dest('dest'))
    //.pipe(reload(1));
//}
