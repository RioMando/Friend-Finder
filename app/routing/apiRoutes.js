// LOAD DATA - Linking our routes to a "data" source that
// holds an array of information on friends responses.
// ==================================================================
var friends = require ('../data/friends');

// ===============================================================================
// ROUTING
// ===============================================================================
module.exports = function(app) {
// API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/friends... they are shown a JSON of the data in friends)
  // ---------------------------------------------------------------------------
	app.get('/api/friends', function(req, res) {
		res.json(friends);
	});

	app.post('/api/friends', function(res, req) {
		friends.push(req.body);
	});

};
