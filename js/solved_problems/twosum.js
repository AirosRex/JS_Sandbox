/**
 * Given an array of integers nums
 * And a target integer n
 * Return whether or not two integers from nums has a sum of target
 * 
 * [3, 2, 1, 5]
 * 5
 * TRUE
 */

// O(n^2)
function twoSum(nums, target) {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                return true;
            }
        }
    }
    return false;
}
// O(n*log(n))
function twoSum2(nums, target) {
    nums.sort();
    let i = 0;
    let j = nums.length - 1;
    while (i < j) {
        if (nums[i] + nums[j] == target) {
            return true;
        }
        if (nums[i] + nums[j] > target) {
            j--;
        } else {
            i++;
        }
    }
    return false;
}
// O(n)
function twoSum3(nums, target) {
    let lookup = {};
    for (let i = 0; i < nums.length - 1; i++) {
        if (lookup[target - nums[i]]) {
            return true;
        }
        lookup[nums[i]] = true;
    }
    return false;
}