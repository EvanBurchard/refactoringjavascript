function coinToss(){
  return Math.random() > .5;
}

class User{
  constructor(name, type){
    this.name = name;
    this.type = type;
  }
  sayName(){
    return `my name is ${this.name}`;
  }
}

class Project{
  constructor(name, type){
    this.name = name;
    this.type = type;
  }
  sayTheName(){
    return `the project name is ${this.name}`;
  }
}

let agent;
if(coinToss()){
  agent = new User('name', 'user');
}else{
  agent = new Project('name', 'project');
}

const assert = require('assert');
if(agent.type === 'user'){
  assert.equal(agent.sayName(), 'my name is name');
}else{
  assert.equal(agent.sayTheName(), 'the project name is name');
}

