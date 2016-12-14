//class Person{
  //constructor(readKnowledge, andKnowledge, xorKnowledge){
    //this.read = readKnowledge;
    //this.and = andKnowledge;
    //this.xor = xorKnowledge;
  //}
//};

//const binary = {
  //readAware(number){
    //return Number('0b' + number);
  //},
  //readOblivious(number){
    //return number;
  //},
  //andAware(numberOne, numberTwo){
    //return numberOne & numberTwo;
  //},
  //andOblivious(numberOne, numberTwo){
   //return "unknown";
  //},
  //xorAware(numberOne, numberTwo){
    //return numberOne ^ numberTwo;
  //},
  //xorOblivious(numberOne, numberTwo){
    //return "unknown";
  //}
//};

//const personOne = new Person(binary.readAware, binary.andAware, binary.xorAware);
//const personTwo = new Person(binary.readOblivious, binary.andOblivious, binary.xorOblivious);

//[personOne, personTwo].forEach(person => {
  //console.log(person.read(10));
  //console.log(person.and(2, 3));
  //console.log(person.xor(2, 3));
//});

class Person{
  constructor(binaryKnowledge){
    this.binaryKnowledge = Object.create(
                             Object.assign(
                               {person: this},
                                binaryKnowledge));
  };
  change(binaryKnowledge){
    this.binaryKnowledge = Object.create(
                             Object.assign(
                               {person: this},
                                binaryKnowledge));
  };
};

const binaryAwareness = {
  read(number){
    return Number('0b' + number);
  },
  and(numberOne, numberTwo){
    return numberOne & numberTwo;
  },
  xor(numberOne, numberTwo){
    return numberOne ^ numberTwo;
  },
  forget(){
    this.person.change(binaryObliviousness);
  }
}
const binaryObliviousness = {
  read(number){
    return number
  },
  and(numberOne, numberTwo){
    return "unknown";
  },
  xor(number){
    return "unknown";
  },
  learn(){
    this.person.change(binaryAwareness);
  }
};

const personOne = new Person(binaryAwareness);
const personTwo = new Person(binaryObliviousness);

[personOne, personTwo].forEach(person => {
  console.log(person.binaryKnowledge.read(10));
  console.log(person.binaryKnowledge.and(2, 3));
  console.log(person.binaryKnowledge.xor(2, 3));
});

personOne.binaryKnowledge.forget();
personTwo.binaryKnowledge.learn();

[personOne, personTwo].forEach(person => {
  console.log(person.binaryKnowledge.read(10));
  console.log(person.binaryKnowledge.and(2, 3));
  console.log(person.binaryKnowledge.xor(2, 3));
});

personTwo.binaryKnowledge.forget();
personTwo.binaryKnowledge.read = () => 'for only one';

[personOne, personTwo].forEach(person => {
  console.log(person.binaryKnowledge.read(3));
});

