x = function(y){
  (function inner(){
    (function inner_(){
      console.log(this);
    })();
  })();
  console.log(y)
};
x(3);
