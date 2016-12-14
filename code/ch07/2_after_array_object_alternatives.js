function fileName(){
  var theError = new Error("here I am");
  return /\/(\w+\.js)\:/.exec(theError.stack)[1];
}
console.log(`Welcome to ${fileName()}!`);
var easy = 'easy';
var medium = 'medium';
var hard = 'hard';
imagine = ['c', 'cmaj7', 'f', 'am', 'dm', 'g', 'e7'];
somewhereOverTheRainbow = ['c', 'em', 'f', 'g', 'am'];
tooManyCooks = ['c', 'g', 'f'];
iWillFollowYouIntoTheDark = ['f', 'dm', 'bb', 'c', 'a', 'bbm'];
babyOneMoreTime = ['cm', 'g', 'bb', 'eb', 'fm', 'ab'];
creep = ['g', 'gsus4', 'b', 'bsus4', 'c', 'cmsus4', 'cm6'];
paperBag = ['bm7', 'e', 'c', 'g',
            'b7', 'f', 'em', 'a',
            'cmaj7', 'em7', 'a7', 'f7',
            'b'];
toxic = ['cm', 'eb', 'g', 'cdim', 'eb7', 'd7', 'db7', 'ab', 'gmaj7', 'g7'];
bulletproof = ['d#m', 'g#', 'b', 'f#', 'g#m', 'c#'];

var songs = [];
var allChords = new Set();
var labelCounts = new Map();
var labelProbabilities = new Map();
var chordCountsInLabels = new Map();
var probabilityOfChordsInLabels = new Map();

function train(chords, label){
  songs.push({label: label, chords: chords});
  chords.forEach(chord => allChords.add(chord));
  if(Array.from(labelCounts.keys()).includes(label)){
    labelCounts.set(label, labelCounts.get(label) + 1);
  } else {
    labelCounts.set(label, 1);
  }
};

function setLabelProbabilities(){
  labelCounts.forEach(function(_count, label){
    labelProbabilities.set(label, labelCounts.get(label) / songs.length);
  })
};

function setChordCountsInLabels(){
  songs.forEach(function(song){
    if(chordCountsInLabels.get(song.label) === undefined){
      chordCountsInLabels.set(song.label, {})
    }
    song.chords.forEach(function(chord){
      if(chordCountsInLabels.get(song.label)[chord] > 0){
        chordCountsInLabels.get(song.label)[chord] += 1;
      } else {
        chordCountsInLabels.get(song.label)[chord] = 1;
      }
    });
  });
}

function setProbabilityOfChordsInLabels(){
  probabilityOfChordsInLabels = chordCountsInLabels;
  probabilityOfChordsInLabels.forEach(function(_chords, difficulty){
    Object.keys(probabilityOfChordsInLabels.get(difficulty)).forEach(function(chord){
      probabilityOfChordsInLabels.get(difficulty)[chord] /=  songs.length;
    })
  })
}

train(imagine, easy);
train(somewhereOverTheRainbow, easy);
train(tooManyCooks, easy);
train(iWillFollowYouIntoTheDark, medium);
train(babyOneMoreTime, medium);
train(creep, medium);
train(paperBag, hard);
train(toxic, hard);
train(bulletproof, hard);

setLabelProbabilities();
setChordCountsInLabels();
setProbabilityOfChordsInLabels();

function classify(chords){
  var smoothing = 1.01;
  console.log(labelProbabilities);
  var classified = new Map();
  labelProbabilities.forEach(function(_probabilities, difficulty){
    var first = labelProbabilities.get(difficulty) + smoothing;
    chords.forEach(function(chord){
      var probabilityOfChordInLabel = probabilityOfChordsInLabels.get(difficulty)[chord]
      if(probabilityOfChordInLabel){
        first = first * (probabilityOfChordInLabel + smoothing)
      }
    })
    classified.set(difficulty, first);
  });
  console.log(classified);
};

classify(['d', 'g', 'e', 'dm']);
classify(['f#m7', 'a', 'dadd9', 'dmaj7', 'bm', 'bm7', 'd', 'f#m']);
