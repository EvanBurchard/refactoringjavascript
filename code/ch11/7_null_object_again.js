const {create, env} = require('sanctuary');
const S = create({checkTypes: false, env: env});

class Person {
  constructor(name){
    this.name = S.Just(name);
  }
};
class AnonymousPerson extends Person {
  constructor(){
    super();
    this.name = S.Nothing();
  }
};
const capitalize = (string) => string[0].toUpperCase()
                               + string.substring(1);
const tigerify = (string) => `${string}, the tiger`;
const display = (string) => string.toString();

const test = require('tape');
test("Displaying a person", (assert) => {
  const personOne = new Person("tony");
  assert.equal(S.fromMaybe('',
                 personOne.name.map(capitalize).map(tigerify)),
               'Tony, the tiger');
  assert.end();
});
test("Displaying an anonymous person", (assert) => {
  const personTwo = new AnonymousPerson(null);
  assert.equal(S.fromMaybe('',
                 personTwo.name.map(capitalize).map(tigerify)),
               '');
  assert.end();
});
