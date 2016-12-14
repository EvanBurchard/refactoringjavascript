// not just multiples
checkStraightFlush = function(){
  return false;
};
checkFullHouse = function(){
  return false;
};
checkFlush = function(){
  return false;
};
checkStraight = function(){
  return false;
};
checkStraightFlush = function(){
  return false;
};
checkTwoPair = function(){
  return false;
};

// just multiples
checkFourOfKind = function(){
  return false;
};
checkThreeOfKind = function(){
  return false;
};
checkPair = function(){
  return false;
};

// get just the values
var getValues = function(hand){
  console.log(hand);
  var values = [];
  for(var i=0;i<hand.length;i++){
    console.log(hand[i]);
    values.push(hand[i][0]);
  }
  console.log(values);
  return values;
};

var countDuplicates = function(values){
  console.log('values are: ' + values);
  var numberOfDuplicates = 0;
  var duplicatesOfThisCard;
  for(var i=0;i<values.length;i++){
    duplicatesOfThisCard = 0;
    console.log(numberOfDuplicates);
    console.log(duplicatesOfThisCard);
    if(values[i] == values[0]){
      duplicatesOfThisCard += 1;
    }
    if(values[i] == values[1]){
      duplicatesOfThisCard += 1;
    }
    if(values[i] == values[2]){
      duplicatesOfThisCard += 1;
    }
    if(values[i] == values[3]){
      duplicatesOfThisCard += 1;
    }
    if(values[i] == values[4]){
      duplicatesOfThisCard += 1;
    }
    if(duplicatesOfThisCard > numberOfDuplicates){
      numberOfDuplicates = duplicatesOfThisCard;
    }
  }
  return numberOfDuplicates;
};

var checkHand = function(hand){
  var values = getValues(hand);
  var number = countDuplicates(values);
  console.log(number);

  if (checkStraightFlush(hand)){
    return 'straight flush';
  }
  else if (number==4){
    return 'four of a kind';
  }
  else if (checkFullHouse(hand)){
    return 'full house';
  }
  else if (checkFlush(hand)){
    return 'flush';
  }
  else if (checkStraight(hand)){
    return 'straight';
  }
  else if (number==3){
    return 'three of a kind';
  }
  else if (checkTwoPair(hand)){
    return 'two pair';
  }
  else if (number==2){
    return 'pair';
  }
  else {
    return 'high card';
  }
};
// debugger;
var assert = require('assert');
assert(checkHand(['2-H', '3-C', '4-D', '5-H', '2-C'])==='pair');
assert(checkHand(['3-H', '3-C', '3-D',
                  '5-H', '2-H'])==='three of a kind');
