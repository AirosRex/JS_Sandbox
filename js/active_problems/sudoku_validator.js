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

   for ( let vert = 0; vert < 3; vert++){
      for (let hor = 0; hor < 3; hor++) {
         for (let i = 0; i < boardLength - 1; i++) {
            for (let j = i + 1; j < boardLength; j++) {
               let numBase = i.toString(3);
               let checkBase = j.toString(3);

               console.log(numBase); 
               console.log(checkBase); 

               let bS = {
                  y1: numBase[0],
                  x1: numBase[1],
                  y2: checkBase[0],
                  x2: checkBase[1],
               };
               if (bS.x1 == undefined) {
                  bS.x1 = 0;
               }
               if (bS.x2 == undefined) {
                  bS.x2 = 0;
               }
               
               bS.y1 = parseInt(bS.y1);
               bS.x1 = parseInt(bS.x1);
               bS.y2 = parseInt(bS.y2);
               bS.x2 = parseInt(bS.x2);

               if(bS.y1 == bS.y2 && bS.x1 == bS.x2){
               } else {
                  let pos1 = bS.y1 + 3 * vert; 
                  let pos2 = bS.x1 + 3 * hor; 
                  let pos3 = bS.y2 + 3 * vert; 
                  let pos4 = bS.x2 + 3 * hor;
                  console.log(pos1); 
                  console.log(pos2); 
                  console.log(pos3); 
                  console.log(pos4);
                  console.log("");

                  if (board[pos1][pos2] != " "){
                     if (board[pos1][pos2] == board[pos3][pos4]) {
                     return false;
                     }
                  }
               }
            }
         }
      }
   }

   return true;
}


const board = 
 [["5","3"," "," ","7"," "," "," "," "],
  ["6"," "," ","1","9","5"," "," "," "],
  [" ","9","8"," "," "," "," ","6"," "],
  ["8"," "," "," ","6"," "," "," ","3"],
  ["4"," "," ","8"," ","3"," "," ","1"],
  ["7"," "," "," ","2"," "," "," ","6"],
  [" ","6"," "," "," "," ","2","8"," "],
  [" "," "," ","4","1","9","8"," ","5"],
  [" "," "," "," ","8"," "," ","7","9"]];
// let num = 1;
// let storage = num.toString(3) 
//   console.log(storage[0]);
//   console.log(storage[1]);
//   console.log(parseInt(num[1]));

console.log(isValidSudoku(board) ? "TRUE" : "FALSE");