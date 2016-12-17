class Person{
  log(number){
    console.log(this.whatIs(number));
  };
};

class BinaryKnower extends Person{
  whatIs(number){ return Number('0b' + number) };
};

class BinaryOblivious extends Person{
  whatIs(number){ return number };
};
const personOne = new BinaryKnower();
const personTwo = new BinaryOblivious();
[personOne, personTwo].forEach(person => person.log(10));
