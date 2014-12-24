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

    return customer;
  },

  update: function (customer) {
    console.log('Update customer:', customer);

    db = db.map(function (cust) {
      if (cust.id === customer.id) {
        // Only update valid properties.
        cust.name = customer.name;
        cust.email = customer.email;
        console.log('\tCustomer matches!', cust);
      }
      return cust;
    });
  },

  destroy: function (id) {
    console.log('Remove customer with ID:', id);
    console.log('\tNumber of customers:', db.length);

    db = db.filter(function (cust) {
      return cust['id'] !== Number(id);
    });

    console.log('\tNew number of customers:', db.length);
  }
};

module.exports = Model;
