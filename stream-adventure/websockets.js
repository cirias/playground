var ws = require('websocket-stream');
var stream = ws('ws://localhost:8000');

// Offcial Solution:

// stream.end('hello\n');

stream.write(new Buffer('hello\n'));
stream.end();
