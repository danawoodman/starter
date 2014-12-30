jest.dontMock('../model');
var Customer = require('../model');

describe('Customer', function () {
  describe('stuff', function () {
    //beforeEach(function () {
    //});

    it('should fetch a list of customers', function () {
      var customers = Customer.get();
      expect(customers).toEqual(jasmine.any(Array));
      expect(customers.length).toEqual(2);
    });

    //afterEach(function () {
    //});
  });
});
