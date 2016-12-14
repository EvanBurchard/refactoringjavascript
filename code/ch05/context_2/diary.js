var diary = (function(){
  var key = 12345;
  var secrets = 'rosebud';

  function privateUnlock(keyAttempt){
    if(key===keyAttempt){
      console.log('unlocked');
      diary.open = true;
    }else{
      console.log('no');
    }
  };

  function privateTryLock(keyAttempt){
    privateUnlock(keyAttempt);
  };

  function privateRead(){
    if(this.open){
      console.log(secrets);
    }else{
      console.log('no');
    }
  };

  return {
    open: false,
    read: privateRead,
    tryLock: privateTryLock
  }

})();

// run with
diary.tryLock(12345);
diary.read();
