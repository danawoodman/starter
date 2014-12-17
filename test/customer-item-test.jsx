var React = require('react');
//var ReactAddons = require('react/addons');
var TestUtils = React.addons.TestUtils;
var Item = require('../item.jsx');
var should = require('should');

describe('customer item', function () {
  var list;

  beforeEach(function () {
    list = React.render(<Item />, document.body);
  });

  it('do stuff', function () {
    expect(true).toEqual(true);
  });

  afterEach(function () {
    React.unmountComponentAtNode(document.body);
  });
});
