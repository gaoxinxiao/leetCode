/**
 * @param {number} n
 * @return {number}
 */
var waysToChange = function (n) {
    let coins = [25, 10, 5, 1]
    let dp = new Array(n + 1).fill(0)
    dp[0] = 1
    for (let coin of coins) {
        for (let i = 1; i <= n; i++) {
            if (i - coin >= 0) {
                dp[i] = dp[i] + dp[i - coin]
            }
        }
    }
    return dp[n]%1000000007
};

waysToChange(10)