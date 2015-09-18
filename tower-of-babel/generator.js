const max = process.argv[2];
let FizzBuzz = function*() {
    let pre = 0;
    while (pre < max) {
      pre++;
      switch (true) {
        case pre % 15 === 0:
          yield 'FizzBuzz';
          break;
        case pre % 3 === 0:
          yield 'Fizz';
          break;
        case pre % 5 === 0:
          yield 'Buzz';
          break;
        default:
          yield pre;
          break;
      }
    }
}();

for (var n of FizzBuzz) {
  console.log(n);
}
