var React = require('react');
var Router = require('react-router');

var Customer = React.createClass({
  mixins: [Router.State],

  render: function () {
    return (
      <div>
        <h1>Customer {this.getParams().userID}</h1>
        <p>Put user info here...</p>
      </div>
    );
  }
});

module.exports = Customer;
