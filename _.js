//const http = require('http');
//const getBody = {
  //bodyArray: [],
  //saveBody: function(chunk){
    //this.bodyArray.push(chunk);
  //},
  //getResult: function(result){
    //result.on('data', this.saveBody.bind(this));
    //result.on('end', this.printBody.bind(this));
  //},
  //printBody: function(){
    //console.log(this.bodyArray.join(''))
    //this.allDone();
  //},
  //allDone: function(){}

//};
//const test = require('tape');
//test('our async routine', function (assert) {
  //getBody.allDone = function(){
    //assert.equal(getBody.bodyArray.length, 2);
    //assert.end();
  //}
  //http.get('http://refactoringjs.com', getBody.getResult.bind(getBody));
//});

//test('our async routine two', function (assert) {
  //getBody.bodyArray = [];
  //getBody.allDone = function(){ };
  //http.get('http://refactoringjs.com', getBody.getResult.bind(getBody));
  //assert.equal(getBody.bodyArray.length, 0);
  //assert.end();
//});


//addOne(console.log, four());


//function three(callback, innerCallback){
  //setTimeout(() => {
    //callback(3, innerCallback);
    //},
    //500);
//}
//three(addOne(console.log));
 //three(addOne);

 four(){j
function addOne(addend, callback){
  callback(addend + 1);
};

function three(callback, innerCallback){
  callback(3, innerCallback);
};
three(addOne, console.log);


