function coinToss(){
  return Math.random() > .5;
};

class User{
  constructor(name){
    this.name = name;
  };
  sayName(){
    return `my name is ${this.name}`;
  };
};

class Project{
  constructor(name){
    this.name = name;
  };
  sayTheName(){
    return `the project name is ${this.name}`;
  };
};

let agent;
if(coinToss()){
  agent = new User('name');
}else{
  agent = new Project('name');
}

const wish = require('wish');
if(agent instanceof User){
  wish(agent.sayName() ===  "my name is name");
}else{
  wish(agent.sayTheName() === "the project name is name");
}

wish(new User('name', 'user').sayName() === "my name is name");
wish(new Project('name', 'project').sayTheName()
 === "the project name is name");
