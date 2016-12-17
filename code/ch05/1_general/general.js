var calculator = {
  add: function(a, b){
    return a + b;
  },
  addTwo: function(a){
    return this.add(a, this.two);
  },
  two: 2
};

var name = "Max";
var punctuation = "!";
function sayHi(){
  return "Hi " + name + punctuation;
};

function trueForTruthyThings(sometimesTruthyThing){
  return !!(sometimesTruthyThing);
};

function add(a, b){
  return a + b;
};

function doesSomething(options){
  if(options.a){
    var a = options.a;
  }
  if(options.b){
    var b = options.b;
  }
//  ...
}

search('something', 20);
//vs.
search({query: 'something', pageSize: 20});

function search({query: query, pageSize: pageSize}){
  console.log(query, pageSize);
};
search({query: 'something', pageSize: 20});

function add(a, b){
  a + b;
};

function moreThanThree(number){
  if(number > 3){
    return true;
  } else {
    return "No. The number was only " + number + ".";
  }
};

function printValue(value){
  console.log(value);
};
