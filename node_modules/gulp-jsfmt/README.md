# gulp-jsfmt

> [`gulp`](http://gulpjs.com/) task for [`jsfmt`](https://github.com/rdio/jsfmt)

## Installation
Install via [npm](https://npmjs.org/package/gulp-jsfmt):
```
npm install gulp-jsfmt --save-dev
```

## Usage

### rewrite(opts, pattern1, pattern2, ...), rewrite(opts, [pattern1, pattern2, ...]), rewrite(pattern1, pattern2, ...), rewrite([pattern1, pattern2, ...])
```js
var gulp = require('gulp');
var jsfmt  = require('gulp-jsfmt');

gulp.task('default', function() {
  gulp.src('./**/*.js')
    .pipe(jsfmt.rewrite('_.each(a, b) -> a.forEach(b)', '_.reduce(a, b, c) -> a.reduce(b, c)'))
    .pipe(gulp.dest('./dist'));
});
```

### search(opts, pattern1, pattern2, ...), search(opts, [pattern1, pattern2, ...]), search(pattern1, pattern2, ...), search([pattern1, pattern2, ...])
```js
var gulp = require('gulp');
var jsfmt  = require('gulp-jsfmt');
var through = require('through2');

gulp.task('default', function() {
  gulp.src('./**/*.js')
    .pipe(jsfmt.search('_.each(a, b)', '_.reduce(a, b, c)'))
    .pipe(through.obj(file, _, cb) {
      file.matches.forEach(function(matches, wildcards) {
        console.log(wildcards.z);
      });
    })
});
```

#### `matches`
Each patterns specified will be used to call `jsfmt.search`, and the results are passed back in the property named `matches` in each of the `Vinyl` object in the stream.

## Changelog
`v0.1.0` expose [`search`](https://github.com/rdio/jsfmt#searching) function
`v0.0.1` expose [`rewrite`](https://github.com/rdio/jsfmt#rewriting) function

## License
MIT