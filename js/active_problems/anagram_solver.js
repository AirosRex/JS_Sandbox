/**
Given an array of strings strs, group the anagrams together. You can return the answer in any order.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
*/

//Size complexity = O(n)
//Time Complexity = O(n^2)
function sort(strs) {
    let anagrams = [];
    let answer = [];
    for (let i = 0; i < strs.length; i++){
        let orderedText = strs[i].split('').sort().join('');
        console.log(orderedText);
        let found = false;
        for (let j = 0; j < anagrams.length; j++) {
            if (orderedText == anagrams[j].split('').sort().join('')) {
                answer[j]+= ", " + strs[i];
                found = true;
            }
        }
        if (found == false) {
            answer.push(strs[i]);
            anagrams.push(orderedText);
        }
    }
    return answer;
}

const strs = ['eat', 'ate', 'tea', 'thee'];
console.log(sort(strs));