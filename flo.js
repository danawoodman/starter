var flo = require('fb-flo');
var fs  = require('fs');

var server = flo(
  './dist',
  {
    port: 8888,
    host: 'localhost',
    verbose: false,
    glob: [
      '**/*.{js,css,html}',
    ]
  },
  function resolver(filepath, callback) {
    console.log('Reloading \'' + filepath + '\' with flo...');
    var file = './dist/' + filepath;
    callback({
      resourceURL : filepath,
      contents    : fs.readFileSync(file),
      reload      : filepath.match(/\.(js|html)$/),
    });
  }
);
