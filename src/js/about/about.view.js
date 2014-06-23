var m    = require('mithril');
var menu = require('app/menu');

module.exports = function (ctrl) {
  return m('#about', [
    menu.view(ctrl.menu),
    m('h1.page-header', 'About'),
  ]);
};
