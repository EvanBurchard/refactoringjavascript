class Agent{
  constructor(name, type){
    this.name = 'name';
    if(Math.random() > .5){
      this.type = 'user';
    }else{
      this.type = 'project';
    }
  };
  static makeProjectOrUser(agent){
    if(agent.type === 'user'){
      return Object.assign(Object.create(new User), agent);
    }else{
      return Object.assign(Object.create(new Project), agent);
    }
  };
};

class User extends Agent{
  sayName(){
    return `my name is ${this.name}`;
  }
};

class Project extends Agent{
  sayTheName(){
    return `the project name is ${this.name}`;
  }
};

const agent = new Agent('name');
const projectOrUser = Agent.makeProjectOrUser(agent);
if(projectOrUser.type === 'user'){
  console.log(projectOrUser.sayName());
}else{
  console.log(projectOrUser.sayTheName());
}
const wish = require('wish');
if(projectOrUser.type === 'user'){
  wish(projectOrUser.sayName() ===  "my name is name");
}else{
  wish(projectOrUser.sayTheName() === "the project name is name");
}
