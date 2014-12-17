var express = require('express');
var Router = express.Router();
var Customers = require('./model.js');

Router.get('/', function (req, res) {
  res.send(Customers.get());
});

Router.post('/', function (req, res) {
  res.send(
    Customers.create({
      id: req.body.id,
      name: req.body.name,
      email: req.body.email
    })
  );
});

module.exports = Router;
