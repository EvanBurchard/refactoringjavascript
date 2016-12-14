const Diary = require('./diary_module.js');
let d = new Diary();
d.tryLock(12345);
d.read();
