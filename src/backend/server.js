var path = require('path');
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var bodyParser = require('body-parser');
var Customer = require('./customers/model');
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({
  //extended: true
//}));

// Settings
require('dotenv').load();
var port = Number(process.env.PORT || 2000);

// Logging
var morgan = require('morgan');
app.use(morgan('combined'));

// Serve static assets
app.use(express.static(path.join(__dirname, '../../dist')));

// Load routers
//var customersRouter = require('./customers/router.js');

io.on('connection', function (socket) {
  console.log('a user connected');
  io.emit('read customers', Customer.get());

  socket.on('disconnect', function () {
    console.log('user disconnected');
  });

  socket.on('new customer', function (customer, callback) {
    console.log('new customer:', customer);

    // TODO: Need to handle failures in saving.
    var customer = Customer.create({
      name: customer.name,
      email: customer.email
    });

    var err;

    if (err) {
      console.error('There was an error!', err);
      callback(err, null);
      return;
    }

    callback(null, customer);
  });

  socket.on('update customer', function (customer, callback) {
    console.log('update customer:', customer);

    var err = Customer.update(customer);

    if (err) {
      console.error('There was an error!', err);
      callback(err, null);
      return;
    }

    callback(null, 'Success!');
  });

  socket.on('delete customer', function (id, callback) {
    console.log('delete customer:', id);

    var err = Customer.destroy(id);

    if (err) {
      console.error('There was an error!', err);
      callback(err, null);
      return;
    }

    callback(null, 'Success!');
  });

  socket.on('read customers', function () {
    console.log('retrieving list of customers');
    io.emit('read customers', Customer.get());
  });
});

// Start server
http.listen(port, function () {
  console.log('Server starting up on port', port);
});
