var React = require('react');
var CustomerItem = require('./item.component');
var Table = require('react-bootstrap').Table;

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

    return (
      <Table bordered striped>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {customers}
        </tbody>
      </Table>
    );
  }
});

module.exports = CustomerList;
