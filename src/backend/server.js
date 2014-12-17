var path = require('path');
var express = require('express');
var app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({
  //extended: true
//}));

// Load routers
var customersRouter = require('./customers/router.js');

// Settings
require('dotenv').load();
var port = Number(process.env.PORT || 2000);

// Logging
var morgan = require('morgan');
app.use(morgan('combined'));

// Set template language
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Serve static assets
app.use(express.static(path.join(__dirname, '../../dist')));

// Mount routers
app.use('/api/customers', customersRouter);

// Start server
app.listen(port, function () {
  console.log('Server starting up on port', port);
});
