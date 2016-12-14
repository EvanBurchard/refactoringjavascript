function addOne(addend, callback){
  callback(addend + 1);
}

function three(callback){
  callback(3);
}

three(function(x){
  addOne(x, console.log)
});

three(function(x){
  addOne(x, function(y){
     addOne(y, console.log(y));
  })
});

//const test = require('tape');
//const testdouble = require('testdouble');

//test('our addOne function', (assert) => {
  //addOne(3, (result) => {
    //assert.equal(result, 4);
    //assert.end();
  //});
//});

//test('our three function', (assert) => {
  //three((result, callback) => {
      //assert.equal(result, 3);
    //assert.equal(callback, console.log);
    //assert.end();
  //});
//});
//test('our end-to-end test', (assert) => {
  //testdouble.replace(console, 'log')
  //three((result, callback) => {
    //addOne(result, callback)
    //testdouble.verify(console.log(4));
    //testdouble.reset();
    //assert.end();
  //});
//});


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
