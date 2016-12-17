const word = {
  count(){
    return this.word.length;
  },
  lookUp(){
    return this.lookUpUrl + this.word;
  }
};
/* Variant
const englishWord = Object.create(word);
englishWord.word = 'dog';
englishWord.language = 'English';
englishWord.lookUpUrl = 'https://en.wiktionary.org/wiki/';

const japaneseWord = Object.create(word);
japaneseWord.word = '犬';
japaneseWord.language = 'Japanese';
japaneseWord.lookUpUrl = 'http://jisho.org/search/';
*/

const englishWord = Object.assign(Object.create(word),
                      {word: 'dog',
                       language: 'English',
                       lookUpUrl: 'https://en.wiktionary.org/wiki/'});

const japaneseWord = Object.assign(Object.create(word),
                       {word: '犬',
                        language: 'japanese',
                        lookUpUrl: 'http://jisho.org/search/'});



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
console.log(Object.getPrototypeOf(japaneseWord));
