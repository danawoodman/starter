var console = require('console-browserify');
var Customer = require('./model');

function Router(io, socket) {
  this.create = function (customer, callback) {
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

    // Let other sockets know the customer was created.
    socket.broadcast.emit('customer created', cust);
  };

  this.read = function () {
    console.log('retrieving list of customers');
    io.emit('read customers', Customer.get());
  };

  this.update = function (customer, callback) {
    console.log('update customer:', customer);

    var err = Customer.update(customer);

    if (err) {
      console.error('There was an error!', err);
      callback(err, null);
      return;
    }

    callback(null, 'Success!');

    // Let other sockets know the customer was updated.
    socket.broadcast.emit('customer updated', customer);
  };

  this.destroy = function (id, callback) {
    console.log('delete customer:', id);

    var err = Customer.destroy(id);

    if (err) {
      console.error('There was an error!', err);
      callback(err, null);
      return;
    }

    callback(null, 'Success!');

    // Let other sockets know the customer was destroyed.
    socket.broadcast.emit('customer destroyed', id);
  };

  return this;
}

module.exports = function (io, socket) {
  // Trigger reading customers on initial connection.
  io.emit('read customers', Customer.get());

  var router = new Router(io, socket);
  socket.on('create customer', router.create);
  socket.on('read customers', router.read);
  socket.on('update customer', router.update);
  socket.on('destroy customer', router.destroy);
};
