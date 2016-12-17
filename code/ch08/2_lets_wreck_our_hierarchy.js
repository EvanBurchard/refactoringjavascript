
function Word(word, language, lookUpUrl){
  this.word = word;
  this.language = language;
  this.lookUpUrl = lookUpUrl;
  this.count = function(){
    return this.word.length;
  };
  this.lookUp = function(){
    return this.lookUpUrl + this.word;
  };
};

function EnglishWord(word){
  Word.call(this, word, "English", 'https://en.wiktionary.org/wiki/');
};

function JapaneseWord(word){
  Word.call(this, word, "Japanese", 'http://jisho.org/search/');
};

/* Variant
function Word(word, language, lookUpUrl){
  this.word = word;
  this.language = language;
  this.lookUpUrl = lookUpUrl;
  this.count = function(){
    return this.word.length;
  };
  this.lookUp = function(){
    return this.lookUpUrl + this.word;
  };
};

function EnglishWord(word){
  Word.call(this, word, "English", 'https://en.wiktionary.org/wiki/');
};

function JapaneseWord(word){
  Word.call(this, word, "Japanese", 'http://jisho.org/search/');
};
*/


JapaneseWord.prototype = Object.create(Word.prototype);
JapaneseWord.prototype.constructor = JapaneseWord;
EnglishWord.prototype = Object.create(Word.prototype);
EnglishWord.prototype.constructor = EnglishWord;


Word.prototype.reportLanguage = function(){
  return `The language is: ${this.language}`;
};
const japaneseWord = new JapaneseWord("犬");
console.log(japaneseWord.reportLanguage());

const englishWord = new EnglishWord("dog");

const wish = require('wish');
const deepEqual = require('deep-equal');

// interfaces tests
wish(japaneseWord.word ===  "犬");
wish(japaneseWord.lookUp() === "http://jisho.org/search/犬");
wish(japaneseWord.count() === 1);

wish(englishWord.word ===  "dog");
wish(englishWord.lookUp() === "https://en.wiktionary.org/wiki/dog");
wish(englishWord.count() === 3);

// internals tests
wish(typeof japaneseWord === 'object');
wish(typeof JapaneseWord === 'function');
wish(japaneseWord instanceof JapaneseWord);
wish(japaneseWord instanceof Word);
wish(!(JapaneseWord instanceof Word));

wish(japaneseWord.constructor === JapaneseWord);
// wish(Object.getPrototypeOf(JapaneseWord) === Word);

// sketchy bits
// wish(deepEqual(Object.getPrototypeOf(japaneseWord), {}));
console.log(Object.getPrototypeOf(japaneseWord));
// JapaneseWord { constructor: [Function: JapaneseWord] }
