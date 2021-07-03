/**
 * Given a 9x9 sudoku board, return a solution if possible
 *
 * Possible approaches:
 *
 * Place every empty space in an array. Run every permutation through isValid, return if true.
 * Assign one value at a time, checking isValid as the board is built.
 *
 */
/**let i = 0;
  const guesser = (i) => {
    if (i == -1) {
      return "No possible solution";
    }
    console.log("i: " + i);
    let currentSpace = currentBoard[emptyLocation[i][0]][emptyLocation[i][1]];
    if (currentSpace == " ") {
      currentSpace = 1;
    }
    if (currentSpace < 9) {
      currentSpace++;
    }
    if (currentSpace == 9) {
      currentSpace = " ";
      guesser(i - 1);
    }
    if (!sudokuValidator(currentBoard)){
      guesser(i);
    } 
    
    if (sudokuValidator(currentBoard) && i < emptyLocation.length) {
      guesser(i + 1);
    } 

    if (sudokuValidator(currentBoard) && i == emptyLocation.length){
      return currentBoard;
    }

  }
  return guesser(i);
  */

// import {sudokuValidator} from 'sudoku_validator.js';

function sudokuValidator(board) {
  const map = {};
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const val = board[i][j];
      if (val == " ") {
        continue;
      }
      const row = val + "r" + i;
      const col = val + "c" + j;
      const box = val + "b" + Math.floor(i / 3) + Math.floor(j / 3);
      if (map[row] || map[col] || map[box]) {
        return false;
      }

      map[row] = map[col] = map[box] = true;
    }
  }
  return true;
}

function solveSudoku(board) {
  let emptyLocation = [];
  console.log("start!");
  if (!sudokuValidator(board)) {
    return false;
  }

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] == " ") {
        emptyLocation.push([i, j]);
      }
    }
  }

  let i = 0;
  while (i < emptyLocation.length) {
    if (i < 0) {
      return "no possible solution";
    }
    if (board[emptyLocation[i][0]][emptyLocation[i][1]] == 9) {
      board[emptyLocation[i][0]][emptyLocation[i][1]] = " ";
      i--;
      continue;
    }
    if (board[emptyLocation[i][0]][emptyLocation[i][1]] == " ") {
      board[emptyLocation[i][0]][emptyLocation[i][1]] = 1;
    } else if (board[emptyLocation[i][0]][emptyLocation[i][1]] < 9) {
      board[emptyLocation[i][0]][emptyLocation[i][1]]++;
    }

    if (sudokuValidator(board)) {
      i++;
      continue;
    }
  }

  return board;
}

const board1 = [
  ["5", "3", " ", " ", "7", " ", " ", "6", " "],
  ["6", " ", " ", "1", "9", "5", " ", " ", " "],
  [" ", "9", "8", " ", " ", " ", " ", " ", " "],
  ["8", " ", " ", " ", "6", " ", " ", " ", "3"],
  ["4", " ", " ", "8", " ", "3", " ", " ", "1"],
  ["7", " ", " ", " ", "2", " ", " ", " ", "6"],
  [" ", "6", " ", " ", " ", " ", "2", " ", " "],
  [" ", " ", " ", "4", "1", "9", "8", " ", "5"],
  [" ", " ", " ", " ", "8", " ", " ", "7", "9"],
];
const board = [
  ["1", "5", "8", "7", "6", "3", "9", "2", "4"],
  [" ", " ", " ", "9", " ", " ", "1", " ", " "],
  ["9", "2", "6", " ", " ", "5", " ", " ", " "],
  [" ", " ", "9", " ", "5", " ", " ", "3", " "],
  ["2", " ", "1", "3", " ", "6", " ", "4", " "],
  [" ", " ", " ", " ", "8", "4", "6", " ", "1"],
  [" ", "1", " ", "6", " ", " ", " ", " ", "9"],
  [" ", " ", " ", " ", "3", "1", " ", " ", "2"],
  [" ", "7", " ", "5", " ", "9", "3", "1", " "],
];

console.log(solveSudoku(board));
