var inputs = process.argv.slice(2);
var result = inputs.map(row => row[0])
                   .reduce((pre, c) => pre + c, '');
console.log(result);
