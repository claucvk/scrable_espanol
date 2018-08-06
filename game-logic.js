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

// Object with letters and points of each one.
const letters = {
  noLetter: 0,
  a: 1,
  b: 3,
  c: 3,
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
  s: 1,
  t: 1,
  u: 1,
  v: 4,
  x: 8,
  y: 4,
  z: 10
};
//console.log('letters ', letters);

// Get points for each letter selected to form a word and return the total points of the word formed.
let totalWordPoints = 0;
const selectedLetter = function(letter) {
  let valueKey = "";
  for (var key in letters) {
    //console.log(`${key}: ${letters[key]}`);
    if (key === letter) {
      totalWordPoints += letters[key];
      console.log(`Match! key: ${key} letter: ${letter} valueKey: ${valueKey}`);
      console.log(`Total word points ${totalWordPoints} `)
      return totalWordPoints;
    }
  }
};

selectedLetter("s");
selectedLetter("i");

// Limitar las veces que una letra puede ser seleccionada

// Reset totalWordPoints function
// const resettotalWordPoints = function() {
//   if () {
//     return totalWordPoints = 0;
//   }
// };



// Invocar la selectedLetter function por cada letra escogida
// Tomar ese valor y sumarle cada valor en otra variable


// Distribute the letter to each player
// first round --> 7 lettres
// Following rounds --> number letters used === number letters to take


// Chosing letters function
// function chosingLetters() {
// iterate in the array to find the letter.
// Example: casa
// }
// Checking if the box is empty and accept letter


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
