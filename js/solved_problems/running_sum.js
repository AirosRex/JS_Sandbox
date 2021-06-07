/**
 * Given an array nums. We define a running sum of an array as:
 * runningSum[i] = sum(nums[0]...nums[i]).
 * 
 * Return the running sum of nums.
 * 
 * Input: nums = [1,2,3,4]
 * Output: [1,3,6,10]
 * Explanation: [1, 1+2, 1+2+3, 1+2+3+4]
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
let runningSum = function(nums) {
    let solution = [];
    for (let i = 0; i < nums.length; i++) {
        solution[i] = nums[i] + (i > 0 ? solution[i - 1] : 0);
    }
    return solution;
};
let input1 = [1, 2, 3, 4];
let a = runningSum(input1);
console.log(a);