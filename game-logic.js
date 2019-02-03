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

let lettersRackPlayer1 = [];
let lettersRackPlayer2 = [];
let lettersBoardPlayer1= [];
let lettersBoardPlayer2= [];

// Decide which player start to play
const whichPlayerStart = function () {
  currentPlayer = Math.floor(Math.random() * 2);
  if (currentPlayer === 0) {
    console.log('whichPlayerStart player1 ', currentPlayer);
  } else {
    console.log('whichPlayerStart player2 ', currentPlayer);
  }
}
whichPlayerStart();

const lettersFromBagToRack = function (numberOfLetterstoTake) {
  for (let i = 0; i < numberOfLetterstoTake; i++) {
    const oneRandomLetter = lettersBag[Math.floor(Math.random() * lettersBag.length)];
    //console.log('oneRandomLetter ', oneRandomLetter);
    substractingLettersBag = lettersBag.splice(lettersBag.indexOf(oneRandomLetter), 1);
    //console.log('substractingLettersBag ', substractingLettersBag);
    if (currentPlayer === 0) {
      const addingLettersRackPlayer1 = lettersRackPlayer1.push(oneRandomLetter);
      //console.log('lettersRackPlayer1 ', lettersRackPlayer1);
    } else {
      const addingLettersRackPlayer2 = lettersRackPlayer2.push(oneRandomLetter);
      //console.log('lettersRackPlayer2 ', lettersRackPlayer2);
    }
  }
};

lettersFromBagToRack(7);

const lettersFromRackToBoard = function (letter) {
  if (currentPlayer === 0) {
    const verifyingLetterInLettersRackPlayer1 = lettersRackPlayer1.includes(letter);
    console.log('verifyingLetterInLettersRackPlayer1 ', verifyingLetterInLettersRackPlayer1);
    if (verifyingLetterInLettersRackPlayer1) {
      console.log('lettersRackPlayer1 in Board ', lettersRackPlayer1);
      console.log('letter ', letter);
      const substractingLettersRackPlayer1 = lettersRackPlayer1.splice(lettersRackPlayer1.indexOf(letter), 1);
      console.log('substractingLettersRackPlayer1 ', substractingLettersRackPlayer1);
      const addingLettersBoardPlayer1 = lettersBoardPlayer1.push(letter);
      console.log('lettersBoardPlayer1 ', lettersBoardPlayer1);
      console.log('lettersBoardPlayer1 ', lettersBoardPlayer1);
    } else {
      console.log('letter is not in the lettersRackPlayer1');
      console.log('lettersRackPlayer1 ', lettersRackPlayer1);
    }
  } else {
    const verifyingLetterInLettersRackPlayer2 = lettersRackPlayer2.includes(letter);
    console.log('verifyingLetterInLettersRackPlayer2 ', verifyingLetterInLettersRackPlayer2);
    if (verifyingLetterInLettersRackPlayer2) {
      console.log('lettersRackPlayer2 in Board ', lettersRackPlayer2);
      console.log('letter ', letter);
      const substractingLettersRackPlayer2 = lettersRackPlayer2.splice(lettersRackPlayer2.indexOf(letter), 1);
      console.log('substractingLettersRackPlayer2 ', substractingLettersRackPlayer2);
      const addingLettersBoardPlayer2 = lettersBoardPlayer2.push(letter);
      console.log('lettersBoardPlayer2 ', lettersBoardPlayer2);
      console.log('lettersBoardPlayer2 ', lettersBoardPlayer2);
    } else {
      console.log('letter is not in the lettersRackPlayer2');
      console.log('lettersRackPlayer2 ', lettersRackPlayer2);
    }
  }
};

lettersFromRackToBoard('s');
lettersFromRackToBoard('i');



// Identifying player's turn.
// const toggleturns = function () {
//   if (currentPlayer === 0) {
//     console.log('toggleturns player1 ', currentPlayer);
//   } else {
//     console.log('toggleturns player2 ', currentPlayer);
//   }
// }

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
