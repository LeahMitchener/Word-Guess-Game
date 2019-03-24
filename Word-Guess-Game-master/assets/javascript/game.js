var gameWords = [
  "demogorgon",
  "run",
  "will",
  "eleven",
  "eggos",
  "upside down",
  "mouth breather",
  "pollywog",
  "bitchin",
  "joyce byers",
  "jim hopper",
  "mike wheeler",
  "dustin henderson",
  "lucas sinclair",
  "nancy wheeler",
  "jonathan byers",
  "will byers",
  "steve harrington",
  "billy hargrove",
  "bob newby",
  "barb holland",
  "duffer brothers",
  "hawkins",
  "mental",
  "dart",
  "chapter one: the vanishing of will byers",
  "chapter two: the weirdo on maple street",
  "chapter three: holly, jolly",
  "chapter four: the body",
  "chapter five: the flea and the acrobat",
  "chapter six: the monster",
  "chapter seven: the bathtub",
  "chapter eight: the upside down",
  "chapter one: madmax",
  "chapter two: trick or treat, freak",
  "chapter three: the pollywog",
  "chapter four: will the wise",
  "chapter five: dig dug",
  "chapter six: the spy",
  "chapter seven: the lost sister",
  "chapter eight: the mind flayer",
  "chapter nine: the gate",
  "netflix",
  "#justiceforbarb",
  "beyond stranger things"
];

var randomIndex = Math.floor(Math.random() * 45);
var wordToGuess = gameWords[randomIndex];
var wordLength = wordToGuess.length;
var wordLetters = wordToGuess.split(" ");
var wins = 0;
var loses = 0;
var remainingTries = 15;
var wrongLettersGuessed = [];

function genCharArray(charA, charZ) {
  var a = [],
    i = charA.charCodeAt(0),
    j = charZ.charCodeAt(0);
  for (; i <= j; ++i) {
    a.push(String.fromCharCode(i));
  }
  return a;
}
var alphabet = genCharArray("a", "z"); // ["a", ..., "z"]
console.log(alphabet);

//an array for the number of dashes to guess the word
var dashArray = [];

//function for printing out dashes and letters
function replaceDash() {
  if (dashArray) {
    document.getElementById("wordToGuess").innerHTML = dashArray.join(" ");
  }
}

document.onkeyup = function(event) {
  var userGuess = event.key;
  console.log(wordToGuess);
  console.log(wordToGuess.indexOf(userGuess));
  if (wordToGuess.indexOf(userGuess) === -1) {
    remainingTries = remainingTries - 1;
    console.log(remainingTries);
  }
};

//background music
var myTheme;
var randomObject;

function music() {
  myTheme = new Sound("assets/audio/themeMusic.mp3");
  myTheme.play();
}

function restart() {
  randomIndex();
  console.log(word);
  dashArray = [];
  dashes(word);
  triedLetters = [];
  tries = 15;
  document.getElementById("remainingTries").innerHTML = tries;
  document.getElementById("lettersTried").innerHTML = triedLetters;
  guessLetter();
}
