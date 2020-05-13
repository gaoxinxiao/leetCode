/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (nums) {
    var stack = [-1];//建立一个栈
    var max = 0;
    for (var i = 0; i < nums.length; i++) {
        while (stack.length > 1 && nums[stack[stack.length - 1]] >= nums[i]){
            var area = nums[stack.pop()] * (i - stack[stack.length - 1] - 1)
            max = Math.max(max, area);
        }
        stack.push(i);
    }
    while (stack.length>1){
        var area = nums[stack.pop()] * (nums.length - stack[stack.length - 1] - 1)
        max = Math.max(max, area);
    }
    return max;
};


console.log(largestRectangleArea([2, 1]))