//naive_bayes_functional_test.js
const NB = require('./10_functional_version_of_nbc.js');

const wish = require('wish');
describe('the file', () => {
  const english = NB.addText(['a', 'b', 'c', 'd', 'e', 'f', 'g',
                      'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q'],
                      'yes')
  const moreEnglish = NB.addText(['a', 'e', 'i', 'o', 'u'],
                      'yes', english)
  const allTexts = NB.addText(['あ',     'い',    'う',     'え',     'お',
                       'か',     'き',    'く',    'け',    'こ'],
                       'no', moreEnglish)

  var trainedSet = NB.train(allTexts);

  it('works', () => {
    wish(true);
  })
  it('classifies', () =>{
    const classified = NB.classify(['お', 'は', 'よ', 'う', 'ご', 'ざ', 'い', 'ま', 'す'], trainedSet);
    wish(classified['yes'] === 1.833745640534112);
    wish(classified['no'] === 3.456713680099012);
  });
  it('number of words', ()=>{
    wish(NB._allWords(trainedSet.texts).length === 32);
  });

  it('label probabilities', ()=>{
    wish(trainedSet.probabilities['yes'] === 0.6666666666666666);
    wish(trainedSet.probabilities['no'] === 0.3333333333333333);
  });
});
