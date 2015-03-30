var split = require('split');
var through = require('through');

// Example:

// process.stdin
//   .pipe(split())
//   .pipe(through(function (line) {
//       console.dir(line.toString());
//   }));

// Official Solution:

// var through = require('through');
// var split = require('split');
//
// var lineCount = 0;
// var tr = through(function (buf) {
//     var line = buf.toString();
//     this.queue(lineCount % 2 === 0
//         ? line.toLowerCase() + '\n'
//         : line.toUpperCase() + '\n'
//     );
//     lineCount ++;
// });
// process.stdin.pipe(split()).pipe(tr).pipe(process.stdout);

process.stdin
  .pipe(split())
  .pipe(through((function () {
    var num = 1;
    return function (line) {
      if (num % 2) {
        this.queue(line.toString().toLowerCase() + '\n');
      } else {
        this.queue(line.toString().toUpperCase() + '\n');
      }
      num++;
    }
  })()))
  .pipe(process.stdout);
