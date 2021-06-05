/**
 * Given an array of positive integers arr,
 * calculate the sum of all possible odd-length subarrays.
 *
 * A subarray is a contiguous subsequence of the array.
 * 
 * Return the sum of all odd-length subarrays of arr.
 * 
 * Input: arr = [1,4,2,5,3]
 * Output: 58
 * Explanation: The odd-length subarrays of arr and their sums are:
 * [1] = 1
 * [4] = 4
 * [2] = 2
 * [5] = 5
 * [3] = 3
 * [1,4,2] = 7
 * [4,2,5] = 11
 * [2,5,3] = 10
 * [1,4,2,5,3] = 15
 * If we add all these together we get 1 + 4 + 2 + 5 + 3 + 7 + 11 + 10 + 15 = 58
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
 var sumOddLengthSubarrays = function(arr) {
    let sum = 0;
    let length = arr.length;


    
    // Find max subset size
    if(isEven(length)) {
        let subsetSize = length - 1;
    } else {
        let subsetSize = length;
    };

    // Starting with largest subset, add all values to sum, then shrink subset size until all subsets have been exhausted
    for (;subsetSize > 0; subsetSize - 2) {
        for ( let i = 0; i <= (length - subsetSize); i++ ) {
            for ( let j = i; j < (i +subsetSize); j++) {
            sum += arr[j]
            }
        }

    }
    return sum; 
};