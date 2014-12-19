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

// Load routers
var customersRouter = require('./customers/router.js');

// Settings
require('dotenv').load();
var port = Number(process.env.PORT || 2000);

// Logging
var morgan = require('morgan');
app.use(morgan('combined'));

// Serve static assets
app.use(express.static(path.join(__dirname, '../../dist')));

// Mount routers
app.use('/api/customers', customersRouter);

io.on('connection', function (socket) {
  console.log('a user connected');
  io.emit('customers', Customer.get());

  socket.on('disconnect', function () {
    console.log('user disconnected');
  });

  socket.on('new customer', function (customer) {
    console.log('new customer:', customer);

    // TODO: Need to handle failures in saving.
    var customers = Customer.create({
      id: customer.id,
      name: customer.name,
      email: customer.email
    });

    io.emit('customers', customers);
  });

  socket.on('customers', function () {
    console.log('retrieving list of customers');
    io.emit('customers', Customer.get());
  });
});

// Start server
http.listen(port, function () {
  console.log('Server starting up on port', port);
});
