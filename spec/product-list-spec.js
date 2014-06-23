var expect = require("chai").expect;
var productList   = require('app/product-list');

describe('product-list', function () {
  var controller;

  describe('controller', function () {
    beforeEach(function (done) {
      controller = new productList.controller();
      done();
    });

    it('should fetch a list of products', function () {
      var products = controller.products();
      expect(products).to.be.a('array');
      expect(products.length).to.equal(2);
    });

    afterEach(function (done) {
      // Do teardown here if needed
      done();
    });
  });
});
