var expect = require("chai").expect;
var home   = require('app/home');

describe('home', function () {
  var controller;

  describe('controller', function () {
    beforeEach(function (done) {
      controller = new home.controller();
      done();
    });

    it('should create a new menu controller', function () {
      expect(controller.menu).to.be.a('object');
    });

    it('should create a new product list controller', function () {
      expect(controller.productList).to.be.a('object');
    });

    xit('this is a pending test, fix it or delete it', function () {
      expect(function () {
        throw new Error();
      }).to.throw();
    });

    afterEach(function (done) {
      // Do teardown here if needed
      done();
    });
  });
});
