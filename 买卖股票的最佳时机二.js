/**
 * @param {number[]} prices
 * @return {number}
 */


var maxProfit = function (prices) {
    let count = 0;
    for (var i = 1; i < prices.length; i++) {
        let price = prices[i] - prices[i - 1];
        count = price > 0 ? price + count : Math.max(price, count)
    }
    return count;
};
maxProfit([7, 1, 5, 3, 6, 4]);