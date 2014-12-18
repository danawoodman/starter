var Reflux = require('reflux');
var console = require('console');
var request = require('request-json');
var client = request.newClient('http://localhost:1337/');

var Store = Reflux.createStore({
  listenables: [require('./actions')],

  init: function () {
    this.onCustomerUpdate();
  },

  onCustomerUpdate: function () {
    client.get('/api/customers', function (err, response, body) {
      this.updateList(body);
    }.bind(this));
  },

  onCustomerCreate: function (customer) {
    client.post('/api/customers', customer, function (err, response, body) {
      this.updateList(body);
    }.bind(this));
  },

  updateList: function (list) {
    this.list = list;
    this.trigger(list);
  },

  getInitialState: function () {
    // TODO: fetch data from API...?
    this.list = [];
    return this.list;
  }
});

module.exports = Store;
