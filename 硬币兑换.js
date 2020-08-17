/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
//1.使用动态规划分别算出dp[11] -1 dp[11]-2 dp[11]-5 的数量取最小的
//所以动态转移方程就是 dp[i] = Math.min(dp[i],dp[amount-i]+1)
var coinChange = function (coins, amount) {
    let dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0
    for (let i = 1; i <= amount; i++) {
        for (let coin of coins) {
            if (i - coin >= 0) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1)
            }
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount]
};
coinChange([1, 2, 5], 11)