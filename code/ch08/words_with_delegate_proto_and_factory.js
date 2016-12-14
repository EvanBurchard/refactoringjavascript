//const word = {
  //count(){
    //return this.word.length;
  //},
  //lookUp(){
    //return this.lookUpUrl + this.word;
  //}
//}

const wordFactory = function(){
  return {count(){
      return this.word.length;
    },
    lookUp(){
      return this.lookUpUrl + this.word;
    }
  }
}

const englishWordFactory = (theWord) => {
  let copy = Object.assign(wordFactory(),
                        {word: theWord,
                         language: 'English',
                         lookUpUrl: 'https://en.wiktionary.org/wiki/'})
  return Object.setPrototypeOf(copy, wordFactory);
}

const japaneseWordFactory = (theWord) =>{
  let copy = Object.assign(wordFactory(),
                        {word: theWord,
                         language: 'Japanese',
                         lookUpUrl: 'http://jisho.org/search/'})
  return Object.setPrototypeOf(copy, wordFactory);
}
const englishWord = englishWordFactory('dog');
const japaneseWord = japaneseWordFactory('犬');

wordFactory.reportLanguage = function(){
  return `The language is: ${this.language}`;
}
console.log(japaneseWord.reportLanguage());
console.log(englishWord.reportLanguage());


//const englishWordFactory = (theWord) => {
  //return Object.assign(Object.create(word),
                        //{word: theWord,
                         //language: 'English',
                         //lookUpUrl: 'https://en.wiktionary.org/wiki/'})
//};

//const japaneseWordFactory = (theWord) => {
  //let copy = Object.assign(Object.create(word),
                        //{word: theWord,
                         //language: 'Japanese',
                         //lookUpUrl: 'http://jisho.org/search/'})
  //return copy;
//};
//const englishWord = Object.create(word);
//englishWord.word = 'dog';
//englishWord.language = 'English';
//englishWord.lookUpUrl = 'https://en.wiktionary.org/wiki/';

//const japaneseWord = Object.create(word);
//japaneseWord.word = '犬';
//japaneseWord.language = 'Japanese';
//japaneseWord.lookUpUrl = 'http://jisho.org/search/';
                                   //lookUpUrl: 'http://jisho.org/search/'})

//const englishWord = Object.assign(Object.create(word),
                                  //{word: 'dog',
                                   //language: 'English',
                                   //lookUpUrl: 'https://en.wiktionary.org/wiki/'})
//const englishWord = Object.assign(Object.create(word),
                                  //{word: 'dog',
                                   //language: 'English',
                                   //lookUpUrl: 'https://en.wiktionary.org/wiki/'})

//const japaneseWord = Object.assign(word,
                                  //{word: 'dog',
                                   //language: 'japanese',
                                   //lookUpUrl: 'http://jisho.org/search/'})


//englishWord = function(){
  //Object.assign(Object.create(word),
                            //{word
//console.log(englishWord.count());

//englishWord = {
  //word: word;
  //this.language = language;
  //this.lookUpUrl = lookUpUrl;
  //constructor(word){
    //super(word, 'English', 'https://en.wiktionary.org/wiki');
  //}
//}
//function JapaneseWord extends Word{
  //constructor(word){
    //super(word, 'Japanese', 'http://jisho.org/search/');
  //}
//}




//console.log(japaneseWord.count());
//console.log(japaneseWord.word);
//console.log(englishWord.count());
//console.log(englishWord.word);
//console.log(englishWord.lookUp());
//console.log(englishWord.lookUpUrl);
//console.log(japaneseWord.lookUp());
//console.log(japaneseWord.lookUpUrl);
//console.log(japaneseWord.reportLanguage());

//console.log(Object.getPrototypeOf(wordFactory));
//console.log(Object.getPrototypeOf(word));
//console.log(englishWord.constructor);
//console.log(englishWord.__proto__);
