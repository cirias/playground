var duplexer = require('duplexer');
var through = require('through');
var split = require('split');
// var stream = require('stream');

module.exports = function (counter) {
  var counts = {};
  var input = through(function (row) {
    counts[row.country] = (counts[row.country] || 0) + 1;
  }, function () {
    counter.setCounts(counts);
  });
  return duplexer(input, counter);
};
