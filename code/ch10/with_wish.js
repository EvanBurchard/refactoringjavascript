class Dog{
  constructor(){
    this.cost = 50;
  }
  displayPrice(){
    return `The dog costs $${this.cost}.`;
  }
};

const test = require('tape');
const wish = require('wish');
test("base dog price", (assert) => {
  //wish((new Dog).displayPrice() === 'sts $50.');
  //wish((new Dog).displayPrice(), true);
  assert.end();
});
