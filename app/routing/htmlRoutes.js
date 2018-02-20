var path = require('path');

module.exports = function (app) {
	// GET route to display the survey page
	app.get('/survey', function(req, res) {
		res.sendfile(path.join(__dirname, '../public/survey.html'));
	});

	// If no matching route is found, rpute by default to home
	app.get('*', function(req, res) {
		res.sendfile(path.join (__dirname, '../public/home.html'));
	});
};