// Mock data
var db = [
  {
    id: 1,
    name: 'John Smith',
    email: 'john@example.com',
    dob: new Date('jan 1 1980'),
    alive: true
  },
  {
    id: 2,
    name: 'Mary A. Smith',
    email: 'mary@example.com',
    dob: new Date('jan 1 1932'),
    alive: false
  }
];

// Model methods
var Model = {
  get: function () {
    return db;
  },

  create: function (customer) {
    console.log('Create customer:', customer);
    console.log('\tNumber of customers:', db.length);

    // Assign an ID to the new customer.
    customer.id = db.length + 1;

    db.push(customer);

    console.log('\tNew number of customers:', db.length);

    return db;
  },

  destroy: function (id) {
    console.log('Remove customer with ID:', id);
    console.log('\tNumber of customers:', db.length);

    db = db.filter(function (cust) {
      return cust['id'] !== Number(id);
    });

    console.log('\tNew number of customers:', db.length);

    return db;
  }
};

module.exports = Model;
