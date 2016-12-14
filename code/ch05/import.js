const Diary = require('./object_creation.js');
let d = new Diary();
d.tryLock(12345);
d.read();
console.log(Object.keys(d));
