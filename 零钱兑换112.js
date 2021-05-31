/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    let dp = new Array(amount + 1).fill(0)
    for (let i = 0; i < amount; i++) {
        for (let coin of coins) {
            dp[amount] = dp[amount - coin] + 1
        }
    }
    console.log(dp)
};
coinChange([1, 2, 5], 11)