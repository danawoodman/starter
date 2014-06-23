var m       = require('mithril');
var console = require('console');

module.exports = function (ctrl) {
  return m('ul.users-list', 
    ctrl.products()
    .map(function (product, index) {
      console.info('Listing product:', product);
      return m('li', [
        m('a', 
          {
            onclick: function (event) {
              alert('Edit product: ' + this.name());
            }.bind(product)
          }, 
          product.name()
         )
      ]);
    })
  );
};
