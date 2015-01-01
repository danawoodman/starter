var console = require('console-browserify');
var path = require('path');
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var bodyParser = require('body-parser');
var Customer = require('./customers/model');
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({
  //extended: true
//}));

// Settings
require('dotenv').load();
var port = Number(process.env.PORT || 2000);

// Logging
var morgan = require('morgan');
app.use(morgan('combined'));

// Serve static assets
app.use(express.static(path.join(__dirname, '../../dist')));

// Handle WebSocket connections.
io.on('connection', function (socket) {
  console.log('a user connected');
  socket.on('disconnect', function () {
    console.log('user disconnected');
  });

  // Load application routers.
  require('./customers/router.js')(io, socket);
});

// Start server.
server.listen(port, function () {
  console.log('Server starting up on port', port);
});
