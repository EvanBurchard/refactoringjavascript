function factorial(number){
  if(number < 2){
    return 1;
  } else {
    return(number * factorial(number - 1));
  }
};
factorial(3); //returns 6

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
const lookup = memoizedFactorial(10)['lookupTable'];
console.log(memoizedFactorial(10, lookup));
