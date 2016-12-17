
var anObject = {
  number: 5,
  getNumber: function(){ return this.number }
}

console.log(anObject.getNumber());


var anObject =
Object.create(null, {"number": {value: 5},
"getNumber": {value: function(){return this.number}}})
console.log(anObject.getNumber());


class AnObject{
  constructor(){
    this.number = 5;
    this.getNumber = function(){return this.number}
  }
}
anObject = new AnObject;
console.log(anObject.getNumber());

var anObject = {
  number: 5
}
var anotherObject = {
  getNumber: function(){ return this.number }
}
console.log(anotherObject.getNumber.call(anObject));
console.log(anotherObject.getNumber.apply(anObject));
var callForTheFirstObject = anotherObject.getNumber.bind(anObject);
console.log(callForTheFirstObject());

anotherObject.getNumber.call(anObject);

anotherObject.getNumber();

var anObject = {
  number: 5
}
var anotherObject = {
  getIt: function(){ return this.number },
  setIt: function(value){ this.number = value; return this; }
}
console.log(anotherObject.setIt.call(anObject, 3));
