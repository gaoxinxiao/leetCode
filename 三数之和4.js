/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//1.三个指针 -k = i+j
var threeSum = function (nums) {
    var arr = [];
    nums.sort((a, b) => a - b);
    for (var k = 0; k < nums.length - 2; k++) {
        if (nums[k] > 0) break; // because j>=i>k
        if (k > 0 && nums[k] == nums[k - 1]) continue;
        var i = k + 1, j = nums.length - 1;
        while (i < j) {
            let sum = nums[i] + nums[j] + nums[k];
            if (sum < 0) {
                while (i < j && nums[i] == nums[++i]);
            } else if (sum > 0) {
                while (i < j && nums[j] == nums[--j]);
            } else {
                arr.push([nums[i], nums[j], nums[k]]);
                while (i < j && nums[i] == nums[++i]);
                while (i < j && nums[j] == nums[--j]);
            }
        }
    }
    return arr;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]))