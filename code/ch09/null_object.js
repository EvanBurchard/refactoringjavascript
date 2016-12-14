 //with null object
//class Person {
  //constructor(name){
    //this.name = new NameString(name);
  //}
//};

//class AnonymousPerson extends Person {
  //constructor(){
    //super();
    //this.name = new NullString;
  //}
//};

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
//personTwo = new AnonymousPerson("tony");
//console.log(personOne.name.capitalize().tigerify().display());
//console.log(personTwo.name.capitalize().tigerify().display());

//with wrapper
class Person {
  constructor(name){
    this.name = new NameString(name);
  }
}

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
function withoutNull(person){
  var blackHole = {
    //apply: function(target, thisArg, argumentsList){
      //return new Proxy({}, blackHole);
    //},
    get: function(target, propertyName){
      console.log(target);
      console.log(propertyName.__proto__);
      return propertyName in target ? target[propertyName] : new Proxy({}, blackHole);
    }
  };
  return new Proxy({}, blackHole);
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
  assert.equal(personOne.name.capitalize().tigerify().display(),
               'Tony, the tiger');
  assert.end();
});
test("Displaying an anonymous person", (assert) => {
  const personTwo = new AnonymousPerson("tony");
  assert.equal(withoutNull(personTwo)
               .name.capitalize().tigerify().display(),
               '');
  assert.end();
});



//
//
//
//
//class Person {
  //constructor(name){
    //this.name = name;
  //}
//};
//class AnonymousPerson extends Person {
  //constructor(){
    //super();
    //this.name = null;
  //}
//};
//function capitalize(string) {
  //if(string === null){
    //return null;
  //}else{
    //return string[0].toUpperCase() + string.substring(1)
  //}
//};
//function tigerify(string) {
  //if(string === null){
    //return null;
  //}else{
    //return `${string}, the tiger`;
  //}
//};
//function display(string){
  //if(string === null){
    //return '';
  //}else{
    //return string;
  //}
//};
//personOne = new Person("tony");
//personTwo = new AnonymousPerson("tony");
//console.log(display(tigerify(capitalize(personOne.name))));
//console.log(display(tigerify(capitalize(personTwo.name))));

//class Person {
  //constructor(name){
    //this.name = new NameString(name);
  //}
//};
//class AnonymousPerson extends Person {
  //constructor(){
    //super();
    //this.name = new NullString;
  //}
//};
//class NullString{
  //capitalize(){
    //return this;
  //};
  //tigerify() {
    //return this;
  //};
  //display() {
    //return '';
  //};
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
//personTwo = new AnonymousPerson("tony");
//console.log(personOne.name.capitalize().tigerify().display());
//console.log(personTwo.name.capitalize().tigerify().display());
