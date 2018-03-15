var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var config = require('./config/config');
var Message = require('./models/message.model');

var db = require('./config/connect')(config.db);

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/teste', (req, res) => {
  let msg = new Message({ content: 'teste' });

  msg.save((err, { content }) => {
    res.json({ content });
  });

});

module.exports = app;
