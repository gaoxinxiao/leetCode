/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
//1.采用分治思想
var myPow = function (x, n) {

    function firstPow(x, n) {
        if (n == 0) return 1.0;
        let half = firstPow(x, parseInt(n / 2));

        if (n % 2 == 0) {
            return half * half;
        } else {
            return half * half * x;
        }
    }
    if (n <= 0) {
        x = 1 / x;
        n = -n;
    }
    return firstPow(x, n);
};  