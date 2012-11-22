/*
 * TwittVault is a small script to store all your tweets in a MySQL database.
 *
 * see README.rst file for documentation and setup
 *
 */

var config = require('./config.json')
  , api = require('tuiter')(config.twitter_api_keys)
  , mysql = require('mysql');


function save_tweet(data) {
	// Store tweet in DB
	db.query(
	  'INSERT INTO '+ config.db.tweets_table + ' SET id_tweet = ?, text = ?, id_user = ?',
	  [data.id_str, data.text,  data.user.id]
	);
}


// DB setup
var db = mysql.createClient(config.db);
db.query('USE ' + config.db.name);


// Get user id from screen name
api.showUser({screen_name: config.screen_name}, function(err, user) {
	if(!err) {
		// Create stream connection to Twitter API
		api.filter({follow: user.id}, function(stream){
			stream.on('tweet', function(data){
				console.log('+ @'+data.user.screen_name+': '+data.text);
				// Store tweet in DB
				save_tweet(data);
			});
		});

		console.log('Waiting for tweets...');
	} else {
		console.log('Error when trying to get username id of @'+config.screen_name);
		process.exit(1);
	}
});
