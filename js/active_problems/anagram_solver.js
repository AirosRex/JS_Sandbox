/**
Given an array of strings strs, group the anagrams together. You can return the answer in any order.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
*/

//Size complexity = O(n)
//Time Complexity = O(n^2)
function sort1(strs) {
    let anagrams = [];
    let answer = [];
    for (let i = 0; i < strs.length; i++){
        let orderedText = strs[i].split('').sort().join('');
        let found = false;
        for (let j = 0; j < anagrams.length; j++) {
            if (orderedText == anagrams[j]) {
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
}-0
// Time complexity = O(n*klog(k))
// n = number of strings in strs
// k = length of longest string
// Size Complexity = O(2n)
function sort2(strs) {
    let answer = {};
    for (let i = 0; i < strs.length; i++){
        let orderedText = strs[i].split('').sort().join('');

        if (answer[orderedText]) {
            answer[orderedText].push(strs[i]);
        } else {
            answer[orderedText] = [strs[i]];
        }
    }
    return Object.values(answer);
}

const strs = ['eat', 'ate', 'tea', 'thee'];
console.log(sort2(strs));