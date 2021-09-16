/*
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)


P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNR"APLSIIGYI

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);

*/

function zigzag(input, rows) {
    if (rows == 1) {
        return input;
    }
    let slice = [];
    let row = 0;
    let rising = true;
    for (let i = 0; i < input.length; i++) {
        slice[row] = (slice[row] || "") + input[i];
        if (rising) {
            row++;
            if (row == rows - 1) {
                rising = false;
            }
        } else {
            row--;
            if (row == 0) {
                rising = true;
            }
        }
        
    }
    return slice.join("");
}

//const input = "abcdefghijklmnopqrstuvwxyz";
const input = "PAYPALISHIRING";
const rows = 3;
/*
    a
      b
        c
          d
            e

*/
console.log(zigzag(input,rows));