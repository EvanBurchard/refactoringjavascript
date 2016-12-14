var animals = [["fluffy", "rabbit"],
               ["bitey", "wolf"],
               ["hungry", "tiger"],
               ["jumpy", "monkey"],
               ["scaley", "snake"]];

animals.push(['sleepy', 'sloth']);
console.log(animals);

class Lab{
  constructor(animalList = []){
    this.animalList = animalList;
  }
  show(){
    console.log(this.animalList);
  }
  addAnimal(animal){
    this.animalList.push(animal);
    return this.animalList;
  }
};

class Animal{
  constructor(name, type){
    this.name = name;
    this.type = type;
  }
};
lab = new Lab;
lab.addAnimal(new Animal('fluffy', 'rabbit'));
lab.addAnimal(new Animal('fluffy', 'rabbit'));
lab.addAnimal(new Animal('fluffy', 'rabbit'));
lab.addAnimal(new Animal('fluffy', 'rabbit'));
lab.show();

