const http = require('http');
const response = http.get('http://refactoringjs.com')


let theResult = [];
http.get('http://refactoringjs.com', (result) => {
  result.on('data', (chunk) => {
    theResult.push(chunk.toString());
  });
});
setTimeout(function(){console.log(theResult)}, 500);
