var products = require('app/products');

module.exports = function () {
  this.products = products.ProductList;
  this.products([
    new products.Product({
      name: '100lbs of Bacon',
      price: 4599,
    }),
    new products.Product({
      name: 'Cat in a Hat',
      price: 999,
    })
  ]);
};
