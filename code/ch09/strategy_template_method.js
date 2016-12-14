//class Person{
//}

//class BinaryKnower extends Person{
  //whatIs(num){
    //return eval('0b' + num)
  //}
//}

//class BinaryOblivious extends Person{
  //whatIs(num){
    //return num;
  //}
//}

//const personOne = new BinaryKnower();
//const personTwo = new BinaryOblivious();


class Person{
  constructor(whatIs){
    this.whatIs = whatIs;
  }
  log(number){
    console.log(this.whatIs(number));
  }
}

const binary = {
  aware(number){
    return Number('0b' + number);
  },
  oblivious(number){
    return number;
  }
}

const personOne = new Person(binary.aware);
const personTwo = new Person(binary.oblivious);

[personOne, personTwo].forEach(person => {
  person.log(10);
});

//class Person{
  //log(number){
    //console.log(this.whatIs(number));
  //}
//};

//const personOne = new Person( );
//personOne.whatIs = (number) => Number('0b' + number);
//const personTwo = new Person(number => number);
//personTwo.whatIs = (number) => number;

//[personOne, personTwo].forEach(person => {
  //person.log(10);
//});

