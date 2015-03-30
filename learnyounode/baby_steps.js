var sum = process.argv.slice(2).reduce(function (sum, cur) {
  sum += Number(cur);
  return sum;
}, 0);

console.log(sum);
