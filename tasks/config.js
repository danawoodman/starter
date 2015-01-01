var path = require('path');
var dotenv = require('dotenv');
var rootDir = path.join(__dirname, '..');

// Make sure environment variables set in the .env file get
// loading into the environment.
dotenv.load();

module.exports = {
  debug: process.env.DEBUG ? !!process.env.DEBUG : false,
  production: process.env.NODE_ENV === 'production',
  host: 'localhost',
  port: process.env.PORT || 80,
  protocol: 'http://',
  paths: {
    bundle: 'index.js',
    server: path.join(rootDir, 'src/backend/server.js'),
    mainScript: path.join(rootDir, 'src/frontend/index.jsx'),
    allScripts: [
      path.join(rootDir, 'src/frontend/**/*.{js,jsx}'),
      '!' + path.join(rootDir, 'src/frontend/vendor')
    ],
    scripts: [
      path.join(rootDir, 'src/frontend/**/*.js'),
      '!' + path.join(rootDir, 'src/frontend/vendor')
    ],
    styles: path.join(rootDir, 'src/frontend/**/*.less'),
    baseStylePath: path.join(rootDir, 'src/frontend/index.less'),
    images: path.join(rootDir, 'src/frontend/img/**/*'),
    imagesDest: path.join(rootDir, 'dist/img'),
    templates: path.join(rootDir, 'src/frontend/**/*.html'),
    tests: path.join(rootDir, '**/__tests__/**/*.{js,jsx}'),
    dest: path.join(rootDir, 'dist'),
  }
};
