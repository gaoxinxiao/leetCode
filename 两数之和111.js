/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let arr = [];
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
        if (arr[diff] !== undefined) {
            return [arr[diff], i]
        }
        arr[nums[i]] = i
    }
    return arr
};
console.log(twoSum([2, 7, 11, 15], 9))