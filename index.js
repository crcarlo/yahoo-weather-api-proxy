const OAuth = require("oauth");
const url = require("url");

module.exports = (req, res) => {
  const header = {
    "Yahoo-App-Id": process.env.YAHOO_APP_ID
  };
  const { referer } = req.headers;
  const { path } = url.parse(req.url);

  if (referer !== process.env.ALLOWED_ORIGIN) {
    res.end(JSON.stringify({
      error: "Origin not allowed"
    }));
    return;
  }

  const request = new OAuth.OAuth(
    null,
    null,
    process.env.YAHOO_CONSUMER_KEY,
    process.env.YAHOO_CONSUMER_SECRET,
    "1.0",
    null,
    "HMAC-SHA1",
    null,
    header
  );
  request.get(
    "https://weather-ydn-yql.media.yahoo.com" + path,
    null,
    null,
    function(err, data, result) {
      if (err) {
        res.end(
          JSON.stringify({
            error: "Error occurred while contacting Yahoo APIs"
          })
        );
      } else {
        try {
          const jsonData = JSON.stringify(data);
          if (jsonData) {
            res.end(jsonData);
      } else {
            res.end(
              JSON.stringify({
                error: "No response data"
              })
            );
          }
        } catch (err) {
          res.end(
            JSON.stringify({
              error: "Error occurred while parsing json response"
            })
          );
        }
      }
    }
  );
};
