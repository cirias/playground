var inputs = process.argv.slice(2);
var result = inputs.map(x => x[0]).reduce((pre, c) => pre + c, '');
console.log(`[${inputs}] becomes "${result}"`);
