const test = require('tape');
const testdouble = require('testdouble');

function four(cb){
  cb(4);
}

four(console.log);
((x) => console.log(x))(4);

(() => console.log)(4);


//test('our addOne function', (assert) => {
  //addOne(3).then((result) => {
    //assert.equal(result, 4);
    //assert.end();
  //});
//});
