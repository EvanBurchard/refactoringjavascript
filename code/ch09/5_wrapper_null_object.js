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
};

const test = require('tape');

test("Displaying a person", (assert) => {
  const personOne = new Person("tony");
  assert.equal(personOne.name.capitalize().tigerify().display(),
               'Tony, the tiger');
  assert.end();
});
test("Displaying an anonymous person", (assert) => {
  const personTwo = new AnonymousPerson("tony");
  assert.equal(WithoutNull(personTwo)
               .name.capitalize().tigerify().display(),
               '');
  assert.end();
});
