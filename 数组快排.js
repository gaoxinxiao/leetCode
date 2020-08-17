/**
 * @param {number[]} nums
 * @return {number[]}
 */
//1.数组快排找到一个中间值 根据中间值作比较如果大的 放在右面数组 小的放在左面数据 最后在合并
//2.时间复杂度为O(nlogn)
var sortArray = function (nums) {
    if (nums.length <= 1) return nums;
    var index = Math.floor(nums.length / 2);
    var base = nums.splice(index, 1);
    var left = [], right = [];
    for (var i = 0; i < nums.length; i++) {
        if (nums[i]<base){
            left.push(nums[i]);
        } else {
            right.push(nums[i]);
        }
    }
    return sortArray(left).concat(base,...sortArray(right))
};

console.log(sortArray([5, 1, 1, 2, 0, 0]))