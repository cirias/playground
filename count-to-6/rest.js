module.exports = function (...args) {
  return args.reduce((sum, c) => sum + c, 0) / args.length;
};
