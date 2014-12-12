var React = require('react');
var CustomerItem = require('./item');

var CustomerList = React.createClass({
  render: function () {
    var customers = this.props.customers.map(function (customer, index) {
      return <CustomerItem
        key={index}
        id={customer.id}
        name={customer.name}
        email={customer.email} />;
    });

    if (!customers.length) {
      return <div className="alert alert-warning">No customers...</div>;
    }

    return <ul>{customers}</ul>;
  }
});

module.exports = CustomerList;
