var expect = require('should');
var Customers = require('backend/customers/model');

describe('Customers', function () {
  describe('', function () {
    beforeEach(function (done) {
      done();
    });

    it('should fetch a list of customers', function () {
      var customers = Customers.get();
      customers.should.be.an.Array;
      customers.length.should.equal(2);
    });

    afterEach(function (done) {
      // Do teardown here if needed
      done();
    });
  });
});
