const {create, env} = require('sanctuary');
const S = create({checkTypes: false, env: env});
const R = require('ramda');

class Person {
  constructor(name){
    this.name = S.maybeToEither('', S.toMaybe(name));
  }
};

const capitalize = (string) => string[0].toUpperCase()
                               + string.substring(1);
const tigerify = (string) => `${string}, the tiger`;

const capitalTiger = S.compose(capitalize, tigerify);

const test = require('tape');
test("Displaying a person", (assert) => {
  const personOne = new Person("tony");
  assert.equal(personOne.name.map(capitalTiger).value,
               'Tony, the tiger');
  assert.end();
});
test("Displaying an anonymous person", (assert) => {
  const personTwo = new Person(null);
  assert.equal(personTwo.name.map(capitalTiger).value, '');
  assert.end();
});
