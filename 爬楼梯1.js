/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    let f1 = 2, f2 = 3, f3 = 0;
    if (n <= 2) return n;
    while (n > 3) {
        f3 = f2 + f1;
        f1 = f2;
        f2 = f3;
        n--;
    }
    return f2
};

// f3 0 5 8 13 21 34
// f2 3 5 8 13 21 34
// f1 2 3 5 8  13 21
// n  7 6 5 4 3

console.log(climbStairs(8));