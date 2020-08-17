/**
 * @param {number} n
 * @return {number}
 */
// n-1 + n-2
var climbStairs = function (n) {
    if (n <= 2) return n
    let prev = 1,
        current = 0,
        next = 2;
    while (n >= 3) {
        current = prev + next
        prev = next
        next = current
        n--
    }
    console.log(current)
    return current
};
climbStairs(30)

