/**
 * @param {number[]} nums
 * @return {number[][]}
 */

//1.双指针解法 首先判断当k>0 直接break；  j>i>k>0 直接跳出 continue 
//2.将i和j放到数组的两端 i放到k的相邻的右侧位置
//3.sum < 0 ++i 并且过滤掉重复的数据
//4.sum > 0 --j 并且过滤掉重复的数据
//5.sum == 0 push到数组中 并且过滤掉已经push的数据

var threeSum = function (nums) {
    var arr = [];
    nums.sort((a,b)=> a-b)
    for (var k = 0; k < nums.length-2; k++) {
        if (nums[k] > 0) break;
        if (k > 0 && nums[k] == nums[k-1]) continue;
        var i = k + 1, j = nums.length - 1;

        while (i < j) {
            var sum = nums[k] + nums[i] + nums[j];
            if (sum < 0) {
                while (i < j && nums[i] == nums[++i]);
            } else if (sum > 0) {
                while (i < j && nums[j] == nums[--j]);
            } else {
                arr.push([nums[i],nums[j],nums[k]]);
                while (i < j && nums[i] == nums[++i]);
                while (i < j && nums[j] == nums[--j]);
            }
        }
    }
    return arr;
};