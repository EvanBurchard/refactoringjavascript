R = require('ramda');
S = require('sanctuary');
//const square = (thing) => thing * thing;
//const forthPower = R.compose(console.log, square, square);
//R.map(forthPower, [2, 4, 5]);
//R.map(forthPower)([2, 4, 5]);

//R.pipe([square, square, console.log])((2, 4, 5));


//var factorial = R.memoize(n => R.product(R.range(1, n + 1)));
//var printFact = R.pipe(factorial, console.log);
//printFact(3);


//printFactp

//var factorial = R.memoize(n => R.product(R.range(1, n + 1)));
//var printFact = R.compose(console.log, factorial);
//printFact(3);
//
//
const getAThree = S.find(R.equals(3));
R.map(console.log, getAThree([3, 4]));
