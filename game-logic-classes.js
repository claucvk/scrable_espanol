'use strict';

const Player = class {
  constructor (name, id, turnOrder, turn, lettersRack, lettersBoard, word, pointsEarned) {
    this.name = name;
    this.id = id;
    this.turnOrder = turnOrder;
    this.turn = turn;
    this.lettersRack = lettersRack;
    this.lettersBoard = lettersBoard;
    this.word = word;
    this.pointsEarned = pointsEarned;
  }
};

const Letter = class {
  constructor (letterQuantity, letterPoints) {
    this.letterQuantity = letterQuantity;
    this.letterPoints = letterPoints;
  }
};

const Bag = class {
  constructor (letter) {
    this.letter = letter;
  }
};

const Rack = class {
  constructor (playerId, letter) {
    this.playerId = playerId;
    this.letter = letter;
  }
};

const Board = class {
  constructor (playerId, letter, squareType, squarePoints) {
    this.playerId = playerId;
    this.letter = letter;
    this.squareType = squareType;
    this.squarePoints = squarePoints;
  }
};

const Word = class {
  constructor (playerId, word, wordValue) {
    this.playerId = playerId;
    this.word = word;
    this.wordValue = wordValue;
  }
};

const Dictionary = class {
  constructor (playerId, word, wordValidated) {
    this.playerId = playerId;
    this.word = word;
    this.wordValidated = wordValidated;
  }
};

// Objects Interactions

// PLAYER
// Identify how many players are in the game (4 players maximum)
// Assing an Id to each player (1, 2, 3, 4)
// Randomly define the order of the player in the game. Who is the first to play, the second...
// Identify turn's player to assing to each player their movements (letters in rack, letters in board, verify word played and sum points earned from letters and squares used)
// Switch turns between players

//LETTER
// Define the quantity/number of each letter
// Define the points/value of each letter

// BAG
// Keep tracking of how many letters are available in the bag
// At the beginning of the game substract 7 letters to assing to each player rack
// Identify how many letters need to be transfer to the bag to the each player rack
// Substract random letters from the bag to add them to each player rack


// RACK
// Make sure that the player has 7 letters available in the rack to play
// Keep tracking of how many letters are in the rack
// Identify how many letters were placed into the board to know how many letters need to be added again to the rack from the bag. 7 - lettersPlayedInBoard = lettersRank --> 7 - lettersRank = lettersBagToSubstract

// BOARD
// Identify the type of square where the letter was placed
// If the square is a letter premium square multiple the value of the letter by 2 or 3
// If the square is a word premium square multiple the value of the word by 2 or 3

// WORD
// Define the word composed by the letters placed on the board
// Define the value of the word calculated by the sum of the letters points placed on the board

// DICTIONARY
// Take the word formed by the player on the board and verify if it is a valid word to assing the points to the player pointsEarned or to display this message: "This word doesn't exist in Spanish, please try with another combination of letters to form a valid word"
