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


// Game board boxes
let arrNum = 225;
const gameBoardBoxes = Array.from(Array(225), (d, i) => i);
console.log("hola ", gameBoardBoxes);
console.log("length", gameBoardBoxes.length);

// Assigning values to special game board boxes


// letters
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
  k: 8,
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
console.log('letters ', letters);

// 2 fichas en blanco (0 puntos)
// 1 punto: A ×12, E ×12, O ×9, I ×6, S ×6, N ×5, L ×4, R ×5, U ×5, T ×4
// 2 puntos: D ×5, G ×2
// 3 puntos: C ×4, B ×2, M ×2, P ×2
// 4 puntos: H ×2, F ×1, V ×1, Y ×1
// 5 puntos: CH ×1, Q ×1
// 8 puntos: J ×1, LL ×1, Ñ ×1, RR ×1, X ×1
// 10 puntos: Z ×1,
