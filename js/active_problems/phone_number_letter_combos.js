/**
 * Given a string containing exclusively digits (0-9), return all
 * possible letter combinations that the number could represent.
 * 
 * A mapping of digit to letters (just like on the telephone buttons) is given below.
 * Note that 0 and 1 just map to themselves since they don't have characters.
 * 0 => 0
 * 1 => 1
 * 2 => abc
 * 3 => def
 * 4 => ghi
 * 5 => jkl
 * 6 => mno
 * 7 => pqrs
 * 8 => tuv
 * 9 => wxyz
 * 
 * Example 1:
 * Input: digits = "23"
 * Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
 * 
 * Example 2:
 * Input: digits = ""
 * Output: []
 * 
 * Example 3:
 * Input: digits = "2"
 * Output: ["a","b","c"]
 * 
 * Start by finding the string length
 * length will determine how many times each result must repeat
 * Each number down the line repeats for a factor of three less
 * 
 * let arr2 = {a, b, c};
   let arr3 = {d, e, f};
   let arr4 = {g, h, i};
   let arr5 = {j, k, l};
   let arr6  = {m, n, o};
   let arr7 = {p, q, r, s};
   let arr8 = {t, u, v};
   let arr9 = {w, x, y, z};
 * 
 */

const letterCombinations = (digits) => {

   let translator = [
      '0',
      '1',
      'abc',
      'def',
      'ghi',
      'jkl',
      'mno',
      'pqrs',
      'tuv',
      'wxyz'
   ];

   let masterArray = [];
   let maxLength = 1;
   for (let i = 0; i < digits.length; i++) {
      let index = parseInt(digits[i], 10);
      maxLength *= translator[index].length;
   
   }

   //Filling array with blanks
   for (let i = 0; i < maxLength; i++){
      masterArray.push("");
   }

   //Running tally on repeat frequency needed
   let divisor = 1;
   for (let i = 0; i < digits.length; i++) {
      let index = 0;
      divisor *= translator[digits[i]].length;

      for (let j = 0; j < maxLength; j++){
         let repeat = maxLength/divisor;
         if (j % repeat == 0 && j != 0) {
            index++;
            if (index == translator[digits[i]].length) {
               index = 0;
            }
         }
         masterArray[j] += translator[digits[i]][index];
      }
   }
   const res = masterArray;

   return res;
};

console.log(letterCombinations("9219"));