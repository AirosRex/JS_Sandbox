/*

Given a string s, find the length of the longest substring without repeating characters. 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.


Tests: 
Inputs > 0
output stores start positions and substrings
    push for equal length
    replace for increased length
substring length only increases. 
shove into second compare function.
find where failure occurs, and start at earlyfailure + 1
if total > input.length return output,
save results when failure occurs


abcdaa
compares:
0 - 1
0 - 0

0 - 2
0 - 1
0 - 0
1 - 2
2 - 2

*/

function longest_substring (input) {
    if (!input) {
        return "Input must contain at least one character";
    }
    let master = input.toString();
    let end = master.length;
    console.log(end);
    if(end == 1){
        return "[1]";
    }


    let curr = 0; let start = 0;
    let last = 1; let point = 1;
    let length = 2; 

    while (start + length <= end) {
        if (point == curr) {                
            if (start == (point - 1)){
            length++;
            last++;
            point = last;
            } else {
                point--;   
            }
            curr = start;
        } else if (master[curr] == master[point]) {
            start = curr + 1;
            last = start + length - 1;
            point = last;
            curr = start;
            console.log(curr + " fail");
        } else {
            curr++;
        }
    }
    return length - 1;

}


//console.log(longest_substring());
//console.log(longest_substring(1));
console.log(longest_substring('bbbbbbb'));
//console.log(longest_substring('121qw1e'));
//console.log(longest_substring('123456789abcdefghij1kl2mon5pqrstuvwxyz'));