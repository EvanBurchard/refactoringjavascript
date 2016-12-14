//function factorial(number){
  //if(number < 2){
    //return 1;
  //} else {
    //return(number * factorial(number - 1));
  //}
//};
//console.log(factorial(1));
//console.log(factorial(2));
//console.log(factorial(3));
//console.log(factorial(4));
//console.log(factorial(5));

//const lookupTable = {};
//function memoizedFactorial(number){
  //if(number in lookupTable){
    //console.log("cached");
    //return lookupTable[number];
  //}
  //else{
    //console.log("calculating");
    //var reduceValue;
    //if(number < 2){
        //reduceValue = 1;
    //} else {
      //reduceValue = number * memoizedFactorial(number - 1);
    //}
    //lookupTable[number] = reduceValue
    //return reduceValue
  //}
//};
//console.log(memoizedFactorial(10));
//console.log(memoizedFactorial(10));
//console.log(memoizedFactorial(11));

//function find(toFind, array){
  //let found = "not found";
  //array.forEach((element) => {
    //if(element == toFind){
      //found = "found";
    //};
  //});
  //return found;
//};
//console.log(find(3, [3, 9, 2]));
//console.log(find(3, [2, 9, 3]));
//console.log(find(3, [2, 9, 2]));

//function find(toFind, array){
  //if (array[0] === toFind) {
    //console.log('a');
    //return "found";
  //} else if(array.length === 0){
    //console.log('b');
    //return "not found";
  //} else{
    //console.log('c');
    //return find(toFind, array.slice(1))
  //}
//};
//console.log(find(3, [3, 9, 2]));
//console.log(find(3, [2, 9, 3]));
//console.log(find(3, [2, 9, 2]));
//console.log(find(3, [2, 3, 2]));



//lookupTable = {};
//memoizedFactorial = (function(number){
  //if(number in lookupTable){
    //console.log("I ran");
    //return lookupTable[number];
  //}
  //else{
    //console.log("I ran more");
    //var reduceValue;
    //if(number < 2){
        //reduceValue = 1;
    //} else {
      //reduceValue = number * memoizedFactorial(number - 1);
    //}
    //lookupTable[number] = reduceValue
    //return reduceValue
  //}
//})();
//console.log(memoizedFactorial(21));
//console.log(memoizedFactorial(21));

//const lookupTable = {};
//function memoizedFactorial(number){
  //if(number in lookupTable){
    //console.log("cached");
    //return lookupTable[number];
  //}
  //else{
    //console.log("calculating");
    //var reduceValue;
    //if(number < 2){
        //reduceValue = 1;
    //} else {
      //reduceValue = number * memoizedFactorial(number - 1);
    //}
    //lookupTable[number] = reduceValue
    //return reduceValue
  //}
//};
//console.log(memoizedFactorial(10));
//console.log(memoizedFactorial(10));
//console.log(memoizedFactorial(11));

function memoizedFactorial(number, lookupTable = {}){
  if(number in lookupTable){
    console.log("cached");
    return lookupTable[number];
  }
  else{
    console.log("calculating");
    var reduceValue;
    if(number < 2){
        reduceValue = 1;
    } else {
      reduceValue = number * (memoizedFactorial(number - 1, lookupTable))['result'];
    };
    lookupTable[number] = reduceValue;
    return {result: reduceValue, lookupTable: lookupTable};
  }
};
console.log(memoizedFactorial(10)['result']);
console.log(memoizedFactorial(10)['result']);

const lookup = memoizedFactorial(10)['lookupTable'];
memoizedFactorial(10, lookup);

//console.log(memoizedFactorial(10)['result']);
//console.log(memoizedFactorial(10)['result']);
//[result, oldLookup] = memoizedFactorial(10);
//console.log(result)
//console.log(memoizedFactorial(10, oldLookup));
//console.log(memoizedFactorial(11));
