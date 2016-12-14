const {create, env} = require('sanctuary');
const S = create({checkTypes: false, env: env});
const wish = require('wish');
const test = require('tape-catch');
const assert = require('assert');

class Person {
  constructor(name){
    this.name = S.toMaybe(name);
  }
};

const capitalize = (string) => string[0].toUpperCase()
                               + string.substring(1);
const tigerify = (string) => `${string}, the tiger`;
const capitalTiger = S.compose(capitalize, tigerify);

//const personOne = new Person("tony");
//assert(personOne.name.chain(capitalTiger) === 'Tony, the tige');
//const personTwo = new Person(null);
//wish(personTwo.name.reduce(capitalTiger, '') === '')

test("Displaying a person", (assert) => {
  const personOne = new Person("tony");
  assert.equal(personOne.name.chain(capitalTiger), 'Tony, the tiger');
  wish(personOne.name.chain(capitalTiger) !== 'Tony, the tiger');
  assert.end();
});
test("Displaying an anonymous person", (assert) => {
  const personTwo = new Person(null);
  assert.equal(personTwo.name.reduce(capitalTiger, ''), '');
  assert.end();
});

//const personThree = new Person(null);
//wish(personThree.name.reduce(capitalTiger, '') == '')
//assert(personThree.name.reduce(capitalTiger, '') == '1')

//const test = require('tape');
//test("Displaying a person", (assert) => {
  //const personOne = new Person("tony");
  //assert.equal(personOne.name.chain(capitalTiger), 'Tony, the tiger');
  //assert.end();
//});
//test("Displaying an anonymous person", (assert) => {
  //const personTwo = new Person(null);
  //assert.equal(S.maybe('', capitalTiger, personTwo.name), '');
  //assert.end();
//});
//const test = require('tape');
//test("Displaying a person", (assert) => {
  //const personOne = new Person("tony");
  //assert.equal(personOne.name.chain(capitalTiger), 'Tony, the tiger');
  //assert.end();
//});
//test("Displaying an anonymous person", (assert) => {
  //const personTwo = new Person(null);
  //assert.equal(S.maybe('', capitalTiger, personTwo.name), '');
  //assert.end();
//});
//test("Displaying a person", (assert) => {
  //const personOne = new Person("tony");
  //assert.equal(S.fromMaybe('', personOne.name.map(capitalize).map(tigerify)),
               //'Tony, the tiger');
  //assert.end();
//});
//test("Displaying an anonymous person", (assert) => {
  //const personTwo = new Person(null);
  //assert.equal(S.fromMaybe('', personTwo.name.map(capitalize).map(tigerify)),
               //'');
  //assert.end();
//});

//test("Displaying a person", (assert) => {
  //const personOne = new Person("tony");
  //assert.equal(personOne.name.map(capitalize).map(tigerify), 'Tony, the tiger');
  //assert.end();
//});
//test("Displaying an anonymous person", (assert) => {
  //const personTwo = new AnonymousPerson("tony");
  //assert.equal(personTwo.name.map(capitalize).map(tigerify), '');
  //assert.end();
//});

//test("Displaying a person", (assert) => {
  //const personOne = new Person("tony");
  //assert.equal(personOne.name.capitalize().tigerify().display(),
               //'Tony, the tiger');
  //assert.end();
//});
//test("Displaying an anonymous person", (assert) => {
  //const personTwo = new AnonymousPerson("tony");
  //assert.equal(WithoutNull(personTwo).name.capitalize().tigerify().display(), '');
  //assert.end();
//});



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
//function WithoutNull(person){
  //personWithoutNull = Object.create(person);
  //if(personWithoutNull.name === null){
    //personWithoutNull.name = new NullString;
  //};
  //return personWithoutNull;
//};
//const test = require('tape');
//test("Displaying a person", (assert) => {
  //const personOne = new Person("tony");
  //assert.equal(personOne.name.capitalize().tigerify().display(),
               //'Tony, the tiger');
  //assert.end();
//});
//test("Displaying an anonymous person", (assert) => {
  //const personTwo = new AnonymousPerson("tony");
  //assert.equal(WithoutNull(personTwo).name.capitalize().tigerify().display(), '');
  //assert.end();
//});
