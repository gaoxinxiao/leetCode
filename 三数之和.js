/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//1.循环遍历三次数组 然后三个数相加如果等于0就push到一个数组 最后给数组里面的三元组去重 (目前去重还是失败的)
var threeSum = function (nums) {
    let arr = [];
    nums.sort((a, b) => a - b);
    for (var i = 0; i < nums.length - 2; i++) {
        for (var j = i + 1; j < nums.length - 1; j++) {
            for (var k = j + 1; k < nums.length; k++) {
                if (nums[i] + nums[j] + nums[k] === 0) {
                    arr.push([nums[i], nums[j], nums[k]])
                }
            }
        }
    }
    return arr
};


var threeSum1 = function (nums) {
    let arr = [];
    nums.sort((a, b) => a - b);
    for (var k = 0; k < nums.length-2; k++) {
        if (nums[k] > 0) break;
        if (k > 0 && nums[k] == nums[k - 1]) continue;
        let i = k + 1, j = nums.length - 1;
        while (i < j) {
            let sum = nums[k] + nums[i] + nums[j];
            if (sum < 0) {
                while (i < j && nums[i] == nums[++i]);
            } else if (sum > 0) {
                while (i < j && nums[j] == nums[--j]);
            } else {
                arr.push([nums[k], nums[i], nums[j]]);
                while (i < j && nums[i] == nums[++i]);
                while (i < j && nums[j] == nums[--j]);
            }
        }
    }
    return arr;
};
console.log(threeSum1([-1, -1,1,0]))

//孙玉成