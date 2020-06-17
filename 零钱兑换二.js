/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
    const result = new Array(amount + 1).fill(0)
    result[0] = 1
    for (const coin of coins) {
        for (let i = coin; i <= amount; i++) {
            result[i] = result[i] + result[i - coin]
        }
    }
    return result[amount]
};
console.log(change(6, [2, 2, 3, 5]));