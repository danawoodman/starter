var express = require('express');
var Router = express.Router();
var Customers = require('./model.js');

Router.get('/', function(req, res) {
  res.send(Customers.get());
});

module.exports = Router;
