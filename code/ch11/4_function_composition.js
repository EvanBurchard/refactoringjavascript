_ = require('lodash');
const square = (thing) => thing * thing;

// const mapSquares = _.map(square);
const mapSquares = (data) => _.map(data, square);
// console.log(mapSquares([2, 4, 5]));


// [3, 4, 2].forEach((element) => console.log(element));
// [3, 4, 2].forEach(console.log);

const logFirst = (first) => console.log(first);
[3, 4, 2].forEach(logFirst);

R = require('ramda');
console.log(R.map(square, R.map(square, [2, 4, 5])));

const fourthPower = R.compose(square, square);
console.log(R.map(fourthPower, [2, 4, 5]));

const mapFourthPower = R.map(fourthPower);
console.log(mapFourthPower([2, 4, 5]));

const printFourthPower = R.compose(console.log, square, square);
R.map(printFourthPower, [2, 4, 5]);

R.map(printFourthPower) ([2, 4, 5]);


var factorial = R.memoize(n => R.product(R.range(1, n + 1)));

var printFact = R.compose(console.log, factorial);
printFact(3);


var printFactPipe = R.pipe(factorial, console.log);
printFactPipe(3);
