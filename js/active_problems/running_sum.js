/**
 * Given the number n, return the sum of all positive integers less than or equal to n
 * 
 * ex: If n = 5
 * return: 1 + 2 + 3 + 4 + 5 = 15
 */

function runningSum(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
}
function runningSumWhile(n) {
    let sum = 0;
    while (n) {
        sum += n;
        n--;
    }
    return sum;
}

function runningSumRecursive(n) {       
    //return n <= 0 ? 0 : n + runningSumRecursive(n - 1);
    return n > 0 ? n + runningSumRecursive(n - 1) : 0;
}
module.exports = {
    runningSum,
    runningSumWhile,
    runningSumRecursive,
}