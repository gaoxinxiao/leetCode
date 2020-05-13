/**
 * @param {number[]} height
 * @return {number}
 */
//1.暴力解法两层循环 O(n^2)

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

//双指针
var maxArea1 = function (h) {
    let max = 0;
    for (var i = 0, j = h.length - 1; i < j;) {
        let minHei = h[i] < h[j] ? h[i++] : h[j--];
        let area = (j-i+1)* minHei;
        max = Math.max(max,area);
    }
    return max;
};


console.log(maxArea1([1, 8, 6, 2, 5, 4, 8, 3, 7]));