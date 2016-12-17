const {create, env} = require('sanctuary');
const S = create({checkTypes: false, env: env});

class Person {
  constructor(name){
    this.name = S.toMaybe(name);
  };
};
const capitalize = (string) => string[0].toUpperCase()
                               + string.substring(1);
const tigerify = (string) => `${string}, the tiger`;
const display = (string) => string.toString();
const capitalTiger = S.compose(capitalize, tigerify);

const test = require('tape');
test("Displaying a person", (assert) => {
  const personOne = new Person("tony");
  assert.equal(personOne.name.chain(capitalTiger), 'Tony, the tiger');
  assert.end();
});
test("Displaying an anonymous person", (assert) => {
  const personTwo = new Person(null);
  assert.equal(S.maybe('', capitalTiger, personTwo.name), '');
  assert.end();
});
