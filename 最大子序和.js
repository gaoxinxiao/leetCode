/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    for (var i = 1; i < nums.length; i++) {
        nums[i] = Math.max(0, nums[i - 1]) + nums[i];
    }
    return Math.max.apply(null, nums);
};
maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);


