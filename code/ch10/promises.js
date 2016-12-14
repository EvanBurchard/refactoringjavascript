function addOne(addend){
  return Promise.resolve(addend + 1);
}

function four(){
  return new Promise((resolve, _reject) => {
    setTimeout(() => resolve(4), 500);
  })
}


const test = require('tape');
const testdouble = require('testdouble');

test('our addOne function', (assert) => {
  addOne(3).then((result) => {
    assert.equal(result, 4);
    assert.end();
  });
});

test('our four function', (assert) => {
  four().then((result) => {
    assert.equal(result, 4);
    assert.end();
  });
});

test('our end-to-end test', (assert) => {
  testdouble.replace(console, 'log')
  four()
  .then(addOne)
  .then(console.log)
  .then(() => {
    testdouble.verify(console.log(5));
    assert.pass();
    testdouble.reset();
    assert.end();
  }).catch((e) => {
    testdouble.reset();
    console.log(e);
  })
});



//four()
//.then(addOne)
//.then(addOne)
//.then(addOne)
//.then(console.log);

//.then(result => addOne(result))
//.then(result => console.log(result));









//three.then((x) => addOne(x, console.log));



//function addOneSync(addend){
  //return addend + 1;
//}

//test('our addOneSync function', (assert) => {
  //assert.equal(addOneSync(3), 4);
  //assert.end();
//});

//function three(){
  //setTimeout(function(){
    //return 3
    //},
    //500);
//}
//function two(callback){
  //callback(2);
//}

//two(addOne);

//addOne(three);


//one((addend) => console.log(4 + addend));

//x = [1, 2, 3, 4, 5];

//function myMap(array, callback){
  //const newArray = [];
  //array.forEach(function(element){
    //newArray.push(callback(element));
  //})
  //return newArray;
//}

//function myMap(array, callback){
  //return array.reduce(function(acc, element){
    //acc.push(callback(element));
    //return acc;
  //}, [])
//}

//y = myMap(x, function(element){ return element * 2})
//console.log(y);
