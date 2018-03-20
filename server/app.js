const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const winston = require('winston');
const expressWinston = require('express-winston');
require('winston-mongodb');

const config = require('./config/config');
const db = require('./config/connect')(config.db);

const app = express();

configLogger()
configCORS()

app.use(express.static(__dirname + '/../client/dist'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

require('./router/router')(app);

function configLogger() {
  if (process.env.NODE_ENV != 'test') {
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
  }
}

function configCORS() {
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
}

process.on('unhandledRejection', (err) => {
  console.log('FATAL:', err);
});

module.exports = app;


