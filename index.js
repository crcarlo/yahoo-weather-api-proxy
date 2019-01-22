

module.exports = (req, res) => {
	const OAuth = require('oauth');
	
	const header = {
		'Yahoo-App-Id': process.env.YAHOO_APP_ID
	};
	const request = new OAuth.OAuth(
		null,
		null,
		process.env.YAHOO_CONSUMER_KEY,
		process.env.YAHOO_CONSUMER_SECRET,
		'1.0',
		null,
		'HMAC-SHA1',
		null,
		header
	);
	request.get(
		'https://weather-ydn-yql.media.yahoo.com/forecastrss?location=sunnyvale,ca&format=json',
		null,
		null,
		function(err, data, result) {
			if (err) {
				res.end('ERROR');
			} else {
				res.end(data);
			}
		}
	);
};
