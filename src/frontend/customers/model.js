var console = require('console');
var request = require('request-json');
var client = request.newClient('http://localhost:1337/');

var Model = {
  getAll: function (callback) {
    client.get('/api/customers', callback);
  }
};

module.exports = Model;
