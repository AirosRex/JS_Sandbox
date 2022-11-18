/*
You are given a positive integer num consisting of exactly four digits. Split num into two new integers new1 and new2 by using the digits found in num. Leading zeros are allowed in new1 and new2, and all the digits found in num must be used.

For example, given num = 2932, you have the following digits: two 2's, one 9 and one 3. Some of the possible pairs [new1, new2] are [22, 93], [23, 92], [223, 9] and [2, 329].
Return the minimum possible sum of new1 and new2.
*/

function splitSum(num) {
    if (num < 1000 || num > 9999) {
        return "Enter a four digit number";
    }
    let highest = 0;
    let low = 0;
    
    let int1 = String(num).charAt(0);
    let int2 = String(num).charAt(1);
    let int3 = String(num).charAt(2);
    let int4 = String(num).charAt(3);
    for ( let i = 1; i < 4; i++) {
        let curr = String(num).charAt(i); 
        let temp = 0;
        if (curr < int1) {
            int4 = int3;
            int3 = int2;
            int2 = int1;
            int1 = curr;
        } else if (curr < int2) {
            int4 = int3;
            int3 = int2;
            int2 = curr; 
        } else if (curr < int3) {
            int4 = int3;
            int3 = curr;
        } else {
            int4 = curr;
        }
    }
    
    let three1 = '' + int2 + int3 + int4;
    let sum1 = parseInt(int1) + parseInt(three1);

    let three2 = '' + int1 + int3 + int4; 
    let sum2 = parseInt(int2) + parseInt(three2);

    let three3 = '' + int1 + int2 + int4;
    let sum3 = parseInt(int3) + parseInt(three3);

    let three4 = '' + int1 + int2 + int3;
    let sum4 = parseInt(int4) + parseInt(three4);

    let two11 = '' + int1 + int2;
    let two12 = '' + int3 + int4;
    let sum5 = parseInt(two11) + parseInt(two12);

    let two21 = '' + int1 + int3;
    let two22 = '' + int2 + int4;
    let sum6 = parseInt(two21) + parseInt(two22);

    let two31 = '' + int1 + int4;
    let two32 = '' + int2 + int3;
    let sum7 = parseInt(two31) + parseInt(two32);

    low = sum1;

    if (sum2 < low) {
        low = sum2;
    } 
    
    if (sum3 < low) {
        low = sum3;
    }
    
    if (sum4 < low) {
        low = sum4;
    }
    
    if (sum5 < low) {
        low = sum5;
    }
    
    if (sum6 < low) {
        low = sum6;
    }
    
    if (sum7 < low) {
        low = sum7;
    }
    return low;



}

function highestMin () {
    let highest = 0;
    for (let i = 1000; i < 10000; i++) {
        if (splitSum(i) > highest) {
            highest = splitSum(i);
            console.log(i);
        }
    }
    return highest;
}

console.log(highestMin());
//console.log(splitSum(8999));