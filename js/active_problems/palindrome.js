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

function palindrome2(input) {
    let number = String(input);
    let i = 0;
    while(i < (Math.floor(number.length / 2))) {
        if (number[i] != number[(number.length - (i + 1))]) {
            return false;
        }
        i++;
    }
    return true;
}
/*
Determine if a string can form a palindrome after one element is removed
*/
function singleremoval(input) {
    let pal = String(input);
    let i = 0;
    let j = pal.length - 1;
    while (i < j) {
        let skip = false;
        if (pal[i] == pal[j]) {
            i++;
            j--;
        } else if (pal[i + 1] == pal[j] && skip == false) {
            i = i + 2;
            j--;
            skip = true;
        } else if (pal[i] == pal[j - 1] && skip == false) {
            i++;
            j = j - 2;
            skip == true;
        } else {
            return false;
        }
    }
    return true;
}
const input = 12344321;
console.log(singleremoval(input));