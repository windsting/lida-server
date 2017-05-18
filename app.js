var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.PORT || 8000;
var app = express()
require('dotenv').config()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

if (app.get('env') === 'development') {
  app.use(require('express-prettify')({query:'pretty'}));
}

app.get('/', function (req, res) {
  res.send('Hello World:<br>');
})

app.use('/api', require('./api'));

app.listen(port, function () {
	console.log("listening on port: "+ port);
})