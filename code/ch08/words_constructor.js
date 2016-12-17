function Word(word, language, lookUpUrl){
  this.word = word;
  this.language = language;
  this.lookUpUrl = lookUpUrl;
  this.count = function(){
    return this.word.length;
  }
  this.lookUp = function(){
    return this.lookUpUrl + this.word;
  }
}


// function EnglishWord(word){
//   Word.call(this);
//   this.word = word;
//   this.language = "English";
//   this.lookUpUrl = 'https://en.wiktionary.org/wiki/';
// }
//
// function JapaneseWord(word){
//   Word.call(this);
//   this.word = word;
//   this.language = "Japanese";
//   this.lookUpUrl = 'http://jisho.org/search/';
// }
function EnglishWord(word){
  Word.call(this, word, "English", 'https://en.wiktionary.org/wiki/');
}

function JapaneseWord(word){
  Word.call(this, word, "Japanese", 'http://jisho.org/search/');
}

EnglishWord.prototype = Object.create(Word.prototype);
EnglishWord.prototype.constructor = EnglishWord;
JapaneseWord.prototype = Object.create(Word.prototype);
JapaneseWord.prototype.constructor = JapaneseWord;

const japaneseWord = new JapaneseWord("犬");
const englishWord = new EnglishWord("dog");

Word.prototype.reportLanguage = function(){
  return `The language is: ${this.language}`;
}
console.log(japaneseWord.reportLanguage());



console.log(japaneseWord.count());
console.log(japaneseWord.word);
console.log(englishWord.count());
console.log(englishWord.word);
console.log(englishWord.lookUp());
console.log(englishWord.lookUpUrl);
console.log(japaneseWord.lookUp());
console.log(japaneseWord.lookUpUrl);

console.log(Object.getPrototypeOf(japaneseWord));
console.log(japaneseWord.constructor);
console.log(JapaneseWord.prototype);
console.log(JapaneseWord.prototype.prototype);
console.log(japaneseWord.__proto__);
console.log(japaneseWord instanceof JapaneseWord);
console.log(japaneseWord instanceof Word);
console.log('aaaaaaaaaaaaaaaaaaaaaaaaa');

console.log(Object.getPrototypeOf(englishWord));
console.log(englishWord.constructor);
console.log(EnglishWord.prototype);
console.log(EnglishWord.prototype.prototype);
console.log(englishWord.__proto__);
console.log(englishWord instanceof EnglishWord);
console.log(englishWord instanceof Word);

console.log(japaneseWord.reportLanguage());
