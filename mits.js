var express = require('express'),
    mitsManager  = require('./managers/mits-manager');

var app = module.exports = express.Router();

app.get('/api/mits', function(req, res) {
  console.log('============');
  console.log("/api/mits");
  console.log('============');
  res.status(200).send(mitsManager.getMits());
});
