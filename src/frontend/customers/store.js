var Reflux = require('reflux');
var io = require('socket.io-client');
var console = require('console');
var request = require('request-json');
var client = request.newClient('http://localhost:1337/');
var socket = io();

var Store = Reflux.createStore({
  listenables: [require('./actions')],

  init: function () {
    // Fetch customers on initial load.
    console.log('Initialize customer store.');
    socket.on('read customers', this.updateList.bind(this));
  },

  onCustomerUpdate: function () {
    //client.get('/api/customers', function (err, response, body) {
      //this.updateList(body);
    //}.bind(this));
    // Tell the socket we want to update the customers list.
    socket.emit('read customers');
  },

  onCustomerCreate: function (customer) {
    // Immediately display the customer with
    // a loading message while we wait for the
    // server.
    customer.saving = true;
    this.list.push(customer);
    this.updateList(this.list);

    // Tell the server to save the customer.
    socket.emit('new customer', customer);
  },

  onCustomerDelete: function (id) {
    console.log('delete customer:', id);
    socket.emit('delete customer', id);
  },

  updateList: function (list) {
    this.list = list;
    this.trigger(list);
  },

  getInitialState: function () {
    // TODO: fetch data from API...?
    this.list = this.list || [];
    return this.list;
  }
});

module.exports = Store;
