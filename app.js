const express = require('express');
const app = express();
const appPort = process.env.port || 8080;

// legacy blog post, redirect to tumblr
app.get('/post/*', function(req, res) {
  let tumblrBaseUrl = "https://barkleymoonshot.tumblr.com";
  let newUrl = tumblrBaseUrl + req.originalUrl;

  res.redirect(newUrl);
});

// anything else, redirect to medium
app.get('*', function(req, res) {
  let mediumUrl = "https://medium.com/moonshotlab";

  res.redirect(mediumUrl);
});

app.listen(appPort, function() {
  console.log(`Listening on port ${appPort}.`);
});
