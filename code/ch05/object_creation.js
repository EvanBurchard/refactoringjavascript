//var anObject = Object.create(null, {"number": {value: 5},
                             //"getNumber": {value: function(){return this.number}}})
//console.log(anObject.getNumber());

//class AnObject{
  //constructor(){
    //this.number = 5;
    //this.getNumber = function(){return this.number}
  //}
//}
//anObject = new AnObject;
//console.log(anObject.getNumber());

//var anObject = {
  //number: 5
//}
//var anotherObject = {
  //getIt: function(){ return this.number },
  //setIt: function(value){ this.number = value; return this; }
//}
//console.log(anotherObject.getIt.call(anObject));
//console.log(anotherObject.getIt.apply(anObject));
//var callForTheFirstObject = anotherObject.getIt.bind(anObject);
//console.log(callForTheFirstObject());

//console.log(anotherObject.setIt.call(anObject, 3));

//(function(){
  //(function(){
    //console.log(this);
  //})();
//})();


//var diary = (function(){
  //var key = 12345;
  //var secrets = 'programming is just syntactic sugar for labor';

  //function unlock(keyAttempt){
    //if(key===keyAttempt){
      //console.log('unlocked')
      //this.open = true;
    //}else{
      //console.log('no')
    //}
  //};

  //function publicTryLock(keyAttempt){
    //boundUnlock = unlock.bind(this);
    //boundUnlock(keyAttempt);
  //};
  //function publicRead(){
    //if(this.open){
      //console.log(secrets);
    //}else{
      //console.log('no')
    //}
  //}

  //return {
    //open: false,
    //read: publicRead,
    //tryLock: publicTryLock
  //}

//})();


//class Diary {
  //constructor(){
    //this.open = false;
    //this._key = 12345;
    //this._secrets = 'programming is just syntactic sugar for labor';
  //};

  //_unlock(keyAttempt){
    //if(this._key===keyAttempt){
      //console.log('unlocked')
      //this.open = true;
    //}else{
      //console.log('no')
    //}
  //};
  //tryLock(keyAttempt){
    //this._unlock(keyAttempt);
  //};

  //read(){
    //if(this.open){
      //console.log(_secrets);
    //}else{
      //console.log('no')
    //}
  //}
//}

var key = 12345;
var secrets = 'programming is just syntactic sugar for labor';
function unlock(keyAttempt){
  if(key===keyAttempt){
    console.log('unlocked')
    this.open = true;
  }else{
    console.log('no')
  }
};

module.exports = class Diary {
  constructor(){
    this.open = false;
  };

  tryLock(keyAttempt){
    var boundUnlock = unlock.bind(this);
    boundUnlock(keyAttempt);
  };

  read(){
    if(this.open){
      console.log(secrets);
    }else{
      console.log('no')
    }
  }

}

