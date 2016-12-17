var diary = (function(){
  var key = 12345;
  var secrets = 'programming is just syntactic sugar for labor';

  function privateUnlock(keyAttempt, that){
    if(key===keyAttempt){
      console.log('unlocked');
      that.open = true;
    }else{
      console.log('no');
    }
  };

  function privateTryLock(keyAttempt){
    privateUnlock(keyAttempt, this);
  };

  function privateRead(){
    if(this.open){
      console.log(secrets);
    }else{
      console.log('no');
    }
  }

  return {
    open: false,
    read: privateRead,
    tryLock: privateTryLock
  }

})();
diary.tryLock(12345);
diary.read();
