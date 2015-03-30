// var through = require('through');
// var tr = through(write, end);
// tr.write('beep\n');
// tr.write('boop\n');
// tr.end();
//
// function write (buf) { console.dir(buf); }
// function end () { console.log('__END__'); }

var through = require('through');
var tr = through(write, end);
// tr.write('beep\n');
// tr.write('boop\n');
// tr.end();

function write (buf) { this.queue(buf.toString().toUpperCase()); }
function end () { this.queue(null); }

process.stdin.pipe(tr).pipe(process.stdout);
