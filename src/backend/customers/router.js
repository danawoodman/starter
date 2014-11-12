var Customers = require('./model.js');
var express = require('express');
var Router = express.Router();

Router.get('/', function(req, res) {
  res.render('customers/list', {
    customers: Customers.get()
  });
});

module.exports = Router;
