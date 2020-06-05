// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

// Required API endpoint...
app.get("/api/whoami", function (req, res) {
  // View all the HTTP headers using console.log(req.headers);
  // Response with required
  const ip = req.header('x-forwarded-for').split(',')[0]
  res.json({ipaddress: ip, language: req.header('accept-language'), software: req.header('user-agent')});
});

// To know more:
// Visit: Work with HTTP headers in Express (https://flaviocopes.com/express-headers/)
// https://stackoverflow.com/questions/10849687/express-js-how-to-get-remote-client-address

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
