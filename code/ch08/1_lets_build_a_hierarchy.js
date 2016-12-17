// // Two Classes
// class EnglishWord{
//   constructor(word){
//     this.word = word;
//   };
//   count(){
//     return this.word.length;
//   };
// };
// class JapaneseWord{
//   constructor(word){
//     this.word = word;
//   }
//   count(){
//     return this.word.length;
//   }
// };
// const japaneseWord = new JapaneseWord("犬");
// const englishWord = new EnglishWord("dog");
// console.log(japaneseWord.word);
// console.log(japaneseWord.count());
// console.log(englishWord.word);
// console.log(englishWord.count());
//
// // With Parent Class
// class Word{
//   constructor(word){
//     this.word = word;
//   }
//   count(){
//     return this.word.length;
//   }
// };
//
// class EnglishWord extends Word{};
// class JapaneseWord extends Word{};
//
// const japaneseWord = new JapaneseWord("犬");
// const englishWord = new EnglishWord("dog");
// console.log(japaneseWord.count());
// console.log(japaneseWord.word);
// console.log(englishWord.count());
// console.log(englishWord.word);

// Final

class Word{
  constructor(word, language, lookUpUrl){
    this.word = word;
    this.language = language;
    this.lookUpUrl = lookUpUrl;
  };
  count(){
    return this.word.length;
  };
  lookUp(){
    return this.lookUpUrl + this.word;
  };
};
class EnglishWord extends Word{
  constructor(word){
    super(word, 'English', 'https://en.wiktionary.org/wiki/');
  };
};
class JapaneseWord extends Word{
  constructor(word){
    super(word, 'Japanese', 'http://jisho.org/search/');
  };
};

const japaneseWord = new JapaneseWord("犬");
const englishWord = new EnglishWord("dog");

const wish = require('wish');
const deepEqual = require('deep-equal')

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
wish(Object.getPrototypeOf(JapaneseWord) === Word);

// sketchy bits
wish(deepEqual(Object.getPrototypeOf(japaneseWord), {}));
console.log(Object.getPrototypeOf(japaneseWord));
// reports JapaneseWord {}
