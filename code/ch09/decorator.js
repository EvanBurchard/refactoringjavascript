class Person {
  constructor(name){
    this.name = new NameString(name);
  }
};

class AnonymousPerson extends Person {
  constructor(){
    super();
    this.name = null;
  }
};

class NameString extends String{
  capitalize() {
    return new NameString(this[0].toUpperCase() + this.substring(1));
  };
  tigerify() {
    return new NameString(`${this}, the tiger`);
  };
  display(){
    return this.toString();
  };
};

class NullString{
  capitalize(){
    return this;
  };
  tigerify() {
    return this;
  };
  display() {
    return '';
  };
};

function WithoutNull(person){
  personWithoutNull = Object.create(person);
  if(personWithoutNull.name === null){
    personWithoutNull.name = new NullString;
  };
  return personWithoutNull;
}

const test = require('tape');

test("Displaying a person", (assert) => {
  const personOne = new Person("tony");
  assert.equal(personOne
               .name
               .capitalize()
               .tigerify()
               .display(),
               'Tony, the tiger');
  assert.end();
});
test("Displaying an anonymous person", (assert) => {
  const personTwo = new AnonymousPerson("tony");
  assert.equal(WithoutNull(personTwo).name.capitalize().tigerify().display(),
               '');
  assert.end();
});


//class Dog{
  //constructor(){
    //this.cost = 50;
  //}
  //displayPrice(){
    //return `The dog costs $${this.cost}.`;
  //}
//};

//function Cute(dog){
  //const cuteDog = Object.create(dog);
  //cuteDog.cost = dog.cost + 20;
  //return cuteDog;
//};

//function Trained(dog){
  //const trainedDog = Object.create(dog);
  //trainedDog.cost = dog.cost + 60;
  //return trainedDog;
//};


//const test = require('tape');
//test("base dog price", (assert) => {
  //assert.equal((new Dog).displayPrice(), 'The dog costs $50.');
  //assert.end();
//});

//test("cute dog price", (assert) => {
  //assert.equal((Cute(new Dog)).displayPrice(), 'The dog costs $70.');
  //assert.end();
//});

//test("trained/cute dog price", (assert) => {
  //assert.equal(Trained(Cute(new Dog)).displayPrice(),
               //'The dog costs $130.');
  //assert.end();
//});

// with null object
//class Person {
  //constructor(name){
    //this.name = new NameString(name);
  //}
//};

//class AnonymousPerson extends Person {
  //constructor(){
    //super();
    //this.name = null;
  //}
//};

//class NameString extends String{
  //capitalize() {
    //return new NameString(this[0].toUpperCase() + this.substring(1));
  //};
  //tigerify() {
    //return new NameString(`${this}, the tiger`);
  //};
  //display(){
    //return this.toString();
  //};
//}

//personOne = new Person("tony");
//console.log(personOne.name.capitalize().tigerify().display());

//personTwo = new AnonymousPerson("tony");
//console.log(personTwo.name.capitalize().tigerify().display());

//class NullString{
  //capitalize(){
    //return this; // same as new NullString in this case
  //};
  //tigerify() {
    //return this; // same as new NullString in this case
  //};
  //display() {
    //return '';
  //};
//};

// with decorator
//class Person {
  //constructor(name){
    //this.name = name;
  //}
  //capitalize(string) {
    //if(string === null){
      //return null;
    //}else{
      //return string[0].toUpperCase() + string.substring(1)
    //}
  //};

  //tigerify(string) {
    //if(string === null){
      //return null;
    //}else{
      //return `${string}, the tiger`;
    //}
  //};

  //display(string){
    //if(string === null){
      //return '';
    //}else{
      //return string;
    //}
  //};
//};
//class AnonymousPerson extends Person {
  //constructor(){
    //super();
    //this.name = null;
  //}
//};

//class NullName{

//}


//function withoutNulls(person){
  //let capitalize = person.capitalize;
  //person.capitalize = (string) => {
    //console.log('aaaaa');
    //if(capitalize === null){
      //return new NullName;
    //}else{
      //return capitalize(string);
    //}
  //}
  //let tigerify = person.tigerify;
  //person.tigerify = (string) => {
    //if(tigerify(string) === null){
      //return new NullName;
    //}else{
      //return tigerify(string);
    //}
  //}
  //let display = person.display;
  //person.display = (string) => {
    //if(tigerify(string) === null){
      //return new NullName;
    //}else{
      //return tigerify(string);
    //}
  //}
  //return person;
//};


//personOne = withoutNulls(new Person("tony"));
//personTwo = withoutNulls(new AnonymousPerson("tony"));

//console.log(capitalize(personOne.name));
//console.log(display(tigerify(capitalize(personOne.name))));
//console.log(display(tigerify(capitalize(personTwo.name))));
