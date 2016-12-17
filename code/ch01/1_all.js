function byTwo(number){
  return number * 2;
}

function byTwo(number){
  return number << 1;
}

assert = require('assert');
assert(2 + 2 === 4);

_ = require('underscore');
assert(_.first([3, 2] === 3));

function doesThings(args, callback){
  doesOtherThings(args);
  doesOtherOtherThings(args, callback);
  return 5;
};
