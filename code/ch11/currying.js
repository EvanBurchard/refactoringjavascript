R = require('ramda');

//var square = (thing) => thing * thing;

//const mapSquares = R.map(square);
//const forthPower = R.compose(square, square);
//const mapForthPower = R.map(forthPower);
//const mapForthPower = R.compose(R.map, forthPower);
//console.log(mapForthPower([2, 4, 5]));

console.log(3 + "beaver");
console.log(Math.random(3));
new Object('asdfasd')


//console.log(mapSquares([2, 4, 5]));
//
//console.log(R.map((thing) =>
//thing * thing, R.map((thing) => thing * thing, [2, 4, 5])));
//console.log(R.converge (R.map, [(thing) => thing * thing, (thing) => thing * thing]) ([2, 4, 5]));

//var factorial = R.memoize(n => R.product(R.range(1, n + 1)));
//var printFact = R.compose(console.log, factorial);
//printFact(3);

//var add = (x, y) => x + y;
//function add(x, y){ return x + y };

//console.log(add(3, 2));

//console.log(R.map((thing) => thing * thing), [2, 4, 5])


//function forthPower(thing){
  //return thing * thing * thing * thing;
//}
//function forthPower(thing){
  //return square(thing) * square(thing);
//}

//function add(numberOne, numberTwo){
  //return numberOne + numberTwo;
//};

//function increment(addend){
  //return add(addend, 1);
//}

//const curriedAdd = R.curry(add);

//console.log(add(1));
//console.log(curriedAdd(1)(2));
//console.log(curriedAdd(1, 2));

//const increment = curriedAdd(1);
//console.log(increment(3));


//function add(numberOne){
  //return (numberTwo) => {
    //return numberOne + numberTwo;
  //}
//};
//console.log(add(1, 2));

//console.log(add(1)(2));

//addOne = add(1);
//addFive = add(5);

//console.log(addOne(2));
//console.log(addFive(3));
//console.log(addFive(3));
//console.log(addOne(addOne(addFive(3))));
