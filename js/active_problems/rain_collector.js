/**Given n non-negative integers representing an elevation 
 * map where the width of each bar is 1, 
 * compute how much water it can trap after raining. */

function rainCatcher(array){
    let collection = 0;

    let leftMax = array[0];
    let rightMax = array[array.length - 1];
    let left = 1;
    let right = array.length - 1;

    while (left < right) {
        if (array[left] < array[right]) {
            array[left] >= leftMax ? leftMax = array[left] : collection += (leftMax - array[left]);
            left++;
        } else {
            array[right] >= rightMax ? rightMax = array[right] : collection += (rightMax - array[right]);
            right--;
        }
    }
    return collection;
}

function collector(array) {
    let length = array.length;
    if (length < 3) {
        return "Not enough data. Need at least 3 points."
    }

    let collection = 0;
    let leftMax = array[0];

    for (let i = 1; i < length - 1; i ++) {
        if (array[i] < leftMax){
            let rightMax = 0;
            for (let j = i + 1; j < length; j++) {
                if (array[j] > rightMax) {
                    rightMax = array[j];
                }
            }
            if (array[i] < rightMax) {
                if (leftMax > rightMax) {
                    collection += rightMax - array[i];
                } else {
                    collection += leftMax - array[i]
                }
            }
            console.log(collection);
        }
        if (array[i] > leftMax) {
            leftMax = array[i]
        }
    }
    return collection;
}

const array = [0, 5, 3, 2, 6, 7, 2, 3, 1, 4, 0];

console.log(rainCatcher(array));