/**
 * @param {number[]} nums
 * @return {number}
 */

var maxProduct = function (nums) {
    let max = nums[0];
    let min = nums[0];
    let res = nums[0];
    for (var i = 1; i < nums.length; i++) {
        if (nums[i] < 0) {
            let temp = max;
            max = min;
            min = temp;
        } 
        max = Math.max(max * nums[i], nums[i]);
        min = Math.min(min * nums[i], nums[i]);
        res = Math.max(res, max)
    }
    console.log(res)
    return res;
};

maxProduct([2, 3, -2, 4, -2, -3])

// maxProduct([2, 3, -2, 4])


// [2, 6, -12, -48, 96, -288]

// max = nums[0]
//首先一个for循环 数组的  Math.max(i*max,nums[i])