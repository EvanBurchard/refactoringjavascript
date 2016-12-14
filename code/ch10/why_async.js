const http = require('http');
const getBody = {
  bodyArray: [],
  saveBody: function(chunk){
    this.bodyArray.push(chunk);
  },
  printBody: function(){
    //console.log(this.bodyArray.join(''))
  },
  getResult: function(result){
    result.on('data', this.saveBody.bind(this));
    result.on('end', this.printBody.bind(this));
  }
};

const test = require('tape');
test('our async routine', function (assert) {
  getBody.printBody = function(){
    assert.notEqual(getBody.bodyArray.length, 0);
    assert.end();
  }
  http.get('http://refactoringjs.com', getBody.getResult.bind(getBody));
});

//describe('our async routine', function(){
  //http.get('http://refactoringjs.com',
           //getBody.getResult.bind(getBody))
  //it('should have some data in the bodyArray', function(){
    //setTimeout(function(){
      //assert.equal(getBody.bodyArray.length, 2)
      //}, 1500);
  //});
//});

//const http = require('http');
//const test = require('tape');
//const testDouble = require('testdouble');


//const getBody = {
  //bodyArray: [],
  //saveBody: function(chunk){
    //this.bodyArray.push(chunk);
  //},
  //printBody: function(){
    //console.log(this.bodyArray.join(''))
    //this.allDone();
  //},
  //getResult: function(result){
    //result.on('data', this.saveBody.bind(this));
    //result.on('end', this.printBody.bind(this));
  //},
  //allDone: function(){ }
//}

//function setup(){
  //return Object.create(getBody);
//}
//test('our async routine three', function (assert) {
  //const newBody = setup();
  //newBody.allDone = testDouble.function();
  //testDouble.when(newBody.allDone()).thenDo(function(){
    //assert.notEqual(newBody.bodyArray.length, 0)
    //assert.end()
  //});
  //http.get('http://refactoringjs.com', newBody.getResult.bind(newBody));
//});

//function setup(){
  //getBody.bodyArray = [];
//}
//function teardown(){
  //getBody.allDone = function(){ };
//}

//test('our async routine', function (assert) {
  //setup();
  //getBody.allDone = function(){
    //assert.equal(getBody.bodyArray.length, 2);
    //teardown();
    //assert.end();
  //}
  //http.get('http://refactoringjs.com', getBody.getResult.bind(getBody));
//});

//test('our async routine two', function (assert) {
  //setup();
  //http.get('http://refactoringjs.com', getBody.getResult.bind(getBody));
  //assert.equal(getBody.bodyArray.length, 0);
  //teardown();
  //assert.end();
//});



//test('or async routine', function (assert) {
  //assert.end()
//});


//test('our async routine', function (assert) {
  //test.test('sub test', function(subAssert){
    //subAssert.end()
  //});
  //getBody.printBody = function(){
    //assert.end();
  //};
  //http.get('http://refactoringjs.com', getBody.getResult.bind(getBody));
//});

//test('or async routine', function (assert) {
  //assert.equal(getBody.bodyArray.length, 2);
  //assert.end()
//});


//////////////
//describe('our async routine', function(){
  //it("should pass", function(){
    //http.get('http://refactoringjs.com', getBody.getResult.bind(getBody));
    //setTimeout(function(){ assert.notEqual(getBody.bodyArray.length, 8)}, 1000);
  //});
//})
///////////

//describe('our async routine', function(){
  //before(function(done){
    //http.get('http://refactoringjs.com', getBody.getResult.bind(getBody));
  //});
  //it("should pass", function(){
    //assert.notEqual(getBody.bodyArray.length, 0);
  //});
//})


//const http = require('http');
//const getBody = {
  //bodyArray: [],
  //saveBody: function(chunk){
    //this.bodyArray.push(chunk);
  //},
  //printBody: function(){
    //console.log(this.bodyArray.join(''))
  //},
  //getResult: function(result){
    //result.on('data', this.saveBody.bind(this));
    //result.on('end', this.printBody.bind(this));
  //}
//}



//describe('our async routine', function(){
  //it('should have some data in the bodyArray', function(done){
    //http.get('http://refactoringjs.com',
             //getBody.getResult.bind(getBody))
    //if(getBody.bodyArray.length !== 0){
      //done()
    //}else{
      //done(new Error(`length was ${getBody.bodyArray.length}`));
    //}
  //})
//})

//describe('our async routine', function(){
  //http.get('http://refactoringjs.com',
           //getBody.getResult.bind(getBody))
  //it('should have some data in the bodyArray', function(done){
    //setTimeout(function(){assert.equal(getBody.bodyArray.length, 2)}, 1500);
  //});
//});
//describe('our async routine', function(){
  //before(function(done){
    //http.get('http://refactoringjs.com', getBody.getResult.bind(getBody));
    //setTimeout(done, 1000);
  //});
  //it("should pass", function(){
    //assert.notEqual(getBody.bodyArray.length, 2);
  //});
//})









//http.get('http://refactoringjs.com', (result) => {
  //result.on('data', (chunk) => {
    //console.log(`body: ${chunk}`);
  //})
//});


//bodyArray = [];
//saveBody = function(chunk){
  //bodyArray.push(chunk);
//};
//printBody = function(){
  //console.log(bodyArray.join(''))
//};
//getResults = function(result){
  //result.on('data', saveBody);
  //result.on('end', printBody);
//};

//http.get('http://refactoringjs.com', getResults);

//function printBody(chunk){
  //console.log(chunk);
//};

//function getResults(result){
  //result.on('data', printBody);
//};

//http.get('http://refactoringjs.com', getResults);


//let bodyArray = [];
//const saveBody = function(chunk){
  //bodyArray.push(chunk);
//};
//const printBody = function(){
  //console.log(bodyArray.join(''))
//};
//const getResults = function(result){
  //result.on('data', saveBody);
  //result.on('end', printBody);
//};

//http.get('http://refactoringjs.com', getResults);




//const response = http.get('http://refactoringjs.com')
//console.log(response);

//let theResult = [];
//http.get('http://refactoringjs.com', (result) => {
  //result.on('data', (chunk) => {
    //theResult.push(chunk);
  //});
//});
//setTimeout(function(){console.log(theResult)}, 500);

//let theResult = [];
//http.get('http://refactoringjs.com', (result) => {
  //result.on('data', (chunk) => {
    //console.log('after');
  //});
//});
//console.log('first');
//
//http.get('http://refactoringjs.com', (result) => {
  //result.on('data', (chunk) => {
    //theResult.push(chunk);
  //});
//});
//setTimeout(function(){console.log(theResult)}, 500);


//ClientRequest {                                                                                                                                                                                  
  //domain: null,
  //_events: { socket: { [Function: g] listener: [Function] } },
  //_eventsCount: 1,
  //_maxListeners: undefined,
  //output: [ 'GET / HTTP/1.1\r\nHost: refactoringjs.com\r\nConnection: close\r\n\r\n' ],
  //outputEncodings: [ 'binary' ],
  //outputCallbacks: [ [Function: finish] ],
  //outputSize: 62,
  //writable: true,
  //_last: true,
  //chunkedEncoding: false,
  //shouldKeepAlive: false,
  //useChunkedEncodingByDefault: false,
  //sendDate: false,
  //_removedHeader: {},
  //_contentLength: 0,
  //_hasBody: true,
  //_trailer: '',
  //finished: true,
  //_headerSent: true,
  //socket: null,
  //connection: null,
  //_header: 'GET / HTTP/1.1\r\nHost: refactoringjs.com\r\nConnection: close\r\n\r\n',
  //_headers: { host: 'refactoringjs.com' },
  //_headerNames: { host: 'Host' },
  //_onPendingData: null,
  //agent: 
   //Agent {
     //domain: null,
     //_events: { free: [Function] },
     //_eventsCount: 1,
     //_maxListeners: undefined,
     //defaultPort: 80,
     //protocol: 'http:',
     //options: { path: null },
     //requests: {},
     //sockets: { 'refactoringjs.com:80:': [Object] },
     //freeSockets: {},
     //keepAliveMsecs: 1000,
     //keepAlive: false,
     //maxSockets: Infinity,
     //maxFreeSockets: 256 },
  //socketPath: undefined,
  //method: 'GET',
  //path: '/' }
//IncomingMessage {
  //_readableState: 
   //ReadableState {
     //objectMode: false,
     //highWaterMark: 16384,
     //buffer: [],
     //length: 0,
     //pipes: null,
     //pipesCount: 0,
     //flowing: null,
     //ended: false,
     //endEmitted: false,
     //reading: false,
     //sync: true,
     //needReadable: false,
     //emittedReadable: false,
     //readableListening: false,
     //resumeScheduled: false,
     //defaultEncoding: 'utf8',
     //ranOut: false,
     //awaitDrain: 0,
     //readingMore: false,
     //decoder: null,
     //encoding: null },
  //readable: true,
  //domain: null,
  //_events: { end: [Function: responseOnEnd] },
  //_eventsCount: 1,
  //_maxListeners: undefined,
  //socket: 
   //Socket {
     //connecting: false,
     //_hadError: false,
     //_handle: 
      //TCP {
        //bytesRead: 8775,
        //_externalStream: {},
        //fd: 16,
        //reading: true,
        //owner: [Circular],
        //onread: [Function: onread],
        //onconnection: null,
        //writeQueueSize: 0 },
     //_parent: null,
     //_host: 'refactoringjs.com',
     //_readableState: 
      //ReadableState {
        //objectMode: false,
        //highWaterMark: 16384,
        //buffer: [],
        //length: 0,
        //pipes: null,
        //pipesCount: 0,
        //flowing: true,
        //ended: false,
        //endEmitted: false,
        //reading: false,
        //sync: false,
        //needReadable: true,
        //emittedReadable: false,
        //readableListening: false,
        //resumeScheduled: false,
        //defaultEncoding: 'utf8',
        //ranOut: false,
        //awaitDrain: 0,
        //readingMore: false,
        //decoder: null,
        //encoding: null },
     //readable: true,
     //domain: null,
     //_events: 
      //{ end: [Object],
        //finish: [Function: onSocketFinish],
        //_socketEnd: [Function: onSocketEnd],
        //free: [Function: onFree],
        //close: [Object],
        //agentRemove: [Function: onRemove],
        //drain: [Function: ondrain],
        //error: [Function: socketErrorListener],
        //data: [Function: socketOnData] },
     //_eventsCount: 9,
     //_maxListeners: undefined,
     //_writableState: 
      //WritableState {
        //objectMode: false,
        //highWaterMark: 16384,
        //needDrain: false,
        //ending: false,
        //ended: false,
        //finished: false,
        //decodeStrings: false,
        //defaultEncoding: 'utf8',
        //length: 0,
        //writing: false,
        //corked: 0,
        //sync: false,
        //bufferProcessing: false,
        //onwrite: [Function],
        //writecb: null,
        //writelen: 0,
        //bufferedRequest: null,
        //lastBufferedRequest: null,
        //pendingcb: 0,
        //prefinished: false,
        //errorEmitted: false,
        //bufferedRequestCount: 0,
        //corkedRequestsFree: [Object] },
     //writable: true,
     //allowHalfOpen: false,
     //destroyed: false,
     //_bytesDispatched: 62,
     //_sockname: null,
     //_pendingData: null,
     //_pendingEncoding: '',
     //server: null,
     //_server: null,
     //parser: 
      //HTTPParser {
        //'0': [Function: parserOnHeaders],
        //'1': [Function: parserOnHeadersComplete],
        //'2': [Function: parserOnBody],
        //'3': [Function: parserOnMessageComplete],
        //'4': null,
        //_headers: [],
        //_url: '',
        //_consumed: false,
        //socket: [Circular],
        //incoming: [Circular],
        //outgoing: [Object],
        //maxHeaderPairs: 2000,
        //onIncoming: [Function: parserOnIncomingClient] },
     //_httpMessage: 
      //ClientRequest {
        //domain: null,
        //_events: {},
        //_eventsCount: 0,
        //_maxListeners: undefined,
        //output: [],
        //outputEncodings: [],
        //outputCallbacks: [],
        //outputSize: 0,
        //writable: true,
        //_last: true,
        //chunkedEncoding: false,
        //shouldKeepAlive: false,
        //useChunkedEncodingByDefault: false,
        //sendDate: false,
        //_removedHeader: {},
        //_contentLength: 0,
        //_hasBody: true,
        //_trailer: '',
        //finished: true,
        //_headerSent: true,
        //socket: [Circular],
        //connection: [Circular],
        //_header: 'GET / HTTP/1.1\r\nHost: refactoringjs.com\r\nConnection: close\r\n\r\n',
        //_headers: [Object],
        //_headerNames: [Object],
        //_onPendingData: null,
        //agent: [Object],
        //socketPath: undefined,
        //method: 'GET',
        //path: '/',
        //parser: [Object],
        //res: [Circular] },
     //read: [Function],
     //_consuming: true },
  //connection: 
   //Socket {
     //connecting: false,
     //_hadError: false,
     //_handle: 
      //TCP {
        //bytesRead: 8775,
        //_externalStream: {},
        //fd: 16,
        //reading: true,
        //owner: [Circular],
        //onread: [Function: onread],
        //onconnection: null,
        //writeQueueSize: 0 },
     //_parent: null,
     //_host: 'refactoringjs.com',
     //_readableState: 
      //ReadableState {
        //objectMode: false,
        //highWaterMark: 16384,
        //buffer: [],
        //length: 0,
        //pipes: null,
        //pipesCount: 0,
        //flowing: true,
        //ended: false,
        //endEmitted: false,
        //reading: false,
        //sync: false,
        //needReadable: true,
        //emittedReadable: false,
        //readableListening: false,
        //resumeScheduled: false,
        //defaultEncoding: 'utf8',
        //ranOut: false,
        //awaitDrain: 0,
        //readingMore: false,
        //decoder: null,
        //encoding: null },
     //readable: true,
     //domain: null,
     //_events: 
      //{ end: [Object],
        //finish: [Function: onSocketFinish],
        //_socketEnd: [Function: onSocketEnd],
        //free: [Function: onFree],
        //close: [Object],
        //agentRemove: [Function: onRemove],
        //drain: [Function: ondrain],
        //error: [Function: socketErrorListener],
        //data: [Function: socketOnData] },
     //_eventsCount: 9,
     //_maxListeners: undefined,
     //_writableState: 
      //WritableState {
        //objectMode: false,
        //highWaterMark: 16384,
        //needDrain: false,
        //ending: false,
        //ended: false,
        //finished: false,
        //decodeStrings: false,
        //defaultEncoding: 'utf8',
        //length: 0,
        //writing: false,
        //corked: 0,
        //sync: false,
        //bufferProcessing: false,
        //onwrite: [Function],
        //writecb: null,
        //writelen: 0,
        //bufferedRequest: null,
        //lastBufferedRequest: null,
        //pendingcb: 0,
        //prefinished: false,
        //errorEmitted: false,
        //bufferedRequestCount: 0,
        //corkedRequestsFree: [Object] },
     //writable: true,
     //allowHalfOpen: false,
     //destroyed: false,
     //_bytesDispatched: 62,
     //_sockname: null,
     //_pendingData: null,
     //_pendingEncoding: '',
     //server: null,
     //_server: null,
     //parser: 
      //HTTPParser {
        //'0': [Function: parserOnHeaders],
        //'1': [Function: parserOnHeadersComplete],
        //'2': [Function: parserOnBody],
        //'3': [Function: parserOnMessageComplete],
        //'4': null,
        //_headers: [],
        //_url: '',
        //_consumed: false,
        //socket: [Circular],
        //incoming: [Circular],
        //outgoing: [Object],
        //maxHeaderPairs: 2000,
        //onIncoming: [Function: parserOnIncomingClient] },
     //_httpMessage: 
      //ClientRequest {
        //domain: null,
        //_events: {},
        //_eventsCount: 0,
        //_maxListeners: undefined,
        //output: [],
        //outputEncodings: [],
        //outputCallbacks: [],
        //outputSize: 0,
        //writable: true,
        //_last: true,
        //chunkedEncoding: false,
        //shouldKeepAlive: false,
        //useChunkedEncodingByDefault: false,
        //sendDate: false,
        //_removedHeader: {},
        //_contentLength: 0,
        //_hasBody: true,
        //_trailer: '',
        //finished: true,
        //_headerSent: true,
        //socket: [Circular],
        //connection: [Circular],
        //_header: 'GET / HTTP/1.1\r\nHost: refactoringjs.com\r\nConnection: close\r\n\r\n',
        //_headers: [Object],
        //_headerNames: [Object],
        //_onPendingData: null,
        //agent: [Object],
        //socketPath: undefined,
        //method: 'GET',
        //path: '/',
        //parser: [Object],
        //res: [Circular] },
     //read: [Function],
     //_consuming: true },
  //httpVersionMajor: 1,
  //httpVersionMinor: 1,
  //httpVersion: '1.1',
  //complete: false,
  //headers: 
   //{ server: 'GitHub.com',
     //date: 'Sun, 18 Sep 2016 07:49:25 GMT',
     //'content-type': 'text/html; charset=utf-8',
     //'content-length': '8397',
     //connection: 'close',
     //'last-modified': 'Tue, 08 Mar 2016 23:35:12 GMT',
     //'access-control-allow-origin': '*',
     //expires: 'Sun, 18 Sep 2016 07:59:25 GMT',
     //'cache-control': 'max-age=600',
     //'accept-ranges': 'bytes',
     //'x-github-request-id': '49AA4570:0F94:984AD6A:57DE4705' },
  //rawHeaders: 
   //[ 'Server',
     //'GitHub.com',
     //'Date',
     //'Sun, 18 Sep 2016 07:49:25 GMT',
     //'Content-Type',
     //'text/html; charset=utf-8',
     //'Content-Length',
     //'8397',
     //'Connection',
     //'close',
     //'Last-Modified',
     //'Tue, 08 Mar 2016 23:35:12 GMT',
     //'Access-Control-Allow-Origin',
     //'*',
     //'Expires',
     //'Sun, 18 Sep 2016 07:59:25 GMT',
     //'Cache-Control',
     //'max-age=600',
     //'Accept-Ranges',
     //'bytes',
     //'X-GitHub-Request-Id',
     //'49AA4570:0F94:984AD6A:57DE4705' ],
  //trailers: {},
  //rawTrailers: [],
  //upgrade: false,
  //url: '',
  //method: null,
  //statusCode: 200,
  //statusMessage: 'OK',
  //client: 
   //Socket {
     //connecting: false,
     //_hadError: false,
     //_handle: 
      //TCP {
        //bytesRead: 8775,
        //_externalStream: {},
        //fd: 16,
        //reading: true,
        //owner: [Circular],
        //onread: [Function: onread],
        //onconnection: null,
        //writeQueueSize: 0 },
     //_parent: null,
     //_host: 'refactoringjs.com',
     //_readableState: 
      //ReadableState {
        //objectMode: false,
        //highWaterMark: 16384,
        //buffer: [],
        //length: 0,
        //pipes: null,
        //pipesCount: 0,
        //flowing: true,
        //ended: false,
        //endEmitted: false,
        //reading: false,
        //sync: false,
        //needReadable: true,
        //emittedReadable: false,
        //readableListening: false,
        //resumeScheduled: false,
        //defaultEncoding: 'utf8',
        //ranOut: false,
        //awaitDrain: 0,
        //readingMore: false,
        //decoder: null,
        //encoding: null },
     //readable: true,
     //domain: null,
     //_events: 
      //{ end: [Object],
        //finish: [Function: onSocketFinish],
        //_socketEnd: [Function: onSocketEnd],
        //free: [Function: onFree],
        //close: [Object],
        //agentRemove: [Function: onRemove],
        //drain: [Function: ondrain],
        //error: [Function: socketErrorListener],
        //data: [Function: socketOnData] },
     //_eventsCount: 9,
     //_maxListeners: undefined,
     //_writableState: 
      //WritableState {
        //objectMode: false,
        //highWaterMark: 16384,
        //needDrain: false,
        //ending: false,
        //ended: false,
        //finished: false,
        //decodeStrings: false,
        //defaultEncoding: 'utf8',
        //length: 0,
        //writing: false,
        //corked: 0,
        //sync: false,
        //bufferProcessing: false,
        //onwrite: [Function],
        //writecb: null,
        //writelen: 0,
        //bufferedRequest: null,
        //lastBufferedRequest: null,
        //pendingcb: 0,
        //prefinished: false,
        //errorEmitted: false,
        //bufferedRequestCount: 0,
        //corkedRequestsFree: [Object] },
     //writable: true,
     //allowHalfOpen: false,
     //destroyed: false,
     //_bytesDispatched: 62,
     //_sockname: null,
     //_pendingData: null,
     //_pendingEncoding: '',
     //server: null,
     //_server: null,
     //parser: 
      //HTTPParser {
        //'0': [Function: parserOnHeaders],
        //'1': [Function: parserOnHeadersComplete],
        //'2': [Function: parserOnBody],
        //'3': [Function: parserOnMessageComplete],
        //'4': null,
        //_headers: [],
        //_url: '',
        //_consumed: false,
        //socket: [Circular],
        //incoming: [Circular],
        //outgoing: [Object],
        //maxHeaderPairs: 2000,
        //onIncoming: [Function: parserOnIncomingClient] },
     //_httpMessage: 
      //ClientRequest {
        //domain: null,
        //_events: {},
        //_eventsCount: 0,
        //_maxListeners: undefined,
        //output: [],
        //outputEncodings: [],
        //outputCallbacks: [],
        //outputSize: 0,
        //writable: true,
        //_last: true,
        //chunkedEncoding: false,
        //shouldKeepAlive: false,
        //useChunkedEncodingByDefault: false,
        //sendDate: false,
        //_removedHeader: {},
        //_contentLength: 0,
        //_hasBody: true,
        //_trailer: '',
        //finished: true,
        //_headerSent: true,
        //socket: [Circular],
        //connection: [Circular],
        //_header: 'GET / HTTP/1.1\r\nHost: refactoringjs.com\r\nConnection: close\r\n\r\n',
        //_headers: [Object],
        //_headerNames: [Object],
        //_onPendingData: null,
        //agent: [Object],
        //socketPath: undefined,
        //method: 'GET',
        //path: '/',
        //parser: [Object],
        //res: [Circular] },
     //read: [Function],
     //_consuming: true },
  //_consuming: false,
  //_dumped: false,
  //req: 
   //ClientRequest {
     //domain: null,
     //_events: {},
     //_eventsCount: 0,
     //_maxListeners: undefined,
     //output: [],
     //outputEncodings: [],
     //outputCallbacks: [],
     //outputSize: 0,
     //writable: true,
     //_last: true,
     //chunkedEncoding: false,
     //shouldKeepAlive: false,
     //useChunkedEncodingByDefault: false,
     //sendDate: false,
     //_removedHeader: {},
     //_contentLength: 0,
     //_hasBody: true,
     //_trailer: '',
     //finished: true,
     //_headerSent: true,
     //socket: 
      //Socket {
        //connecting: false,
        //_hadError: false,
        //_handle: [Object],
        //_parent: null,
        //_host: 'refactoringjs.com',
        //_readableState: [Object],
        //readable: true,
        //domain: null,
        //_events: [Object],
        //_eventsCount: 9,
        //_maxListeners: undefined,
        //_writableState: [Object],
        //writable: true,
        //allowHalfOpen: false,
        //destroyed: false,
        //_bytesDispatched: 62,
        //_sockname: null,
        //_pendingData: null,
        //_pendingEncoding: '',
        //server: null,
        //_server: null,
        //parser: [Object],
        //_httpMessage: [Circular],
        //read: [Function],
        //_consuming: true },
     //connection: 
      //Socket {
        //connecting: false,
        //_hadError: false,
        //_handle: [Object],
        //_parent: null,
        //_host: 'refactoringjs.com',
        //_readableState: [Object],
        //readable: true,
        //domain: null,
        //_events: [Object],
        //_eventsCount: 9,
        //_maxListeners: undefined,
        //_writableState: [Object],
        //writable: true,
        //allowHalfOpen: false,
        //destroyed: false,
        //_bytesDispatched: 62,
        //_sockname: null,
        //_pendingData: null,
        //_pendingEncoding: '',
        //server: null,
        //_server: null,
        //parser: [Object],
        //_httpMessage: [Circular],
        //read: [Function],
        //_consuming: true },
     //_header: 'GET / HTTP/1.1\r\nHost: refactoringjs.com\r\nConnection: close\r\n\r\n',
     //_headers: { host: 'refactoringjs.com' },
     //_headerNames: { host: 'Host' },
     //_onPendingData: null,
     //agent: 
      //Agent {
        //domain: null,
        //_events: [Object],
        //_eventsCount: 1,
        //_maxListeners: undefined,
        //defaultPort: 80,
        //protocol: 'http:',
        //options: [Object],
        //requests: {},
        //sockets: [Object],
        //freeSockets: {},
        //keepAliveMsecs: 1000,
        //keepAlive: false,
        //maxSockets: Infinity,
        //maxFreeSockets: 256 },
     //socketPath: undefined,
     //method: 'GET',
     //path: '/',
     //parser: 
      //HTTPParser {
        //'0': [Function: parserOnHeaders],
        //'1': [Function: parserOnHeadersComplete],
        //'2': [Function: parserOnBody],
        //'3': [Function: parserOnMessageComplete],
        //'4': null,
        //_headers: [],
        //_url: '',
        //_consumed: false,
        //socket: [Object],
        //incoming: [Circular],
        //outgoing: [Circular],
        //maxHeaderPairs: 2000,
        //onIncoming: [Function: parserOnIncomingClient] },
     //res: [Circular] } }
//
//
//
//
