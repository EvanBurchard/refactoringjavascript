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

const wish = require("wish");
if(agent.type === 'user'){
  wish(agent.sayName() ===
       "my name is name");
}else{
  wish(agent.sayTheName() ===
       "the project name is name")
}
