var express = require('express');
var app = express();
var appPort = process.env.port || 5000;

app.use(express.static('public'));

// legacy blog post, redirect to tumblr
app.get('/post/*', function(req, res) {
  var tumblrBaseUrl = "https://barkleymoonshot.tumblr.com";
  var newUrl = tumblrBaseUrl + req.originalUrl;

  res.redirect(newUrl);
});

// anything else, redirect to medium
app.get('*', function(req, res) {
  var mediumUrl = "https://medium.com/moonshotlab";

  res.redirect(mediumUrl);
});

app.listen(appPort, function() {
  console.log('Listening on port ' + appPort + '.');
});
