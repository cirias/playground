var arg1 = process.argv[2];
var arg2 = process.argv[3];

import {PI, sqrt, square} from './modules-default-export-module.js';
console.log(PI);
console.log(sqrt(+arg1));
console.log(square(+arg2));
