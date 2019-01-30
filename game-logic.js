// Todo List
// Create a function that set the bonus of the special boxes in the board game. (I can use an object?)
// Create a function to determine the player's turn
// Create a function to randomly distribute the letters to each player
// Create a function that keeps score of each player
// Create a function that defines the rules to follow and have a winner
// Create a function to reset the score or start a new game

// Players --> player1 = 0 | player2 = 1
let currentPlayer;
// Get points for each letter selected to form a word and return the total points of the word formed.
let totalWordPointsPlayer1 = 0;
let totalWordPointsPlayer2 = 0;
// Object value[0] = letters points -- value[1] = quantity of letters available
const letters = {
  noLetter: [0, 2],
  a: [1, 12],
  b: [3, 2],
  c: [3, 4],
  ch: [5, 1],
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
  rr: [8, 1],
  s: [1, 6],
  t: [1, 4],
  u: [1, 5],
  v: [4, 1],
  x: [8, 1],
  y: [4, 1],
  z: [10, 1]
};

let initialSumOfLetters = Object.keys(letters).reduce(function(previous, key) {
  return previous + letters[key][1];
}, 0);
console.log('initialSumOfLetters out ', initialSumOfLetters);

// Counting points earned by each letter used for each player.
// Keeping record of letters used.
// const selectedLetter = function(letter) {
//   let valueKey = "";
//   let subtractNumberOfLetters = letters[letter] = [letters[letter][0], letters[letter][1] - 1];
//   console.log("numero de letras ", subtractNumberOfLetters)
//   for (var key in letters) {
//     if (key === letter) {
//       if (currentPlayer === 0) {
//         console.log('Current player1 selectedLetter ', currentPlayer);
//         totalWordPointsPlayer1 += letters[key][0];
//         console.log(`Match! key: ${key} letter: ${letter} valueKey: ${valueKey}`);
//         console.log(`Total word points Player1 ${totalWordPointsPlayer1} `)
//         return totalWordPointsPlayer1;
//       } else {
//         console.log('Current player2 selectedLetter ', currentPlayer);
//         totalWordPointsPlayer2 += letters[key][0];
//         console.log(`Match! key: ${key} letter: ${letter} valueKey: ${valueKey}`);
//         console.log(`Total word points Player2 ${totalWordPointsPlayer2} `)
//         return totalWordPointsPlayer2;
//       }
//     }
//   }
// };

// Distributing the letters to each player (2 players)
// Keeping tracking of the letters UNUSED -- DISTRIBUTED -- USED.
  // Subtracting the quantity of letters taken from the lettersUnused group (letters bag).
  // Adding the letters substracted from the lettersUnused group to the lettersDistributed group.
  // Counting the letters letters used/played (lettresPlayed) to determine how many letters to take from the the lettersUnused group.
// Initial round --> Take 14 letters (7 for each player) from the lettersUnused = 100
// Following rounds --> quantity of letters to distribute (lettersDistributed) depends on the quantity of letters used/played (lettresPlayed). The lettersDistributed are taken from the lettersUnused group.

const lettersDistrubution = function () {
  console.log('initialSumOfLetters in function', initialSumOfLetters);
  if (initialSumOfLetters === 100) {
    const objToArr = Object.entries(letters);
    const pickRandomLetters = Array.splice({length:7}, () => objToArr[Math.floor(Math.random() * objToArr.length)]);
    console.log('pickRandomLetters ', pickRandomLetters);
    return pickRandomLetters;
  }
}
lettersDistrubution();

// // Player 1
// const player1Moves = function () {
//   selectedLetter("u");
//   console.log("player1Moves ", currentPlayer);
//   return currentPlayer = 1;
//   // let player1lettersUsed = 0;
//   // let player1letters = 0;
// }
//
// // Player 2
// const player2Moves = function () {
//   selectedLetter("m");
//   console.log("player2Moves ", currentPlayer);
//   return currentPlayer = 0;
//   // let player1lettersUsed = 0;
//   // let player1letters = 0;
// }
//
// // Identifying player's turn.
// const toggleturns = function () {
//   if (currentPlayer === 0) {
//     console.log('toggleturns player1 ', currentPlayer);
//     return player1Moves();
//   } else {
//     console.log('toggleturns player2 ', currentPlayer);
//     return player2Moves();
//   }
// }
//
// // Decide which player start to play
// const whichPlayerStart = function () {
//   currentPlayer = Math.floor(Math.random() * 2);
//   if (currentPlayer === 0) {
//     console.log('whichPlayerStart player1 ', currentPlayer);
//     return toggleturns();
//   } else {
//     console.log('whichPlayerStart player2 ', currentPlayer);
//     return toggleturns();
//   }
// }
// whichPlayerStart();

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
