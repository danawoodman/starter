var Reflux = require('reflux');
var io = require('socket.io-client');
var socket = io();
//var socket = io.connect();
var console = require('console');

var CONNECTED = 'connected';
var DISCONNECTED = 'disconnected';

var Store = Reflux.createStore({
  listenables: [require('./actions')],

  init: function () {
    console.log('Initialize connection status store.');

    // Listen for status changes.
    socket.on('connect', this.updateConnectionStatus.bind(this));
    socket.on('disconnect', this.updateConnectionStatus.bind(this));
  },

  updateConnectionStatus: function () {
    this.updateStatus(socket.connected);
  },

  updateStatus: function (connected) {
    console.log('Connected to WebSockets server:', connected);
    this.status = connected ? CONNECTED : DISCONNECTED;

    console.log('\tStatus:', this.status);
    this.trigger(this.status);
  },

  getInitialState: function () {
    this.status = this.status || DISCONNECTED;
    return this.status;
  }
});

module.exports = Store;
