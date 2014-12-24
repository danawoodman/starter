var Reflux = require('reflux');

var Actions = Reflux.createActions([
  'edit',
  'stopEditing',
  'update',
  'create',
  'destroy'
]);

module.exports = Actions;
