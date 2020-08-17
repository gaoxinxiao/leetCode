/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function (prices) {
    let minVal = Math.max.apply(null, prices);
    let maxPri = 0;
    for (var i = 0; i < prices.length; i++) {
        if (prices[i] < minVal) {
            minVal = prices[i];
        } else {
            maxPri = Math.max(prices[i] - minVal, maxPri)
        }
    }
    return maxPri;
};

maxProfit([7,1,5,3,6,4]);
