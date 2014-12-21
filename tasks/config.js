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
    main: path.join(rootDir, 'src/frontend/index.jsx'),
    server: path.join(rootDir, 'src/backend/server.js'),
    scripts: path.join(rootDir, 'src/frontend/**/*.{js,jsx}'),
    styles: path.join(rootDir, 'src/frontend/**/*.less'),
    baseStylePath: path.join(rootDir, 'src/frontend/index.less'),
    images: path.join(rootDir, 'src/frontend/img/**/*'),
    imagesDest: path.join(rootDir, 'dist/img'),
    templates: path.join(rootDir, 'src/frontend/**/*.html'),
    tests: path.join(rootDir, 'test/**/*.{js,jsx}'),
    dest: path.join(rootDir, 'dist'),
  }
};
