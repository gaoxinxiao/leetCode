/**
 * @param {number[]} nums
 * @return {number}
 */
//dp[i] = Math.max(dp[i]+dp[i-2], dp[i-1])
var rob = function (nums) {
    if (nums.length <= 1) return nums;
    nums[1] = Math.max(nums[0], nums[1]);
    for (var i = 2; i < nums.length; i++) {
        nums[i] = Math.max(nums[i - 2] + nums[i], nums[i - 1])
    }
    return Math.max.apply(null,nums)
};
rob([2, 1, 1, 2]);


