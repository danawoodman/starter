var React = require('react');
var CustomerList = require('./list');
var Customer = require('./model');

var Customers = React.createClass({
  getInitialState: function () {
    return {
      customers: []
    };
  },

  componentDidMount: function () {
    Customer.getAll(function (error, response, body) {
      // TODO: Handle errors somehow...

      if (!error && response.statusCode == 200) {
        this.setState({ customers: body });
      }
    }.bind(this));
  },

  render: function () {
    return (
      <div className="page">
        <h1 className="page-header">Customers:</h1>
        <CustomerList customers={this.state.customers} />
      </div>
    );
  }
});

module.exports = Customers;
