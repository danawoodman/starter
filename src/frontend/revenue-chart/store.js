var Reflux = require('reflux');

var Store = Reflux.createStore({
  listenables: [require('./actions')],

  getInitialState: function () {
    return [
      {
        color: 'steelblue',
        data: [ { x: 0, y: 23}, { x: 1, y: 15 }, { x: 2, y: 79 } ]
      },
      {
        color: 'lightblue',
        data: [ { x: 0, y: 30}, { x: 1, y: 20 }, { x: 2, y: 64 } ]
      }
    ]
  },

  onUpdate: function () {
    this.trigger([
      {
        color: 'lightblue',
        data: [ { x: 0, y: 10}, { x: 1, y: 80 }, { x: 2, y: 44 } ]
      },
      {
        color: 'steelblue',
        data: [ { x: 0, y: 99}, { x: 1, y: 39 }, { x: 2, y: 30 } ]
      },
      {
        color: 'black',
        data: [ { x: 0, y: 3}, { x: 1, y: 9 }, { x: 2, y: 5 } ]
      }
    ]);
  }
});

module.exports = Store;
