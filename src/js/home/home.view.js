var m           = require('mithril');
var menu        = require('app/menu');
var productList = require('app/product-list');

module.exports = function (ctrl) {
  return m('#home', [
    menu.view(ctrl.menu),
    m('h1.page-header', 'Welcome home!'),
    productList.view(ctrl.productList),
  ])
};
