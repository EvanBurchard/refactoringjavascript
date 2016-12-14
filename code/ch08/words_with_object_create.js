const word = {
  count(){
    return this.word.length;
  },
  lookUp(){
    return this.lookUpUrl + this.word;
  }
};
//const englishWord = Object.create(word);
//englishWord.word = 'dog';
//englishWord.language = 'English';
//englishWord.lookUpUrl = 'https://en.wiktionary.org/wiki/';

//const japaneseWord = Object.create(word);
//japaneseWord.word = '犬';
//japaneseWord.language = 'Japanese';
//japaneseWord.lookUpUrl = 'http://jisho.org/search/';

//const englishWord = Object.assign(Object.create(word),
                      //{word: 'dog',
                       //language: 'English',
                       //lookUpUrl: 'https://en.wiktionary.org/wiki/'})
const englishWord = function(theWord){
  return Object.assign(Object.create(word),
                      {word: theWord,
                       language: 'English',
                       lookUpUrl: 'https://en.wiktionary.org/wiki/'})
}

const japaneseWord = Object.assign(Object.create(word),
                       {word: '犬',
                        language: 'Japanese',
                        lookUpUrl: 'http://jisho.org/search/'})
word.reportLanguage = function(){
  return `The language is: ${this.language}`;
}
console.log(japaneseWord.__proto__);
console.log(japaneseWord.reportLanguage());
console.log(englishWord);
