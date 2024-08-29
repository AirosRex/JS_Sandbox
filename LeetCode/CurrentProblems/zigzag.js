/*
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"
Write the code that will take a string and make this conversion given a number of rows:
string convert(string s, int numRows);
 
Example 1:
Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"

Example 2:
Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I

Example 3:
Input: s = "A", numRows = 1
Output: "A"
 
Constraints:
1 <= s.length <= 1000
s consists of English letters (lower-case and upper-case), ',' and '.'.
1 <= numRows <= 1000
*/

function zigzag (s, numRows) {
    if (numRows == 1) {
        return s;
    } 

    let charArray = [];
    for (let i = 0; i < s.length; i++) {
        charArray.push(s.charAt(i));
    }

    let arr = [];
    let j = 0;
    let k = 0;
    let decending = true;
    for (i=0; i< s.length; i++){
        arr[j][k] = charArray[i];
        if (k < (numRows - 1 ) && decending == true) {
            k++;
        } else if (k == (numRows - 1)) {
            decending = false;
            k--;
            j++;
        } else if (k > 0 && decending == false) {
            k--;
            j++;
        } else if (k == 0 && decending == false) {
            decending = true;
            k++;
        }
    }
    jMax = j;
    j = 0;
    k = 0;

    for (i=0; i< s.length; i++){
        while (typeof arr[j][k] != string) {
            if (j < jMax) {
                j++;
            } else {
                j = 0;
                k++;
            }
        }
        charArray[i] = arr[j][k];
    }   

    return charArray.join("");

}

