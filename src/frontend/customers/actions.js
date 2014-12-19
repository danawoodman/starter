var Reflux = require('reflux');

var Actions = Reflux.createActions([
  'customerUpdate',
  'customerCreate',
  'customerDelete'
]);

module.exports = Actions;
