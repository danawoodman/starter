jest.dontMock('../store');

describe('customers', function () {
  describe('CreateStateStore', function () {
    var store;

    beforeEach(function () {
      //store = require('../store').CreateState;
    });

    it('adds 1 + 2 to equal 3', function () {
        expect(1 + 2).toBe(3);
    });
  });
});
