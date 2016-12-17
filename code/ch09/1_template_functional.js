function log(person, number){
  console.log(person.whatIs(number));
};
class BinaryKnower{ whatIs(number){ return Number('0b' + number) } };
class BinaryOblivious{ whatIs(number){ return number } };
const personOne = new BinaryKnower();
const personTwo = new BinaryOblivious();
[personOne, personTwo].forEach(person => { log(person, 10) });


// No objects
// function log(fun, number){
//   console.log(fun(number));
// };
// function whatIsInBinary(number){return Number('0b' + number)};
// function whatIs(number){return number};
//
// [whatIsInBinary, whatIs].forEach(fun => { log(fun, 10) });
