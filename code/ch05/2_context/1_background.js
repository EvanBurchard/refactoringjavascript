console.log('blah');
this.console.log('blah');
window.console.log('blah'); // in a browser
global.console.log('blah'); // in a node shell

var x = function(){
  console.log(this);
};
x(); // here, we'll see our global object, even in node files

var x = function(){
  'use strict'
  console.log(this);
}
x();
'use strict'
var x = function(){
  console.log(this);
}
x();
