var fs = require('fs');
var oldnames = 'BasicMap.js BasicRecursion.js BlockingEventLoop.js FunctionSpies.js HELLO_WORLD.js HigherOrderFunctions.js PartialApplicationWithOutBind.js reduce.test.js trampoline.js'.split(' ');
var lowers = 'BasicMap.js BasicRecursion.js BlockingEventLoop.js FunctionSpies.js HELLO_WORLD.js HigherOrderFunctions.js PartialApplicationWithOutBind.js reduce.test.js trampoline.js'.toLowerCase().split(' ');

fs.readdir(__dirname, function (err, files) {
  files.forEach(function (file) {
    if (lowers.indexOf(file) >= 0) {
      fs.renameSync(file, oldnames[lowers.indexOf(file)].trim().replace(/([a-z\d])([A-Z]+)/g, '$1_$2').replace(/[-\s]+/g, '_').toLowerCase());
    }
  });
});
