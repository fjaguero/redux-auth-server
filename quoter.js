var quotes = require('./quotes.json');

exports.getRandomOne = function() {
  var totalAmount = quotes.length;
  var rand = Math.ceil(Math.random() * totalAmount);
  return quotes[rand];
}

exports.getSecret = function () {
  return "WTF THIS IS SECRET OMG"
}
