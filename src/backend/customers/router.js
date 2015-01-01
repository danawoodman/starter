var console = require('console-browserify');
var Customer = require('./model');

var Router = {
  create: function (customer, callback) {
    console.log('new customer:', customer);

    // TODO: Need to handle failures in saving.
    var cust = Customer.create({
      name: customer.name,
      email: customer.email
    });

    var err;
    if (err) {
      console.error('There was an error!', err);
      callback(err, null);
      return;
    }

    callback(null, cust);
  },

  read: function () {
    console.log('retrieving list of customers');
    io.emit('read customers', Customer.get());
  },

  update: function (customer, callback) {
    console.log('update customer:', customer);

    var err = Customer.update(customer);

    if (err) {
      console.error('There was an error!', err);
      callback(err, null);
      return;
    }

    callback(null, 'Success!');
  },

  destroy: function (id, callback) {
    console.log('delete customer:', id);

    var err = Customer.destroy(id);

    if (err) {
      console.error('There was an error!', err);
      callback(err, null);
      return;
    }

    callback(null, 'Success!');
  }
};

module.exports = function (io, socket) {
  io.emit('read customers', Customer.get());
  socket.on('create customer', Router.create);
  socket.on('read customers', Router.read);
  socket.on('update customer', Router.update);
  socket.on('destroy customer', Router.destroy);
};
