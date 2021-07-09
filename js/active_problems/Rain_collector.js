/**Given n non-negative integers representing an elevation 
 * map where the width of each bar is 1, 
 * compute how much water it can trap after raining. */

function collector(array) {
    let length = array.length;
    if (length < 3) {
        return "Not enough data. Need at least 3 points."
    }

    let collection = 0;
    let leftMax = array[0];

    for (let i = 1; i < length - 1; i ++) {
        console.log("leftMax = " + leftMax);
        if (array[i] < leftMax){
            let rightMax = 0;
            for (let j = i + 1; j < length; j++) {
                if (array[j] > rightMax) {
                    rightMax = array[j];
                }
            }
            console.log("rightMax = " + rightMax);
            console.log("array[i] = " + array[i]);
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

const array = [0, 5, 3, 2, 6, 7, 2, 3, 0, 4, 0];

console.log(collector(array));