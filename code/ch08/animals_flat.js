class Lab{
  constructor(animalList = []){
    this.animalList = animalList;
  }
  show(){
    return this.animalList;
  }
  addAnimal(animal){
    return this.animalList.push(animal);
  }
};

class Animal{
  constructor(name, type){
    this.name = name;
    this.type = type;
  }
  clone(lab){
    lab.addAnimal(new Animal(`${this.name} the second`, this.type))
  }
  breed(animal, lab){
    if(this.type=== animal.type){
      lab.addAnimal(new Animal(`${this.name}-${animal.name}`, this.type))
    }else{
      console.log("didn't work")
    }
  }
};
lab = new Lab;
lab.addAnimal(new Animal('bitey', 'wolf'));
lab.addAnimal(new Animal('hungry', 'tiger'));
lab.addAnimal(new Animal('jumpy', 'monkey'));
lab.addAnimal(new Animal('scaley', 'snake'));
lab.addAnimal(new Animal('lab assistant', 'human'));
const rabbitOne = new Animal('fluffy', 'rabbit')
lab.addAnimal(rabbitOne);
const rabbitTwo = new Animal('floofy', 'rabbit')
lab.addAnimal(rabbitTwo);
rabbitOne.breed(rabbitTwo, lab);
rabbitOne.clone(lab);
const assert = require('assert');
assert.equal(lab.show().length, 9);
