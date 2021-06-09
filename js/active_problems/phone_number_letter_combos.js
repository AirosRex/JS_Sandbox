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


      //Separate into digits
   function numberSplitter(number){   
      let array = number.toString().split("");
      return array.map(x => parseInt(x));
   }

      //Remove 0s and 1s
   let arr = numberSplitter(digits);
   for (let i = arr.length; i >= 0; i--) {
      if (arr[i] == 0|| arr[i] == 1){
         arr.splice(i,1);
         }
   }

      // used to find max length
   function lengthFinder(num) {
      if (num == 7 || num == 9) {
         return 4;
      } else {
         return 3;
      }
   }
 
   let maxLength = 1;
   for (let i = 0; i < arr.length; i++) {
      maxLength = maxLength * lengthFinder(arr[i]);
   }

   function numberTranslator(num, index) {
      let numToIndex = num - 2;
      let indexToDepth = index + 1;

      let translator = [
         [2, 'a', 'b', 'c'],
         [3, 'd', 'e', 'f'],
         [4, 'g', 'h', 'i'],
         [5, 'j', 'k', 'l'],
         [6, 'm', 'n', 'o'],
         [7, 'p', 'q', 'r', 's'],
         [8, 't', 'u', 'v'],
         [9, 'w', 'x', 'y', 'z']
      ];

      return translator[numToIndex][indexToDepth];
   }

   for (let i = 0; i < arr.length; i++) {
      for (let j)
   }
   const res = maxLength;

   return res;
};
console.log(letterCombinations("999"));