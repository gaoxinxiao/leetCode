/**
 * @param {number} n
 * @return {number}
 */
//1.可以维护最后三个值  来计算最后几步 因为上到顶部的时候只有可能从 n-1 或者 n-2上来

var climbStairs = function (n) {
    if (n <= 2) return n;

    let a1 = 1, a2 = 2, a3 = 0;
    while (n >= 3) {
        a3 = a1 + a2;
        a1 = a2;
        a2 = a3;
        n--;
    }
    return a3;
};

console.log(climbStairs(4))