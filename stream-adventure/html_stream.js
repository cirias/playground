var trumpet = require('trumpet');
var through = require('through');
var tr = trumpet();

// Official Solution:

var loud = tr.select('.loud').createStream();
loud.pipe(through(function (buf) {
    this.queue(buf.toString().toUpperCase());
})).pipe(loud);

process.stdin.pipe(tr).pipe(process.stdout);

// My Solution:

// var stream = tr.select('.loud').createStream();
// stream.pipe(through(function (buf) {
//   this.queue(buf.toString().toUpperCase());
// })).pipe(process.stdout);
// process.stdin.pipe(tr);
// tr.pipe(process.stdout);
// stream.end();
