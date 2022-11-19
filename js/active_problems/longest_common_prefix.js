/*

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

*/

function getCommonPrefix (arr) {
    if (arr.length < 2) {
        return "Please provide an array of strings."
    }
    
    for (let i = 0; i < arr[0].length; i++) {
        for (let j = 1; j < arr.length; j++) {
            if (arr[0][i] != arr[j][i]) {
                return arr[0].substring(0,i);
            }
        }
    }
    return arr[0];
}

console.log(getCommonPrefix(["flower","flow","flo"]));
//console.log(getCommonPrefix(["dog","racecar","car"]));