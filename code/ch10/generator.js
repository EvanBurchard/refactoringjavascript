function addOne(addend){
  return Promise.resolve(addend + 1);
}

function five(){
  return new Promise((resolve, _reject) => {
    setTimeout(() => resolve(5), 500);
  })
}


const test = require('tape');
const testdouble = require('testdouble');

//five()
//.then(addOne)
//.then(addOne)
//.then(console.log)

function* addOne(addend){
  let sum = addend || 0
  while(true){
    yield(sum = sum + 1)
  }
}
g = addOne(5);
g.next()
console.log(g.value);
//generator.next()
//console.log(generator.next())
//console.log(generator.next())
//console.log(generator.next())
//console.log(generator.next())
//console.log(generator.next())
//console.log(generator.next())
