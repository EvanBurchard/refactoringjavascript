class Person {
  constructor(name){
    this.name = name;
  }
};
class AnonymousPerson extends Person {
  constructor(){
    super();
    this.name = null;
  }
};

function capitalize(string) {
  if(string === null){
    return null;
  }else{
    return string[0].toUpperCase() + string.substring(1);
  }
};

function tigerify(string) {
  if(string === null){
    return null;
  }else{
    return `${string}, the tiger`;
  }
};

function display(string){
  if(string === null){
    return '';
  }else{
    return string;
  }
};

personOne = new Person("tony");
personTwo = new AnonymousPerson("tony");
console.log(display(tigerify(capitalize(personOne.name))));
console.log(display(tigerify(capitalize(personTwo.name))));
