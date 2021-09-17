/*
Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.
*/

function palindrome(input) {
    for (let i = 0; i < input.length/2; i++) {
        if (input[i] != input[(input.length - i)]) {
            return false;
        }
    }
    return true;
}

const input = 1234321;
console.log(palindrome(input));