/**
 * @param {number} n
 * @return {number}
 */
var waysToChange = function (n) {
    let coins = [1, 5, 10, 25];
    let dp = new Array(n + 1).fill(0);
    dp[0] = 1
    for (let coin of coins) {
        if (coin > n) return dp[n] //剪枝当coin完全大于n的情况证明后面不需要在计算了
        for (let i = 1; i <= n; i++) {
            if (i - coin >= 0) {
                dp[i] = dp[i] + dp[i - coin]
            }
        }
    }
    return dp[n]
};
waysToChange(5)