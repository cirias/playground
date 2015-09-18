const max = process.argv[2];
let FizzBuzz = {
  [Symbol.iterator]() {
    let pre = 0;
    return {
      next() {
        pre++;
        if (pre > max) return {done: true};
        if (pre % 15 === 0) return {done: false, value: 'FizzBuzz'};
        if (pre % 3 === 0) return {done: false, value: 'Fizz'};
        if (pre % 5 === 0) return {done: false, value: 'Buzz'};
        return {done: false, value: pre};
      }
    };
  }
}

for (var n of FizzBuzz) {
  console.log(n);
}
