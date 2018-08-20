var TwitterPackage = require("twitter");

var keys = {
  consumer_key: '', // your keys go in between the quotes
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: ''
};

var Twitter = new TwitterPackage(keys);

Twitter.stream('statuses/filter', {track: 'your keyword here'}, function(stream) {
	stream.on('data', function(tweet) {
		console.log(tweet && tweet.text); 
		console.log('\n');
	})

	stream.on('error', function(error) {
		throw error;
	}) 
})