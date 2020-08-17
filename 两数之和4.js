/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let arr = []
    for (let i = 0; i < nums.length; i++) {
        let defs = target - nums[i]
        //去数组中找差值找到直接返回否则 往数组添加
        if (arr[defs] != undefined) {
            return [arr[defs], i]
        }
        arr[nums[i]] = i
    }
};

console.log(twoSum([2, 7, 11, 15], 9))

