const {create, env} = require('sanctuary');
const S = create({checkTypes: true, env: env});
R = require('ramda');
// R.add("hello", 3);
// NaN
// S.add("hello", 3);

// TypeError: Invalid value
// add :: FiniteNumber -> FiniteNumber -> FiniteNumber
//        ^^^^^^^^^^^^
//             1
// 1)  "hello" :: String
// The value at position 1 is not a member of ‘FiniteNumber’.

const getAThree = S.find(R.equals(3));
getAThree([3, 4]);
getAThree([8, 4]);
