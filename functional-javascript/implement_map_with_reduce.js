// module.exports = function arrayMap (arr, fn) {
//   return arr.reduce(function (output, value) {
//     output.push(fn(value));
//     return output;
//   }, []);
// };

// Official Solution:

module.exports = function map(arr, fn) {
  return arr.reduce(function(acc, item, index, arr) {
    return acc.concat(fn(item, index, arr))
  }, [])
}
