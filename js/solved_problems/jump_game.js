/*Given an array of non-negative integers nums, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Your goal is to reach the last index in the minimum number of jumps.

You can assume that you can always reach the last index.

Thoughts:
Give value of "Distance from end" to values in the back and work backwards. 
Try values previous to the end and see who can make it in one jump.
Whoever the first one is becomes new end. 
Repeat until i = 0;


*/

function jump (nums) {
    if (nums.length < 2) {
        return "Please input array with two or more integers";
    }
    let counter = 0;
    let finished = false;
    let goal = nums.length - 1;
    while (finished == false) {
        console.log(goal);
        for (let i = 0; i < goal; i++){
            if (i + nums[i] >= goal){
                if (i == 0) {
                    finished = true;
                }
                goal = i;
                counter++;
            }
        }
    }
    return counter;
}

const nums = [2,2,1,5,8,3,2,5,6,5,4,2,1,4,6,7,8,9,,1,2,2,1];
console.log(jump(nums));