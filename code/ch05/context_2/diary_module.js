var key = 12345;
var secrets='how to win friends/influence people is for psychopaths';
function globalUnlock(keyAttempt){
  if(key===keyAttempt){
    console.log('unlocked');
    this.open = true;
  }else{
    console.log('no');
  }
};

module.exports = class Diary {
  constructor(){
    this.open = false;
  };

  tryLock(keyAttempt){
    globalUnlock.bind(this)(keyAttempt);
  };

  read(){
    if(this.open){
      console.log(secrets);
    }else{
      console.log('no')
    }
  }
};
