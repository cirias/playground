module.exports = function duckCount () {
  var args = Array.prototype.slice.call(arguments);
  return args.filter(function (duck) {
    return Object.prototype.hasOwnProperty.call(duck, 'quack');
  }).length;
};
