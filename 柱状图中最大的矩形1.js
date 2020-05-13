/**
 * @param {number[]} heights
 * @return {number}
 */

//1.两层循环确地i和j的位置
//2.取出i到j之间的最小高度 在 * j-i的宽度  
//3.更新面积值

var largestRectangleArea = function (nums) {
    var max = 0;
    for (var i = 0; i < nums.length; i++) {
        var minHei = Number.MAX_VALUE;
        for (var j = i; j < nums.length; j++) {
            minHei = Math.min(minHei, nums[j])
            max = Math.max(max, minHei * (j - i + 1));
        }
    }
    return max;
};


console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]))