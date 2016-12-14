//class Barky{
  //bark(){ console.log('woof woof')}
//}
//class Bitey{
  //bark(){ console.log('grrr')}
  //bite(){ console.log('real bite')}
//}
//class Animal{
  //fluffy(){ console.log('fluffy')}
  //bite(){ console.log('normal bite')}
//}
//class Dog extends (Animal, Barky, Bitey) { }
//d = new Dog;
//d.bite();

//function test() {
  //let a = { b: {c:4} , d: { e: {f:1}} }
  //let g = Object.assign(Object.create(a))
  //console.log(g)
  //let h = JSON.parse(JSON.stringify(a));
  //console.log(g.d) // { e: { f: 1 } }
  //g.d.e = 32
  //console.log('g.d.e set to 32.') // g.d.e set to 32.
  //console.log(g) // { b: { c: 4 }, d: { e: 32 } }
  //console.log(a) // { b: { c: 4 }, d: { e: 32 } }
  //console.log(h) // { b: { c: 4 }, d: { e: { f: 1 } } }
  //h.d.e = 54
  //console.log('h.d.e set to 54.') // h.d.e set to 54.
  //console.log(g) // { b: { c: 4 }, d: { e: 32 } }
  //console.log(a) // { b: { c: 4 }, d: { e: 32 } }
  //console.log(h) // { b: { c: 4 }, d: { e: 54 } }
//}
//test();

//class Animal{}
//class Organism{}
//class Pet extends Animal extends Organism{ }


barky = {
  bark(){ console.log('woof woof')}
}
bitey = {
  bark(){ console.log('grrr')},
  bite(){ console.log('real bite')}
}
animal = {
  beFluffy(){ console.log('fluffy')},
  bite(){ console.log('normal bite')}
}
const myPet = Object.assign(Object.create(animal), barky, bitey);
//const myPet = Object.assign({}, animal, barky, bitey);
animal.beFluffy = function(){console.log('not so fluffy')};
//console.log(myPet);
//console.log(Object.getPrototypeOf(myPet));
//myPet.bark();
//bitey.bite = function(){
  //console.log("don't bite");
//}
//myPet.bite();
//animal.beFluffy = function(){ console.log('not fluffy')}
//myPet.beFluffy();

//animal.hasBankAccount = false;
//console.log(myPet.hasBaafjsdankAccount); // prints false

//myPet.bark();
console.log(Object.keys(myPet));
