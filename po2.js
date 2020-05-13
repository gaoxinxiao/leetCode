/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
//1.采用分治思想把n每次一分为2 计算 比如 10 可以分成 2^5 *  2^5
//2.针对负数进行兼容
var myPow = function (x, n) {
    function firstPow(x, n) {
        if (n == 0) return 1.0;
        let half = firstPow(x, parseInt(n / 2));
        return n % 2 == 0 ? half * half : half * half * x;
    }
    if (n < 0) {
        x = 1 / x;
        n = -n;
    }
    return firstPow(x, n);
};