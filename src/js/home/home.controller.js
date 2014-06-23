var menu        = require('app/menu');
var productList = require('app/product-list');

module.exports = function () {
  this.menu        = new menu.controller();
  this.productList = new productList.controller();
};
