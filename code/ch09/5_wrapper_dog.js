class Dog{
  constructor(){
    this.cost = 50;
  }
  displayPrice(){
    return `The dog costs $${this.cost}.`;
  }
};

function Cute(dog){
  const cuteDog = Object.create(dog);
  cuteDog.cost = dog.cost + 20;
  return cuteDog;
};

function Trained(dog){
  const trainedDog = Object.create(dog);
  trainedDog.cost = dog.cost + 60;
  return trainedDog;
};

const test = require('tape');

test("trained/cute dog price", (assert) => {
  assert.equal(Trained(Cute(new Dog)).displayPrice(),
               'The dog costs $130.');
  assert.end();
});

test("cute dog price", (assert) => {
  assert.equal((Cute(new Dog)).displayPrice(), 'The dog costs $70.');
  assert.end();
});

test("base dog price", (assert) => {
  assert.equal((new Dog).displayPrice(), 'The dog costs $50.');
  assert.end();
});
