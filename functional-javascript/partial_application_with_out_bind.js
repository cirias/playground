var slice = Array.prototype.slice

function logger(namespace) {
  return function () {
    var args = slice.call(arguments, 0);
    args.unshift(namespace);
    console.log.apply(console, args);
  }
}

module.exports = logger
