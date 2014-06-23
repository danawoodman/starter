var m = require('mithril');

module.exports = function (ctrl) {
  return m('nav#main-menu', [
    m('a[href="/"]', { config: m.route }, 'Home'),
    m('a[href="/about"]', { config: m.route }, 'About')
  ]);
};
