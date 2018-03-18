var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');

var winston = require('winston');
var expressWinston = require('express-winston');
require('winston-mongodb');

var config = require('./config/config');
var db = require('./config/connect')(config.db);

var app = express();

app.use(expressWinston.logger({
  transports: [
    new winston.transports.MongoDB({
      db: config.db
    }),
    new winston.transports.Console({
      json: true,
      colorize: true
    })
  ],
  meta: true,
  msg: "HTTP {{req.method}} {{req.url}}",
  expressFormat: true,
  colorize: false,
}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

require('./router/router')(app);

process.on('unhandledRejection', (err) => {
  console.log('FATAL:', err);
});

module.exports = app;


