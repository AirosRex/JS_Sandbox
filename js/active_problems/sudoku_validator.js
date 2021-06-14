/**
 * Determine if a 9 x 9 Sudoku board is valid. Only the filled
 * cells need to be validated according to the following rules:
 *
 * Each row must contain the digits 1-9 without repetition.
 * Each column must contain the digits 1-9 without repetition.
 * Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
 * 
 * Note:
 * A Sudoku board could be valid but NOT solvable.
 * Only the filled cells need to be validated according to the mentioned rules.
 *
 * 
 */

function isValidSudoku(board) {
   //Establishing boardLength to minimize random 9s everywhere
   const boardLength = 9;

   //Horizontal Check
   for (let i = 0; i < boardLength; i++) {
      for (let j = 0; j < boardLength - 1; j++) {
         for (let k = j + 1; k < boardLength; k++) {
            if (board[i][j] != " " && board[i][j] == board[i][k]){
               return false;
            }
         }
      }
   }
   //Vertical Check
   for (let i = 0; i < boardLength; i++) {
      for (let j = 0; j < boardLength - 1; j++) {
         for (let k = j + 1; k < boardLength; k++) {
            if (board [j][i] != " " && board[j][i] == board[k][i]){
               return false;
            }
         }
      }
   }
   // 3x3 check
   for ( let vert = 0; vert < 3; vert++){
      for (let hor = 0; hor < 3; hor++) {
         let compare = [];
         for (let i = 0 + 3 * vert; i < 3 + 3 * vert; i++) {
            for (let j = 0 + 3 * hor; j < 3 + 3 * hor; j++) {
               if (board[i][j] != " ") {
                  compare.push(board[i][j]);
               }
            }
         }

         if(compare.length > 1) {
            for (let x = 0; x < compare.length - 1; x++){
               if (compare[x] == compare[x +1]) {
                  return false;
               }
            }
         }
      }
   }

   return true;
}


const board = 
 [["5","3"," "," ","7"," "," ","6"," "],
  ["6"," "," ","1","9","5"," "," "," "],
  [" ","9","8"," "," "," "," "," "," "],
  ["8"," "," "," ","6"," "," "," ","3"],
  ["4"," "," ","8"," ","3"," "," ","1"],
  ["7"," "," "," ","2"," "," "," ","6"],
  [" ","6"," "," "," "," ","2"," "," "],
  [" "," "," ","4","1","9","8"," ","5"],
  [" "," "," "," ","8"," "," ","7","9"]];

console.log(isValidSudoku(board) ? "TRUE" : "FALSE");