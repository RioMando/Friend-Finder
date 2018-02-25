// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Server.js - Tjhis file is the initial starting point for the Node/Express server. 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Dependencies
// ==================================================
var bodyParser = require('body-parser');
var express = require('express');

// Sets up the Express App
// ==================================================
var app = express();
var PORT = process.env.PORT || 5050;

app.use(express.static('app/data'))
// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

require('./app/routing/apiRoutes')(app, bodyParser);
require('./app/routing/htmlRoutes')(app);

// LISTENER - Code to start the server
app.listen(PORT, function() {
	console.log('App listening on PORT ' + PORT);
});