var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var config = require('./config/config');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


mongoose.connect(config.db);
mongoose.connection.on('connected', function() {
  console.log('Mongoose default connection ', config.db);
});


module.exports = app;
