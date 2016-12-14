function x(){
  return this;
}
//console.log(x());

var anObject = {
  number: 5,
  getNumber: function(){ return this.number }
}

console.log(anObject.getNumber());

var anotherObject = {
  getNumber: function(){ return this.number }
}
console.log(anotherObject.getNumber.call(anObject));
console.log(anotherObject.getNumber.apply(anObject));
var callForTheFirstObject = anotherObject.getNumber.bind(anObject)
console.log(callForTheFirstObject());
