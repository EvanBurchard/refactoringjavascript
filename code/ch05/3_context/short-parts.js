(function(){
  console.log('hi');
})();

(function(){
  (function(){
    console.log('hi');
  })();
})();

function hi(){
  console.log(hello);
};
hi();

// ReferenceError: hello is not defined

var hello = "hi";
hi();
// logs "hi"
