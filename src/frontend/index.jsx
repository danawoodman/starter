var React = require('react');
var console = require('console');
var CustomerList = require('./customers/list');

console.log('Starting up application.');

var customers = [
  { name: 'John Smith', phone: '(415) 555-3212' },
  { name: 'Mary Lou', phone: '(415) 333-1234' }
];

var Application = React.createClass({
  render: function () {
    return (
      <div className="container">
        <h1 className="page-header">Customers:</h1>
        <CustomerList customers={customers} />
      </div>
    );
  }
});

React.render(<Application />, document.body);
