/** Given n non-negative integers a1, a2, ..., an , where each represents a point
 * at coordinate (i, ai). n vertical lines are drawn such that the two endpoints
 * of the line i is at (i, ai) and (i, 0). Find two lines, which, together with
 * the x-axis forms a container, such that the container contains the most
 * water. */

function inchworms(array) {
    let maxVolume = 0;
    let left = 0; 
    let right = array.length - 1;

    while (left < right) {
        maxVolume = Math.max(Math.min(array[left], array[right]) * (right - left), maxVolume); 
        if (array[left] < array[right]) {
            left++;
        } else {
            right--;
        }
    }
    return "Max volume = " + maxVolume;
}

function volume(array) {
    const length = array.length;
    let solution = [0, 0, 0];
    for (let i = 0; i < length - 1; i++) {
        for (let j = i + 1; j < length; j++) {
            if (array[i] > array[j]) {
                if ( array[j] * (j - i) > solution[2]){
                    solution[0] = i;
                    solution[1] = j;
                    solution[2] = array[j] * (j - i);
                }
            } else if ( array[i] * (j - i) > solution[2]){
                solution[0] = i;
                solution[1] = j;
                solution[2] = array[i] * (j - i);
            }
        }
    }
    return "Max volume: " + solution;
    //return array[solution[0]] + " -> " + array[solution[1]] + " = " + solution[2];
}

const array = [1, 5, 6, 2, 3, 7, 2, 9, 1, 5];

console.log(inchworms(array));