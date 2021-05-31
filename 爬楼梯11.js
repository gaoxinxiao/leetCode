/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    let prev = 2, current = 3, next = 5;
    if (n <= 3) return n
    while (n > 3) {
        next = prev + current
        prev = current
        current = next
        n--
    }
    return current
};
climbStairs(5)