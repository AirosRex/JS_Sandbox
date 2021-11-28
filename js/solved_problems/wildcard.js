/* 
Given an input string (s) and a pattern (p), implement wildcard pattern matching with support for '?' and '*' where:

'?' Matches any single character.
'*' Matches any sequence of characters (including the empty sequence).
The matching should cover the entire input string (not partial).

 

Example 1:

Input: s = "aa", p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".
Example 2:

Input: s = "aa", p = "*"
Output: true
Explanation: '*' matches any sequence.
Example 3:

Input: s = "cb", p = "?a"
Output: false
Explanation: '?' matches 'c', but the second letter is 'a', which does not match 'b'.
Example 4:

Input: s = "adceb", p = "*a*b"
Output: true
Explanation: The first '*' matches the empty sequence, while the second '*' matches the substring "dce".
Example 5:

Input: s = "acdcb", p = "a*c?b"
Output: false
 

Constraints:

0 <= s.length, p.length <= 2000
s contains only lowercase English letters.
p contains only lowercase English letters, '?' or '*'.
*/
//s = string p = pattern
function wildcard(s,p) {
    let i = 0, j = 0;
    // console.log(s.length);
    while (i < s.length) {
        // console.log('i = ' + i + ' and j = ' + j);
        if (s[i] == p[j] || p[j] == '?') {
            i++;
            j++;
        } else if (p[j] == '*') {
            while (p[j] == '*') {
                j++;    
            }
            if (j == p.length) {
                return true;
            }

            let matches = [];
            while (i < s.length) {
                if (s[i] == p[j] || p[j] == '?') {
                    matches.push(i);
                } 
                i++;
            }
            let k = 0;
            while (matches.length > k) {
                if (wildcard(s.substr(matches[k]), p.substr(j))) {
                    return true;
                }
                k++;
            }
            return false;
        } else {
            return false;
        }
    }
    while (p[j] == '*') {
        j++;
    }
    if (i == s.length && j == p.length) {
        return true;
    }    
    return false;
}
function isMatch(s,p) {
    return isMatchMemo(s,p,0,0,new Map());
}
// function isMatchMemo(s,p,i,j,memo) {
//     // console.log(s.length);
//     while (i < s.length) {
//         const key = 'i: ' + i + 'j: ' + j;
//         // if (has solution) -> return solution
//         if (memo.has(key)) {
//             return memo.get(key);
//         }

//         // console.log('i = ' + i + ' and j = ' + j);
//         if (s[i] == p[j] || p[j] == '?') {
//             i++;
//             j++;
//         } else if (p[j] == '*') {
//             while (p[j] == '*') {
//                 j++;    
//             }
//             if (j == p.length) {
//                 memo[key] = true;
//                 return memo[key];
//             }

//             let matches = [];
//             while (i < s.length) {
//                 if (s[i] == p[j] || p[j] == '?') {
//                     matches.push(i);
//                 } 
//                 i++;
//             }
//             let k = 0;
//             while (k < matches.length) {
//                 if (isMatchMemo(s, p, i, j, memo)) {
//                     return true;
//                 }
//                 k++;
//             }
//             memo.set(key, false);
//             return false;
//         } else {
//             memo.set(key, false);
//             return false;
//         }
//     }
//     while (p[j] == '*') {
//         j++;
//     }

//     return (i == s.length && j == p.length);
// }


// console.log(isMatch("aa", "a"));
// console.log(isMatch("cb", "?a"));
// console.log(isMatch("acbcd", "a*c?b"));

// console.log(isMatch("aa", "*"));
// console.log(isMatch("aa", "a*a"));
// console.log(isMatch("aa", "aa"));
// console.log(isMatch("aa", "*aa*"));
// console.log(isMatch("adceb", "*a*b"));
// console.log(isMatch("acdcb", "a*cb"));

function isMatch(s,p) {
    let sCurr = 0, sPrev = -1, pCurr = 0, pPrev = -1;
    
    while (sCurr < s.length && pCurr < p.length) {
        if (s[sCurr] == p[pCurr] || p[pCurr] == '?') {
            sCurr++;
            pCurr++;
            if (pCurr == p.length && sCurr < s.length && pPrev > -1) {
                sCurr = ++sPrev;
                pCurr = pPrev;
            }
        } else if (p[pCurr] == '*') {
             while (p[pCurr] == '*'){
                pCurr++;
            }
            if (pCurr == p.length) {
                return true;
            } else if (pCurr == p.length - 1) {
                if (p[pCurr] == '?' || p[pCurr] == s[s.length - 1]){
                    return true;
                }
            }
            pPrev = pCurr;
            sPrev = sCurr;
        } else {
            if (pPrev > -1) {
                sCurr = ++sPrev;
                pCurr = pPrev;
            } else {
                return false;
            }
        }
    }
    while (p[pCurr] == '*') {
        pCurr++;
    }
    return sCurr == s.length && pCurr == p.length;

}
// console.log(isMatch("aa", "a"));
// console.log(isMatch("cb", "?a"));
// console.log(isMatch("acbcd", "a*c?b"));

// console.log(isMatch("aa", "*"));
// console.log(isMatch("aa", "a*a"));
// console.log(isMatch("aa", "aa"));
console.log(isMatch("aa", "***a"));
console.log(isMatch("cabab", "*ab"));
// console.log(isMatch("aa", "*aa*"));
// console.log(isMatch("adceb", "*a*b"));
// console.log(isMatch("acdcb", "a*cb"));