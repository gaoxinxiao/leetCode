/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (h) {
    let max = 0;
    for (var i = 0; i < h.length - 1; i++) {
        for (var j = i + 1; j < h.length; j++) {
            let area = (j - i) * Math.min(h[i], h[j]);
            max = Math.max(max, area)
        }
    }
    return max;
};


var maxArea2 = function (h) {
    let max = 0;
    for (var i = 0, j = h.length - 1; i < j;) {
        let minHei = h[i] < h[j] ? h[i++] : h[j--];
        let area = (j - i + 1) * minHei;
        max = Math.max(max, area)
    }
    return max;
};
console.log(maxArea2([1, 6, 6, 4]))
