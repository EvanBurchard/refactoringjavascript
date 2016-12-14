//const x = 1;
//const y = x + 1;
//console.log(x);


//function func(x){
  //if((x = x + 7) >= 9){
    //return x;
  //} else {
    //return 8;
  //}
//};

//console.log(func(2));
//console.log(func(0));


//////////////////////////////////////////////////////

//function func(x){
  //if(x >= 2){
    //x = x + 7;
  //}
  //return x;
//};


//function func(x){
  //if(x >= 2){
    //return x + 7;
  //} else {
    //return x;
  //}
//};

//function func(x){
  //return x >= 2 ? x + 7 : x;
//};

//function func(x){
  //if((x = x + 7) >= 9){
    //return x;
  //} else {
    //return x;
  //}
//};

//function func(x){
  //if((x + 7) >= 9){
    //return x + 7;
  //} else {
    //return x + 7;
  //}
//};
//console.log(func(1));
//console.log(func(8));

//function func(x){
  //const xPlusSeven = x + 7;
  //if(xPlusSeven >= 9){
    //return xPlusSeven;
  //} else {
    //return x;
  //}
//};

function func(x, y){
  if (x > 1000){
    return x;
  } else if((x = x + 7) >= 9){
    return x;
  } else {
    return y;
  }
};

//console.log(func(2000, 3));
//console.log(func(1, 3));
//console.log(func(8, 3));

//function func2(x, y){
  //if (x > 1000){
    //return x;
  //} else if((x + 7) >= 9){
    //return x + 7;
  //} else {
    //return y;
  //}
//};

//console.log(func2(2000, 3));
//console.log(func2(1, 3));
//console.log(func2(8, 3));

//function func3(x, y){
  //const newX = x + 7;
  //if (x > 1000){
    //return x;
  //} else if(newX >= 9){
    //return newX;
  //} else {
    //return y;
  //}
//};

//console.log(func3(2000, 3));
//console.log(func3(1, 3));
//console.log(func3(8, 3));

//function func4(x, y){
  //if (x > 1000){
    //return x;
  //} else {
    //const newX = x + 7;
    //if(newX >= 9){
      //return newX;
    //} else {
      //return y;
    //}
  //}
//};

//console.log(func4(2000, 3));
//console.log(func4(1, 3));
//console.log(func4(8, 3));

function memoizedAddSeven(x){
  return x + 7
};

function func5(x, y){
  if (x > 1000){
    return x;
  } else {
    if(memoizedAddSeven(x) >= 9){
      return memoizedAddSeven(x);
    } else {
      return y;
    }
  }
};

//console.log(func5(2000, 3));
//console.log(func5(1, 3));
//console.log(func5(8, 3));

function func6(x, y){
  if (x > 1000){
    return x;
  } else if (memoizedAddSeven(x) >= 9){
    return memoizedAddSeven(x);
  } else {
    return y;
  }
};

//console.log(func6(2000, 3));
//console.log(func6(1, 3));
//console.log(func6(8, 3));

function func7(x, y){
  if (x > 1000){
    return x;
  } else if (x >= 2){
    return x + 7;
  } else {
    return y;
  }
};

console.log(func(2000, 3));
console.log(func(1, 3));
console.log(func(2, 3));
console.log(func(8, 3));

console.log(func7(2000, 3));
console.log(func7(1, 3));
console.log(func7(2, 3));
console.log(func7(8, 3));
