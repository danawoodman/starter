var gulp = require('gulp');
var exec = require('child_process').exec;

gulp.task('test', function (done) {
  exec('mocha', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    done(err);
  });
});
