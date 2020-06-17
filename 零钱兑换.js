/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

//dp方程
//举个例子比如 amount = 120 那么计算方程就是  dp[199]的最优解 + 1 所以在解题中要加1
// dp[11] = Math.min(dp[i],dp[amount-coins[i]]+1);
var coinChange = function (coins, amount) {
    let dp = new Array(amount+1).fill(Infinity);//生成一维数组
    dp[0] = 0;
    for (var i = 1; i <= amount; i++) {
        for (var j = 0; j < coins.length; j++) {
            //如果i-coins[j]>=0 证明当前硬币已经超出了 amount 并不可取
            if (i - coins[j] >= 0) {
                dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1)
            }
        }
    }
    return dp[amount] === Infinity?-1:dp[amount]
};

coinChange([1, 2, 5], 11);