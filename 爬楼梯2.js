/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (n <= 3) return n;
    let f1 = 2, f2 = 3, f3 = 0;
    while(n>3){
        f3 = f2 + f1
        f1 = f2
        f2 = f3;
        n--;
    }
    return f3
};
console.log(
    climbStairs(30))