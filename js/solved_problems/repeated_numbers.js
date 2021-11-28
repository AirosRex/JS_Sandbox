/*
How many ten digit numbers are comprised of four or fewer different integers?
*/

function repeated() {
    let four_or_less = 0;
    let five_or_more = 0;
    console.log("start!");
    for (let i = 1000000000; i < 10000000000; i++) {
        let zeros = 0;
        let ones = 0;
        let twos = 0; 
        let threes = 0;
        let fours = 0;
        let fives = 0;
        let sixes = 0;
        let sevens = 0;
        let eights = 0;
        let nines = 0;

        let digits = [];
        for (let j = 0;  j < 11; j++) {
            digits[j] = String(i).charAt(j); 
        }

        for (k = 0; k < 11; k++) {
            if (digits[k] == 0) {
                zeros = 1;
            } else if (digits[k] == 1) {
                ones = 1;
            } else if (digits[k] == 2) {
                twos = 1;
            } else if (digits[k] == 3) {
                threes = 1;
            } else if (digits[k] == 4) {
                fours = 1;
            } else if (digits[k] == 5) {
                fives = 1;
            } else if (digits[k] == 6) {
                sixes = 1;
            } else if (digits[k] == 7) {
                sevens = 1;
            } else if (digits[k] == 8) {
                eights = 1;
            } else if (digits[k] == 9) {
                nines = 1;
            }
        }
        if (zeros + ones + twos + threes + fours + fives + sixes + sevens + eights + nines < 5) {
            four_or_less++;
        } else {
            five_or_more++;
        }
    }
    console.log("Amount of numbers with 4 or fewer integers = " + four_or_less);
    console.log("Amount of numbers with 5 or more integers = " + five_or_more);
}

console.log(repeated());