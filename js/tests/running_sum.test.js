const {
    runningSum,
    runningSumWhile,
    runningSumRecursive,
} = require("../active_problems/running_sum.js");

test("sum of five", () => {
    expect(runningSum(5)).toEqual(15);
    expect(runningSum(5)).not.toEqual(17);
    expect(runningSum(5)).toBeTruthy();
});
// tobeTruthy
// toBeNull
// toBeLessthan
