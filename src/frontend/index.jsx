var React = require('react');
var console = require('console');
var CustomerList = require('./customers/list');

console.log('Starting up application.');

React.render(<CustomerList />, document.body);
