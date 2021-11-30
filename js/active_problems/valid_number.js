/*
A valid number can be split up into these components (in order):

A decimal number or an integer.
(Optional) An 'e' or 'E', followed by an integer.
A decimal number can be split up into these components (in order):

(Optional) A sign character (either '+' or '-').
One of the following formats:
One or more digits, followed by a dot '.'.
One or more digits, followed by a dot '.', followed by one or more digits.
A dot '.', followed by one or more digits.
An integer can be split up into these components (in order):

(Optional) A sign character (either '+' or '-').
One or more digits.
For example, all the following are valid numbers: ["2", "0089", "-0.1", "+3.14", "4.", "-.9", "2e10", "-90E3", "3e+7", "+6e-1", "53.5e93", "-123.456e789"], while the following are not valid numbers: ["abc", "1a", "1e", "e3", "99e2.5", "--6", "-+3", "95a54e53"].

Given a string s, return true if s is a valid number.

 

Example 1:

Input: s = "0"
Output: true
Example 2:

Input: s = "e"
Output: false
Example 3:

Input: s = "."
Output: false
Example 4:

Input: s = ".1"
Output: true
 

Constraints:

1 <= s.length <= 20
s consists of only English letters (both uppercase and lowercase), digits (0-9), plus '+', minus '-', or dot '.'.

*/

function isNumber(s) {
    let foundSign = false, foundE = false, foundDot = false, foundNumber = false;
    let i = 0;
     while (i < s.length){
        let curr = parseInt(s[i],10);
        if (curr >= 0 || curr <= 9){
            foundNumber = true;
            foundSign = true;
            i++;
        } else if (s[i] == '-' || s[i] == '+') {
            if (foundSign) {
                return false
            }
            foundSign = true;
            foundNumber = false;
            i++;
        } else if (s[i] == 'e' || s[i] == 'E') {
            if (foundE || foundNumber == false) {
                return false;
            }
            foundE = true;
            foundSign = false;
            foundDot = true;
            foundNumber = false;
            i++;
        } else if (s[i] == '.') {
            if (foundDot) {
                return false;
            }
            foundDot = true;
            foundSign = true;
            i++;
        } else {
            return false;
        }
    }
    return foundNumber;
}
console.log("Truthy Stuff");
console.log(isNumber('123'));
console.log(isNumber('-123'));
console.log(isNumber('.123'));
console.log(isNumber('1.23'));
console.log(isNumber('123.'));
console.log(isNumber('12e3'));
console.log(isNumber('12E3'));
console.log(isNumber('+12e+1'));
console.log(isNumber('-1.23e+45'));

console.log("Falsey Stuff");
console.log(isNumber(''));
console.log(isNumber('-'));
console.log(isNumber('+-1'));
console.log(isNumber('.'));
console.log(isNumber('1.2.3'));
console.log(isNumber('1e2.3'));
console.log(isNumber('1E2E3'));
console.log(isNumber('zebra'));
console.log(isNumber('1e'));
console.log(isNumber('E3'));
