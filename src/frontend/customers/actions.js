var Reflux = require('reflux');

var Customers = Reflux.createActions([
  'edit',
  'stopEditing',
  'update',
  'create',
  'destroy'
]);

var CreateState = Reflux.createActions([
  'open',
  'close'
]);

module.exports = {
  CreateState: CreateState,
  Customers: Customers
};
