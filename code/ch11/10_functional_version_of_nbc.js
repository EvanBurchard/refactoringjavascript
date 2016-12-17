//naive_bayes_functional.js
R = require('ramda');

const smoothing = 1.01;

function wordCountForLabel(testWord, relevantTexts){
  const equalsTestword = R.equals(testWord);
  return R.filter(equalsTestword, _allWords(relevantTexts)).length;
};

function likelihoodOfWord(word, relevantTexts, numberOfTexts){
  return wordCountForLabel(word,
                           relevantTexts) / numberOfTexts + smoothing;
};

function likelihoodByLabel(label, newWords, trainedSet){
  const relevantTexts = textsForLabel(trainedSet.texts, label)
  const initialValue = trainedSet.probabilities[label] + smoothing;
  const likelihood = R.product(
    newWords.map(newWord =>
      likelihoodOfWord(newWord,
                       relevantTexts,
                       trainedSet.texts.length))) * initialValue;
  return {[label]: likelihood}
}

function textsForLabel(texts, label){
  return R.filter(text => text.label === label)(texts);
}

function _allWords(theTexts){
  return R.flatten(R.pluck('words', theTexts));
};

function addText(words, label, existingText = []){
  return R.concat(existingText, [{words: words, label: label}]);
};

function train(allTexts) {
  const overTextLength = R.divide(R.__, allTexts.length);
  return {texts: allTexts,
          probabilities: R.map(overTextLength,
                               R.countBy(R.identity,
                                         R.pluck('label', allTexts)))};
};

function classify(newWords, trainedSet){
  const labelNames = R.keys(trainedSet.probabilities);
  return R.reduce((acc, label) =>
    R.merge(acc, likelihoodByLabel(label, newWords, trainedSet))
            , {}, labelNames);
};

module.exports = {_allWords: _allWords,
                  addText: addText,
                  train: train,
                  classify: classify}
