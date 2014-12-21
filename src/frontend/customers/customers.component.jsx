var React = require('react');
var Reflux = require('reflux');
var CustomerList = require('./list.component');
var NewCustomerForm = require('./newCustomer.component');
var CustomerStore = require('./store');
var CustomerActions = require('./actions');

var Component = React.createClass({
  mixins: [Reflux.connect(CustomerStore, 'customers')],

  propTypes: {
    customers: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  },

  onUpdateCustomers: function () {
    CustomerActions.customerUpdate();
  },

  render: function () {
    return (
      <div className="page">
        <button
          className="btn btn-primary pull-right"
          onClick={this.onUpdateCustomers}>Fetch Customers</button>
        <h1 className="page-header">Customers:</h1>
        <CustomerList customers={this.state.customers} />
        <NewCustomerForm />
      </div>
    );
  }
});

module.exports = Component;
