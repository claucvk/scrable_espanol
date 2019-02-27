'use strict';
// Players --> player1 = 0 | player2 = 1
let currentPlayer;

// Game board squares
const gameBoardSquares = Array.from(Array(225), (square, i) => i);

const lightBlueSquare2L = [3, 11, 36, 38, 45, 52, 59, 92, 96, 98, 102, 108, 116, 122, 126, 128, 132, 165, 172, 179, 186, 188, 213, 221];
const darkBlueSquare3L = [20, 24, 76, 80, 84, 88, 136, 140, 144, 148, 200, 204];
const pinkSquare2W = [16, 28, 32, 42, 48, 56, 64, 70, 154, 160, 168, 176, 182, 192, 196, 208];
const redSquare3W = [0, 7, 14, 105, 119, 210, 217, 224];
const starSquare2W = [112];

const lettersBag = ["noLetter", "noLetter", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "b", "b", "c", "c", "c", "c", "ch", "d", "d", "d", "d", "d", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "f", "g", "g", "h", "h", "i", "i", "i", "i", "i", "i", "j", "l", "l", "l", "l", "ll", "m", "m", "n", "n", "n", "n", "n", "ñ", "o", "o", "o", "o", "o", "o", "o", "o", "o", "p", "p", "q", "r", "r", "r", "r", "r", "rr", "s", "s", "s", "s", "s", "s", "t", "t", "t", "t", "u", "u", "u", "u", "u", "v", "x", "y", "z"];

let lettersRackPlayer1 = [];
let lettersRackPlayer2 = [];
let lettersBoardPlayer1 = [];
let lettersBoardPlayer2 = [];

const lettersPoints = {
  noLetter: 0,
  a: 1,
  b: 3,
  c: 3,
  ch: 5,
  d: 2,
  e: 1,
  f: 4,
  g: 2,
  h: 4,
  i: 1,
  j: 8,
  l: 1,
  ll: 8,
  m: 3,
  n: 1,
  ñ: 8,
  o: 1,
  p: 3,
  q: 5,
  r: 1,
  rr: 8,
  s: 1,
  t: 1,
  u: 1,
  v: 4,
  x: 8,
  y: 4,
  z: 10
};

// Get points for each letter selected to form a word and return the total points of the word formed.
let totalLettersPointsPlayer1 = 0;
let totalLettersPointsPlayer2 = 0;
let totalWordPointsPlayer1 = 0;
let totalWordPointsPlayer2 = 0;

// Decide which player start to play
const whichPlayerStart = function() {
  currentPlayer = Math.floor(Math.random() * 2);
  if (currentPlayer === 0) {
    console.log('whichPlayerStart player1 ', currentPlayer);
    return currentPlayer = 0;
  } else {
    console.log('whichPlayerStart player2 ', currentPlayer);
    return currentPlayer = 1;
  }
}
whichPlayerStart();

// Identifying player's turn.
const toggleturns = function() {
  if (currentPlayer === 0) {
    return currentPlayer = 1;
  } else {
    return currentPlayer = 0;
  }
};

const lettersFromBagToRack = function(numberOfLetterstoTake) {
  for (let i = 0; i < numberOfLetterstoTake; i++) {
    const oneRandomLetter = lettersBag[Math.floor(Math.random() * lettersBag.length)];
    //console.log('oneRandomLetter ', oneRandomLetter);
    const substractingLettersBag = lettersBag.splice(lettersBag.indexOf(oneRandomLetter), 1);
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

const lettersFromRackToBoard = function(letter) {
  if (currentPlayer === 0) {
    const verifyingLetterInLettersRackPlayer1 = lettersRackPlayer1.includes(letter);
    //console.log('verifyingLetterInLettersRackPlayer1 ', verifyingLetterInLettersRackPlayer1);
    if (verifyingLetterInLettersRackPlayer1) {
      //console.log('lettersRackPlayer1 in Board ', lettersRackPlayer1);
      //console.log('letter ', letter);
      const substractingLettersRackPlayer1 = lettersRackPlayer1.splice(lettersRackPlayer1.indexOf(letter), 1);
      console.log('substractingLettersRackPlayer1 ', substractingLettersRackPlayer1);
      const addingLettersBoardPlayer1 = lettersBoardPlayer1.push(letter);
      console.log('lettersBoardPlayer1 ', lettersBoardPlayer1);
    } else {
      //console.log('letter is not in the lettersRackPlayer1');
      //console.log('lettersRackPlayer1 ', lettersRackPlayer1);
    }
  } else {
    const verifyingLetterInLettersRackPlayer2 = lettersRackPlayer2.includes(letter);
    //console.log('verifyingLetterInLettersRackPlayer2 ', verifyingLetterInLettersRackPlayer2);
    if (verifyingLetterInLettersRackPlayer2) {
      //console.log('lettersRackPlayer2 in Board ', lettersRackPlayer2);
      //console.log('letter ', letter);
      const substractingLettersRackPlayer2 = lettersRackPlayer2.splice(lettersRackPlayer2.indexOf(letter), 1);
      //console.log('substractingLettersRackPlayer2 ', substractingLettersRackPlayer2);
      const addingLettersBoardPlayer2 = lettersBoardPlayer2.push(letter);
      //console.log('lettersBoardPlayer2 ', lettersBoardPlayer2);
    } else {
      //console.log('letter is not in the lettersRackPlayer2');
      //console.log('lettersRackPlayer2 ', lettersRackPlayer2);
    }
  }
};

lettersFromRackToBoard('z');
lettersFromRackToBoard('o');
lettersFromRackToBoard('rr');
lettersFromRackToBoard('a');

const letterPointsSum = function() {
  if (currentPlayer === 0) {
    for (let i = 0; i < lettersBoardPlayer1.length; i++) {
      const indexLettersBoards = lettersBoardPlayer1[i];
      const objToArrLettersPoints = Object.keys(lettersPoints);
      //console.log('lettersBoardPlayer1 ', lettersBoardPlayer1);
      //console.log('objToArrLettersPoints ', objToArrLettersPoints);
      for (const key of objToArrLettersPoints) {
        if (key === indexLettersBoards) {
          totalLettersPointsPlayer1 += lettersPoints[key];
          console.log('lettersPoints[key] Player1 ', lettersPoints[key]);
          console.log('totalLettersPointsPlayer1 ', totalLettersPointsPlayer1);
        }
      }
    }
  } else {
    for (let i = 0; i < lettersBoardPlayer2.length; i++) {
      const indexLettersBoards = lettersBoardPlayer2[i];
      const objToArrLettersPoints = Object.keys(lettersPoints);
      //console.log('lettersBoardPlayer2 ', lettersBoardPlayer2);
      //console.log('objToArrLettersPoints ', objToArrLettersPoints);
      for (const key of objToArrLettersPoints) {
        if (key === indexLettersBoards) {
          totalLettersPointsPlayer2 += lettersPoints[key];
          //console.log('lettersPoints[key] Player2 ', lettersPoints[key]);
          //console.log('totalLettersPointsPlayer2 ', totalLettersPointsPlayer2);
        }
      }
    }
  }
};

letterPointsSum();

// lightBlueSquare2L: 2 --> 24 (indexes: 3, 11, 36, 38, 45, 52, 59, 92, 96, 98, 102, 108, 116, 122, 126, 128, 132, 165, 172, 179, 186, 188, 213, 221)
// darkBlueSquare3L: 3 --> 12 (indexes: 20, 24, 76, 80, 84, 88, 136, 140, 144, 148, 200, 204)
// pinkSquare2W: 2 --> 16 (indexes: 16, 28, 32, 42, 48, 56, 64, 70, 154, 160, 168, 176, 182, 192, 196, 208)
//const redSquare3W: 3 --> 8 (indexes: 0, 7, 14, 105, 119, 210, 217, 224)
// starSquare2W: 2 --> 1 (indexes: 112)

const premieumSquaresPointsSum = function (square) {
  for (let i = 0; i < gameBoardSquares.length; i++) {
    const findLightBlueSquare2L = lightBlueSquare2L.includes(square);
    if (square === gameBoardSquares[i]) {
      console.log('square is in gameBoardSquares[i]');
      if (findLightBlueSquare2L) {
        console.log('toy en LightBlueSquare2L');
        totalLettersPointsPlayer1 *= 2;
        console.log('totalLettersPointsPlayer1 SQUARES ', totalLettersPointsPlayer1);
      }
      const findDarkBlueSquare3L = darkBlueSquare3L.includes(square);
      if (findDarkBlueSquare3L) {
        console.log('square ', square);
        console.log('toy en darkBlueSquare3L');
      }
      const findPinkSquare2W = pinkSquare2W.includes(square);
      if (findPinkSquare2W) {
        console.log('square ', square);
        console.log('toy en pinkSquare2W');
      }
      const findRedSquare3W = redSquare3W.includes(square);
      if (findRedSquare3W) {
        console.log('square ', square);
        console.log('toy en redSquare3W');
      }
      const findSquareInStarSquare2W = starSquare2W.includes(square);
      if (findSquareInStarSquare2W) {
        console.log('square ', square);
        console.log('toy en StarSquare2W');
      }
    }
  }
};

premieumSquaresPointsSum(3);
