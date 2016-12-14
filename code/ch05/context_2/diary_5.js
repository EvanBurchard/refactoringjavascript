var key = 12345;
var secrets = 'rectangles are popular with people, but not nature';
function globalUnlock(keyAttempt){
  if(key===keyAttempt){
    console.log('unlocked');
    this.open = true;
  }else{
    console.log('no');
  }
};

class Diary {
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
      console.log('no');
    }
  }
};
d = new Diary();
d.tryLock(12345);
d.read();
