/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//1.排序(升序)+双指针
//2.在数组首位加k，k相邻的右面加i，数组末尾加j
//3.因为 j>=i>k k已经是首位 所以 k>0可以直接break;
//4.过滤掉有重复的数据 比如 【-1，-1，-1，1】 从第一个-1 如果不符合 就直接过滤掉剩下的-1直接到1开始计算
//5.如果nums[i]+nums[j] < 0说明i较小了 就++i,反之 --j

var threeSum = function (nums) {
    var arr = [];
    nums.sort((a, b) => a - b);
    for (var k = 0; k < nums.length; k++) {
        if (nums[k] > 0) break;
        if (k > 0 && nums[k] == nums[k - 1]) continue;//nums[k] == nums[k-1]证明当前元素和上一个元素一样可以直接跳过
        var i = k + 1, j = nums.length - 1;
        while (i < j) {
            var sum = nums[k] + nums[i] + nums[j];
            if (sum < 0) {
                while (nums[i] == nums[++i]);
            } else if (sum > 0) {
                while (nums[j] == nums[--j]);
            } else {
                arr.push([nums[i], nums[j], nums[k]]);
                while (nums[i] == nums[++i]);
                while (nums[j] == nums[--j]);
            }
        }
    }
    return arr;
};
console.log(threeSum([-1, 0, 1, 2, -1, -4]))