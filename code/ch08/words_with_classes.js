class Word{
  constructor(word, language, lookUpUrl){
    this.word = word;
    this.language = language;
    this.lookUpUrl = lookUpUrl;
  }
  count(){
    return this.word.length;
  }
  lookUp(){
    return this.lookUpUrl + this.word;
  }
}
class EnglishWord extends Word{
  constructor(word){
    super(word, 'English', 'https://en.wiktionary.org/wiki');
  }
}
class JapaneseWord extends Word{
  constructor(word){
    super(word, 'Japanese', 'http://jisho.org/search/');
  }
}
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

console.log(Object.getPrototypeOf(englishWord));
console.log(englishWord.constructor);
console.log(EnglishWord.prototype);
console.log(EnglishWord.prototype.prototype);
console.log(englishWord.__proto__);
console.log(englishWord instanceof EnglishWord);
console.log(englishWord instanceof Word);
