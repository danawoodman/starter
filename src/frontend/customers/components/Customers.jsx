var React = require('react');
var Reflux = require('reflux');
var Button = require('react-bootstrap').Button;
var OverlayMixin = require('react-bootstrap').OverlayMixin;
var CustomerList = require('./List');
var NewCustomerForm = require('./NewForm');
var CustomersStore = require('../store').Customers;
var CreateStateStore = require('../store').CreateState;
var CreateStateActions = require('../actions').CreateState;

var Component = React.createClass({
  mixins: [
    OverlayMixin,
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

  onRequestHide: function () {
    CreateStateActions.close();
  },

  renderOverlay: function () {
    if (!this.state.showNewCustomerForm) {
      return <span />;
    }

    return (
      <NewCustomerForm
        onRequestHide={this.onRequestHide} />
    );
  },

  render: function () {

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
      </div>
    );
  }
});

module.exports = Component;
