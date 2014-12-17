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
    db.push(customer);
    return db;
  }
};

module.exports = Model;
