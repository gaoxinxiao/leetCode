/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */

var combine = function (n, k) {
    var res = [];
    // 特判
    if (n <= 0 || k <= 0 || n < k) {
        return res;
    }
    function backtrack(n, current, start) {
        //terminator
        if (current.length == k) {
            res.push(current);
            return;
        }
        //process logic in current
        for (var i = start; i <= n - (k - current.length) + 1; i++) {
            current.push(i)
            backtrack(n, current.slice(), i + 1);
            current.pop();
        }
        //drill down
    }
    backtrack(n, [], 1);
    return res;
};

combine(4, 2);