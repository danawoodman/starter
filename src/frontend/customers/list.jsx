var React = require('react');

var CustomerItem = React.createClass({
  render: function () {
    return (
      <li><strong>{this.props.name}</strong> - {this.props.phone}</li>
    );
  }
});

var CustomerList = React.createClass({
  render: function () {
    var customers = this.props.customers.map(function (customer) {
      return <CustomerItem name={customer.name} phone={customer.phone} />;
    });

    return <ul>{customers}</ul>;
  }
});

module.exports = CustomerList;
