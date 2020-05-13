/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//1.先排序
//2.两个下标i,j分别放在 k的相邻右面 和最后一位
//3.如果nums[k] >0 说明所有数都是大于0 直接break; 因为数组是排序过的 j>=i>k>0
//4.过滤掉重复的数据 比如[-1,-1,1]如果第一个-1 不符合的话直接跳到1
//5.因为是排序好的数据如果加起来小于0说明i偏小了 所以++i 
var threeSum = function (nums) {
    nums.sort((a, b) => a - b);
    var arr = [];
    for (var k = 0; k < nums.length-2; k++) {
        if (nums[k] > 0) break;
        if (k > 0 && nums[k] == nums[k - 1]) continue;
        let i = k + 1, j = nums.length - 1;
        while (i < j) {
            let sums = nums[i] + nums[j] + nums[k];
            if (sums < 0) {
                while (i < j && nums[i] == nums[++i]);//过滤掉重复计算的数据
            } else if (sums > 0) {
                while (i < j && nums[j] == nums[--j]);//过滤掉重复计算的数据
            } else {
                arr.push([nums[i], nums[j], nums[k]])
                while (i < j && nums[i] == nums[++i]);//过滤掉重复计算的数据
                while (i < j && nums[j] == nums[--j]);//过滤掉重复计算的数据
            }
        }  
    }
    return arr;
};

threeSum([-1, 0, 1, 2, -1, -4])