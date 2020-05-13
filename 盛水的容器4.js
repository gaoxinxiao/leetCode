/**
 * @param {number[]} height
 * @return {number}
 */

//1.暴力解法O(n^2) 两层循环取出无重复值 判断取出最小的高度 * j-i 的距离

var maxArea = function (h) {
    var max = 0;
    for (var i = 0; i < h.length - 1; i++) {
        for (var j = i + 1; j < h.length; j++) {
            var area = (j - i) * Math.min(h[i], h[j]);
            max = Math.max(max, area);
        }
    }
    return max;
};

//2.双指针方法 O(n) 一层循环 在开始的时候放一个下标最后放一个下标 如果 h[i] < h[j] ? i++ : j--

var maxArea1 = function (h) {
    var max = 0;
    for (var i = 0, j = h.length - 1; i < j;) {
        var minHei = h[i] < h[j] ? h[i++] : h[j--];
        var area = (j - i + 1) * minHei;
        max = Math.max(area, max);
    }
    return max;
};



console.log(maxArea1([1, 8, 6, 2, 5, 4, 8, 3, 7]))