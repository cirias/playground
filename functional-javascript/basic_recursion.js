function reduce(arr, fn, initial) {
  return (function recursion (array) {
    if (array.length === 0) return initial;
    var current = array.pop();
    return fn(recursion(array, fn, initial), current, array.length, arr);
  })(arr.slice(0));
}

module.exports = reduce

// Official Solution:
// 
// function reduce(arr, fn, initial) {
//   return (function reduceOne(index, value) {
//     if (index > arr.length - 1) return value // end condition
//     return reduceOne(index + 1, fn(value, arr[index], index, arr)) // calculate & pass values to next step
//   })(0, initial) // IIFE. kick off recursion with initial values
// }
//
// module.exports = reduce
