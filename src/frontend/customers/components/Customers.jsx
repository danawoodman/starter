var React = require('react');
var Reflux = require('reflux');
var Button = require('react-bootstrap').Button;
var CustomerList = require('./List');
var NewCustomerForm = require('./NewForm');
var CustomersStore = require('../store').Customers;
var CreateStateStore = require('../store').CreateState;
var CreateStateActions = require('../actions').CreateState;

var Component = React.createClass({
  mixins: [
    Reflux.connect(CustomersStore, 'customers'),
    Reflux.connect(CreateStateStore, 'showNewCustomerForm')
  ],

  //propTypes: {
    //customers: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  //},

  onOpenCreateModal: function (e) {
    e.preventDefault();
    CreateStateActions.open();
  },

  render: function () {
    var showNewCustomerForm;
    if (this.state.showNewCustomerForm) {
      showNewCustomerForm = <NewCustomerForm />;
    }

    return (
      <div className="page">
        <Button
          className="pull-right"
          bsStyle="success"
          onClick={this.onOpenCreateModal}>
          New Customer
        </Button>
        <h1 className="page-header">Customers:</h1>
        <CustomerList customers={this.state.customers} />
        {showNewCustomerForm}
      </div>
    );
  }
});

module.exports = Component;
