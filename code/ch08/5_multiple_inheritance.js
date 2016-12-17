// class Barky{
//   bark(){ console.log('woof woof')};
// };
// class Bitey{
//   bark(){ console.log('grrr')};
//   bite(){ console.log('real bite')};
// };
// class Animal{
//   beFluffy(){ console.log('fluffy')};
//   bite(){ console.log('normal bite')};
// };
//
// // this is not possible:
// class Dog extends (Animal, Barky, Bitey) { };
// dog = new Dog;
// dog.bite();
// dog.beFluffy(); // this won't work

// Multiple Inheritance

const barky = {
  bark(){ console.log('woof woof')}
};
const bitey = {
  bark(){ console.log('grrr')},
  bite(){ console.log('real bite')}
};
const animal = {
  beFluffy(){ console.log('fluffy')},
  bite(){ console.log('normal bite')}
};
const myPet = Object.assign(Object.create(animal), barky, bitey);
myPet.beFluffy();
myPet.bite();
