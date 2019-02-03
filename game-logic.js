// noLetter: [0, 2],
// a: [1, 12],
// b: [3, 2],
// c: [3, 4],
// ch: [5, 1],
// d: [2, 5],
// e: [1, 12],
// f: [4, 1],
// g: [2, 2],
// h: [4, 2],
// i: [1, 6],
// j: [8, 1],
// l: [1, 4],
// ll: [8, 1],
// m: [3, 2],
// n: [1, 5],
// ñ: [8, 1],
// o: [1, 9],
// p: [3, 2],
// q: [5, 1],
// r: [1, 5],
// rr: [8, 1],
// s: [1, 6],
// t: [1, 4],
// u: [1, 5],
// v: [4, 1],
// x: [8, 1],
// y: [4, 1],
// z: [10, 1]

// Players --> player1 = 0 | player2 = 1
let currentPlayer;
// Get points for each letter selected to form a word and return the total points of the word formed.
let totalWordPointsPlayer1 = 0;
let totalWordPointsPlayer2 = 0;

const lettersBag = ["noLetter", "noLetter", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "b", "b", "c", "c", "c", "c", "ch", "d", "d", "d", "d", "d", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "f", "g", "g", "h", "h", "i", "i", "i", "i", "i", "i", "j", "l", "l", "l", "l", "ll", "m", "m", "n", "n", "n", "n", "n", "ñ", "o", "o", "o", "o", "o", "o", "o", "o", "o", "p", "p", "q", "r","r", "r", "r", "r", "rr", "s", "s", "s", "s", "s", "s", "t", "t", "t", "t", "u", "u", "u", "u", "u", "v", "x", "y", "z"];

let lettersRack = [];
let lettersBoard= [];
// Distributing the letters to each player (2 players)
// Keeping tracking of the letters in BAG -- RACK -- BOARD.

// sumar el total de letras en BAG

const lettersFromBagToRack = function (numberOfLetterstoTake) {
  for (let i = 0; i < numberOfLetterstoTake; i++) {
    const oneRandomLetter = lettersBag[Math.floor(Math.random() * lettersBag.length)];
    //console.log('oneRandomLetter ', oneRandomLetter);
    substractingLettersBag = lettersBag.splice(lettersBag.indexOf(oneRandomLetter), 1);
    //console.log('substractingLettersBag ', substractingLettersBag);
    const addingLettersRack = lettersRack.push(oneRandomLetter);
    //console.log('lettersRack ', lettersRack);
  }
  return lettersRack;
};

lettersFromBagToRack(7);

const lettersFromRackToBoard = function (letter) {
  const verifyingLetterInLettersRack = lettersRack.includes(letter);
  console.log('verifyingLetterInLettersRack ', verifyingLetterInLettersRack);
  if (verifyingLetterInLettersRack) {
    console.log('lettersRack in Board ', lettersRack);
    console.log('letter ', letter);
    const substractingLettersRack = lettersRack.splice(lettersRack.indexOf(letter), 1);
    console.log('substractingLettersRack ', substractingLettersRack);
    const addingLettersBoard = lettersBoard.push(letter);
    console.log('lettersBoard ', lettersBoard);
    console.log('lettersRack ', lettersRack);
  } else {
    console.log('letter is not in the letterRack');
    console.log('lettersRack ', lettersRack);
  }
};

lettersFromRackToBoard('s');
lettersFromRackToBoard('i');



// function for the lettersBoard
  // From LettersRack to lettersBoard
  // Add letters played to the lettersBoard
  // Substract the letters played to the lettersRack
  // Sum the points from the letters lettresPlayed
  // Sum the points from the special cases BOARD
  // Return the total of points fromt letters and cases


// Counting points earned by each letter used for each player.
// Keeping record of letters in board.
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
