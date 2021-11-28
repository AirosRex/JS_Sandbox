/*
Given an unsorted integer array nums, return the smallest missing positive integer.

You must implement an algorithm that runs in O(n) time and uses constant extra space.


Example 1:
Input: nums = [1,2,0]
Output: 3

Example 2:
Input: nums = [3,4,-1,1]
Output: 2

Example 3:
Input: nums = [7,8,9,11,12]
Output: 1
 
Constraints:
1 <= nums.length <= 5 * 105
-231 <= nums[i] <= 231 - 1
*/
// [arr[0], arr[1]] = [arr[1], arr[0]]
function missing(arr) {
    const found = new Map();
    let i = 0;
    while (i < arr.length) {
        found.set(arr[i],true);
        i++;
    }
    let j = 1;
    while (found.get(j) == true){
        j++;
    }
    return j;
}

/*
Find the lowest missing positive integer in O(n) time and constant size complexity.
*/
function goldfish_missing(arr) {
    let i = 0;
    while (i < arr.length) {
        let current = arr[i];

        if (Number.isInteger(current) == false || current > arr.length) {
            arr[i] = 0;
            i++;
        } else if (current == i || current == 0) {
            i++;
        } else if (current == arr.length) {
            if (i > 0) {
                [arr[0], arr[i]] = [arr[i], arr[0]];
                arr[i] = 0;
            }
            i++;
        } else if (current == arr[current]) {
            arr[i] = 0;
            i++;
        } else {
            [arr[i], arr[current]] = [arr[current], current];
        }
    }

    i = 1;
    while (arr[i] == i && i < arr.length) {
        i++;
    }
    
    if (arr[0] == arr.length && i == arr.length) {
        return i + 1;
    } 
    return i;
}

function goldfish_missing2(arr) {
    let i = 0;
    while (i < arr.length) {
        let val = arr[i];

        if (val > arr.length || val == i || val == arr[val]) {
            i++;
        } else if (val == arr.length) {
            if (i > 0 && arr[0] != val) {
                [arr[0], arr[i]] = [arr[i], arr[0]]
            }
            i++;
        } else {
            [arr[i], arr[val]] = [arr[val], val];
        }
}
    i = 1;
    while (arr[i] == i && i < arr.length) {
        i++;
    }

    if (arr[0] == arr.length && i == arr.length) {
        return i + 1;
    }

    return i;
}

function goldfish_missing3(arr) {
    let i = 0;
    while (i < arr.length) {
        let val = arr[i];

        if (val >= 0 && val < arr.length && val != arr[val]) {
            [arr[i], arr[val]] = [arr[val], val];
        } else {
            i++;
        }
}
    i = 1;
    while (arr[i] == i && i < arr.length) {
        i++;
    }
    if (arr[0] == arr.length && i == arr.length) {
        return i + 1;
    }

    return i;
}
console.log("1 - " + goldfish_missing3([]));
console.log("1 - " + goldfish_missing3([0]));
console.log("2 - " + goldfish_missing3([1]));
console.log("4 - " + goldfish_missing3([3, 2, 1]));
console.log("4 - " + goldfish_missing3([-6, 1, 2, 3, -7]));
console.log("4 - " + goldfish_missing3([-6, 1, 2, 2, 2, 2, 3, -7]));
console.log("4 - " + goldfish_missing3([3, 3, 1, 2, 3]));
console.log("6 - " + goldfish_missing3([2, 3, .15, 2/3, 4, 1, 7, 'a', 2, 17, 'zebra', NaN, 5]));