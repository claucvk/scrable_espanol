// Todo List
// Define variables for each letter and it value
// Define an array containing each box of the board game. One or multiple arrays?
// Define variables for each player
// Create a function that set the bonus of the special boxes in the board game. (I can use an object?)
// Create a function to determine the player's turn
// Create a function to randomly distribute the letters to each player
// Create a function that keeps score of each player
// Create a function that defines the rules to follow and have a winner
// Create a function to reset the score or start a new game

// Object value[0] = points of the letters - value[1] = number of letters available
const valueNumberletters = {
  noLetter: [0, 1],
  a: [1, 12],
  b: [3, 2],
  c: [3, 4],
  d: [2, 5],
  e: [1, 12],
  f: [4, 1],
  g: [2, 2],
  h: [4, 2],
  i: [1, 6],
  j: [8, 1],
  l: [1, 4],
  ll: [8, 1],
  m: [3, 2],
  n: [1, 5],
  ñ: [8, 1],
  o: [1, 9],
  p: [3, 2],
  q: [5, 1],
  r: [1, 5],
  s: [1, 6],
  t: [1, 4],
  u: [1, 5],
  v: [4, 1],
  x: [8, 1],
  y: [4, 1],
  z: [10, 1]
};

// Keep tracking of the letters used from the total number of letters.
//let numberLetters = 100;

// Get points for each letter selected to form a word and return the total points of the word formed.
let totalWordPoints = 0;
const selectedLetter = function(letter) {
  let valueKey = "";
  let subtractNumberOfLetters = valueNumberletters[letter] = [valueNumberletters[letter][0], valueNumberletters[letter][1] - 1];
  console.log("numero de letras ", subtractNumberOfLetters)
  for (var key in valueNumberletters) {
    if (key === letter) {
      totalWordPoints += valueNumberletters[key][0];
      console.log(`Match! key: ${key} letter: ${letter} valueKey: ${valueKey}`);
      console.log(`Total word points ${totalWordPoints} `)
      return totalWordPoints;
    }
  }
};

selectedLetter("noLetter");
selectedLetter("z");

// Alternate player turns
// Distribute the letter to each player
// first round --> 7 lettres and substract that number to the total of letters remaining.
// Following rounds --> number letters used === number letters to take and substract that number to the total of letters remaining.
// When the player finish to play give the turn to the other player

// Players --> player1 = 0 | player2 = 1
let currentPlayer;

// Player 1
const player1Moves = function () {
  console.log("player1Moves ", currentPlayer);
  // let player1lettersUsed = 0;
  // let player1letters = 0;
  //let player1totalWordPoints = 0;
  //return toggleturns();
}

// Player 2
const player2Moves = function () {
  console.log("player2Moves ", currentPlayer);
  // let player1lettersUsed = 0;
  // let player1letters = 0;
  // let player1totalWordPoints = 0;
  //return toggleturns();
}

// Identifying player's turn
const toggleturns = function () {
  if (currentPlayer === 0) {
    console.log('toggleturns player1 ', currentPlayer);
    return player1Moves();
  } else {
    console.log('toggleturns player2 ', currentPlayer);
    return player2Moves();
  }
}

// Decide which player start to play
const whichPlayerStart = function () {
  currentPlayer = Math.floor(Math.random() * 2);
  if (currentPlayer === 0) {
    console.log('whichPlayerStart player1 ', currentPlayer);
    return toggleturns();
  } else {
    console.log('whichPlayerStart player2 ', currentPlayer);
    return toggleturns();
  }
}
whichPlayerStart();



// Reset totalWordPoints function
// const resettotalWordPoints = function() {
//   if () {
//     return totalWordPoints = 0;
//   }
// };


// Game board boxes
let arrNum = 225;
const gameBoardBoxes = Array.from(Array(225), (d, i) => i);
// console.log("hola ", gameBoardBoxes);
// console.log("length", gameBoardBoxes.length);

// Assigning values to special game board boxes
// function specialGameBoardBoxes() {
//   if (red_box is checked) {
//       multiplicar el total de la palabra x 3
//   }
//   if (pink_box is checked) {
//       multiplicar el total de la palabra x 3
//   }
//   if (dark_blue_box is checked) {
//     multiplicar la letra x 3
//   }
//   if (light_blue_box is checked) {
//     multiplicar letra x2
//   }
// }
