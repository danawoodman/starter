var React = require('react');
var Router = require('react-router');

var Customer = React.createClass({
  mixins: [Router.State],

  // TODO: lookup customer in store and retrieve/display data.

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
