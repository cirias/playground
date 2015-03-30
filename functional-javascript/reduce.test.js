function repeat(operation, num) {
  setTimeout(function () {
    if (num <= 0) return;
    operation();
    return repeat(operation, --num);
  }, 0);
}

repeat(function () {
  console.log('in');
}, 10);

setTimeout(function () {
  console.log('out');
}, -1);

// for (var i = 0; i < 10; i++) {
//   process.nextTick(function () {
//     console.log('out');
//   });
// }
