var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var port = process.env.PORT || 8000;
var app = express()
require('dotenv').config()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var public_dir = "dist";
if (app.get('env') === 'development') {
	public_dir = 'public';
  app.use(require('express-prettify')({query:'pretty'}));
}

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.send('Hello World:<br>');
})

app.use('/api', require('./api'));

app.listen(port, function () {
	console.log("listening on port: "+ port);
})