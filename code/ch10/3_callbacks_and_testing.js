// function addOne(addend){
//   console.log(addend + 1);
// };
// addOne(2);
//
// function two(callback){
//   callback(2);
// };
// two((addend) => console.log(addend + 1));
//
// two(addOne);
//
// function three(callback){
//   setTimeout(function(){
//     callback(3);
//     },
//   500);
// };
// three(addOne);

// function three(){
//   setTimeout(function(){
//     return 3
//     },
//     500);
// }
// function addOne(addend){
//   console.log(addend + 1);
// };
// addOne(three());

function addOne(addend, callback){
  callback(addend + 1);
};
function three(callback){
  setTimeout(function(){
    callback(3, console.log);
    },
    500);
};
function addOneSync(addend){
  return addend + 1;
};

const test = require('tape');

test('our addOne function', (assert) => {
  addOne(3, (result) => {
    assert.equal(result, 4);
    assert.end();
  });
});

test('our three function', (assert) => {
  three((result, callback) => {
    assert.equal(result, 3);
    assert.equal(callback, console.log);
  });
  assert.end();
});


test('our addOneSync function', (assert) => {
  assert.equal(addOneSync(3), 4);
  assert.end();
});

const testDouble = require('testdouble');
test('our end-to-end test', (assert) => {
  testDouble.replace(console, 'log')
  three((result, callback) => {
    addOne(result, callback)
    testDouble.verify(console.log(4));
    testDouble.reset();
    assert.end();
  });
});
