var React = require('react');
var Router = require('react-router');

var Customer = React.createClass({
  mixins: [Router.State],

  render: function () {
    return (
      <h1>{this.getParams().userID}</h1>
    );
  }
});

module.exports = Customer;
