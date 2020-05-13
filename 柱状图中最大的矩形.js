/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (nums) {
    var arr = [-1];
    var max = 0;
    for (var i = 0; i < nums.length; i++) {
        while(arr.length > 1 && nums[arr[arr.length-1]] >= nums[i]){
            let minHei = nums[arr.pop()] * (i - arr[arr.length - 1] - 1);
            max = Math.max(max, minHei)
        }
        arr.push(i);
    }
    while (arr.length > 1) {
        let minHei = nums[arr.pop()] * (nums.length - arr[arr.length - 1] - 1);
        max = Math.max(max, minHei)
    }
    return max;
};


console.log(largestRectangleArea([2, 1]))