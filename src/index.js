var m = require('mithril');
var console = require('console');
var home = require('app/home');
var about = require('app/about');

console.log('Starting up app.');

m.route(document.body, '/', {
  '/': home,
  '/about': about
});
