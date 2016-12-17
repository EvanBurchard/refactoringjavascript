const http = require('http');
const response = http.get('http://refactoringjs.com')
console.log(response.body);
