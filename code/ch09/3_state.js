class Person{
  constructor(readKnowledge, andKnowledge, xorKnowledge){
    this.read = readKnowledge;
    this.and = andKnowledge;
    this.xor = xorKnowledge;
  };
};

const binary = {
  readAware(number){
    return Number('0b' + number);
  },
  readOblivious(number){
    return number;
  },
  andAware(numberOne, numberTwo){
    return numberOne & numberTwo;
  },
  andOblivious(numberOne, numberTwo){
   return "unknown";
  },
  xorAware(numberOne, numberTwo){
    return numberOne ^ numberTwo;
  },
  xorOblivious(numberOne, numberTwo){
    return "unknown";
  }
};

const personOne = new Person(binary.readAware,
                             binary.andAware,
                             binary.xorAware);
const personTwo = new Person(binary.readOblivious,
                             binary.andOblivious,
                             binary.xorOblivious);

[personOne, personTwo].forEach(person => {
  console.log(person.read(10));
  console.log(person.and(2, 3));
  console.log(person.xor(2, 3));
});
