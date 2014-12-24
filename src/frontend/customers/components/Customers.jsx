var React = require('react');
var Reflux = require('reflux');
var CustomerStore = require('../store');
var CustomerList = require('./List');
var NewCustomerForm = require('./NewForm');

var Component = React.createClass({
  mixins: [Reflux.connect(CustomerStore, 'customers')],

  propTypes: {
    customers: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  },

  render: function () {
    return (
      <div className="page">
        <h1 className="page-header">Customers:</h1>
        <CustomerList customers={this.state.customers} />
        <NewCustomerForm />
      </div>
    );
  }
});

module.exports = Component;
