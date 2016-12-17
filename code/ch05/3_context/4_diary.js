class Diary {
  constructor(){
    this.open = false;
    this._key = 12345;
    this._secrets = 'the average human lives around 1000 months';
  };

  _unlock(keyAttempt){
    if(this._key===keyAttempt){
      console.log('unlocked');
      this.open = true;
    }else{
      console.log('no');
    }
  };
  tryLock(keyAttempt){
    this._unlock(keyAttempt);
  };

  read(){
    if(this.open){
      console.log(this._secrets);
    }else{
      console.log('no')
    }
  }
}
d = new Diary();
d.tryLock(12345);
d.read();
