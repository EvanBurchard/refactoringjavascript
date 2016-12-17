var checkHand = function(hand){
  if (checkStraightFlush(hand)){
    return 'straight flush';
  }
  else if (checkFourOfKind(hand)){
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
  else if (checkThreeOfKind(hand)){
    return 'three of a kind';
  }
  else if (checkTwoPair(hand)){
    return 'two pair';
  }
  else if (checkPair(hand)){
    return 'pair';
  }
  else {
    return 'high card';
  }
};

console.log(checkHand(['2-H', '3-C', '4-D', '5-H', '2-C']));
