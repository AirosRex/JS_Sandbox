/**
 * Your are given a two dimensional array of 0s and 1s
 *
 * [[1, 1, 1, 0, 0, 0],
 *  [1, 1, 1, 0, 0, 1],
 *  [0, 0, 0, 0, 0, 1],
 *  [1, 0, 0, 0, 0, 1],
 *  [1, 0, 1, 0, 0, 1],
 * ]
 *
 * 1s represent land
 * 0s represent water
 * Borders are all water
 *
 * Adjacent lands are considered "touching"
 *  - Diagonal 1s are not considered touching
 *
 * Count the islands
 */

function countIslands(map) {
  let count = 0;
  let height = map.length;
  let width = map[0].length;
  let foundLand = Array(height)
    .fill()
    .map(() => Array(width).fill(false));

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (map[i][j]) {
        let x1 = j - 1;
        let x2 = j + 1;
        let y1 = i - 1;
        let y2 = i + 1;

        foundLand[i][j] = true;
        console.log(foundLand);
        if (x1 >= 0) {
          if (foundLand[i][x1]) {
            continue;
          }
        }
        if (y1 >= 0) {
          if (foundLand[y1][j]) {
            continue;
          }
        }
        if (x2 < width) {
          if (foundLand[i][x2]) {
            continue;
          }
        }
        if (y2 < height) {
          if (foundLand[y2][j]) {
            continue;
          }
        }
        count++;
      }
    }
  }
  return count;
}

let map = [
  [1, 1, 1, 0, 0, 0],
  [1, 1, 1, 0, 0, 1],
  [0, 0, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 0, 1],
];

console.log(countIslands(map));
