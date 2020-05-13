/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (h) {
    let max = 0;
    for (var i = 0, j = h.length - 1; i < j;) {
        let minHei = h[i] < h[j] ? h[i++] : h[j--];
        let hei = (j-i+1)*minHei
        max = Math.max(hei, max);
    }
    return max;
};

console.log(maxArea([1, 7, 6, 2, 5, 4, 8, 3, 7]))