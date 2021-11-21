/*
Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.
*/

function palindrome(input) {
    let number = String(input);
    for (let i = 0; i < (Math.floor(number.length / 2)); i++) {
        if (number[i] != number[(number.length - (i + 1))]) {
            return false;
        }
    }
    return true;
}

const input = 1234564321;
console.log(palindrome(input));