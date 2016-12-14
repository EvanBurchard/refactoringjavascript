Classifier = require('./16_after_new_domain.js');
const wish = require('wish');
describe('the file', () => {
  const classifier = new Classifier;
  classifier.addText('english text',
                     ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
                      'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q'],
                      0)
  classifier.addText('japanese text',
                     ['あ',     'い',    'う',     'え',     'お',
                       'か',     'き',    'く',    'け',    'こ'],
                       1)

  classifier.trainAll();
  it('classifies', () =>{
    const classified = classifier.classify(['お', 'は', 'よ', 'う', 'ご', 'ざ', 'い', 'ま', 'す']);
    wish(classified.get('yes') === 1.51);
    wish(classified.get('no') === 5.19885601);
  });
  it('number of words', ()=>{
    wish(classifier._textList.allWords.size === 27);
  });

  it('label probabilities', ()=>{
    wish(classifier._labelProbabilities.get('yes') === 0.5);
    wish(classifier._labelProbabilities.get('no') === 0.5);
  });
});
