var m = require('mithril');

/*
var apiRootURL = 'http://localhost:3000';
m.request({
  method: 'GET',
  url: apiRootURL + '/products',
  type: product.Product,
})
  .then(product.ProductList)
  .then(function (products) {
    console.info('Fetched products:', products);
    return products;
  });

product.create = function (u) {
  m.request({
    method: 'POST',
    url: apiRootURL + '/products',
    data: {
      name: u.name(),
      code: u.code()
    }
  }).then(function (resp) {
    console.info('Response:', resp);
    product.ProductList().push(
      new product.Product(resp)
    );
  }, function (err) {
    console.warn(err);
  });
};
*/

module.exports = {
  Product: function (data) {
    this.name = m.prop(data.name);
    this.price = m.prop(data.price);
  },
  ProductList: m.prop([])
};
