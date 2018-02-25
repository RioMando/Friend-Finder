// LOAD DATA - Linking our routes to a "data" source that
// holds an array of information on friends responses.
// ==================================================================
var friends = require ('../data/friends');

console.log(friends)

// ===============================================================================
// ROUTING
// ===============================================================================
module.exports = function(app, bodyParser) {
// API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/friends... they are shown a JSON of the data in friends)
  // ---------------------------------------------------------------------------
	app.get('/api/friends', function(req, res) {
		res.json(friends);

	});

	app.post('/api/friends', function(req, res) {
		
	// 	//here goes the logic
	// 	// send the info from the best match
	// 	var thisUser = req.body;
	// 	var diff = [];
	// 	var index = 0;
	// 	var scor = 'scors[]';
	// 	// console.log(friends);

	// 	var iterable = friends;

	// 	// for (let entry of iterable) {
 //  		console.log("======================");
 //  		console.log(friends);
 //  		console.log("*****************************\n\n\n");
 //  		console.log(res.friends);
 //  		// console.log(res.friends.name);
 //  		// console.log(res.friends.photo);
 //  		// console.log(res.friends.scors);
 //  		console.log("*****************************\n\n\n");
 //  		// console.log(entry.name);
 //  		// console.log(entry.photo);
 //  		// console.log(entry.scor);
 //  		// };

		
 // 		// console.log(friends[1].name);
 // 		// console.log(friends[1].photo);
 // 		// console.log(friends[1].scores);

	// 	// let iterable = friends;
	// 	// for (let [scores, key])
		
	// 	res.json();
	// 	friends.push(req.body);
 //    // }
	// })
////////////////////////////////////////////
        var thisUser = req.body;
        console.log("This user: ", thisUser);
        console.log(thisUser);
        var differences = [];

        // If there is more than one friend to compare to,
        if (friends.length > 1) {
            // Step through these potential friends.
            friends.forEach(function(user) {
                var totalDifference = 0;

                // For each Score, compare the scors and add the absolute value of the difference to the total difference.
                for (var i = 0; i < thisUser.answers.length; i++) {
                    var otherScore = user.scors[i];
                    var thisScore = thisUser.scors[i];
                    var difference = +otherScore - +thisScore;
                    totalDifference += Math.abs(difference);
                }

                differences.push(totalDifference);
            });

            // Find the minimum difference score.
            var minimumDifference = Math.min.apply(null, differences);

            // Since there may be more than one potential friend with that score, create an array.
            var bestMatches = [];

            // For each item in differences, if it is equal to the minimumDifference, add the corresponding friends to the bestMatches array.
            for (var i = 0; i < differences.length; i++) {
                if (differences[i] === minimumDifference) {
                    bestMatches.push(friends[i]);
                };
            };

            // Then send bestMatches to the client.
            console.log(bestMatches);
            res.json(bestMatches);
        // If there is only one friend to compare to, skip all that work and just send back that friend.
        } else {
            console.log(friends);
            res.json(friends);
        };
    friends.push(thisUser)
});
}