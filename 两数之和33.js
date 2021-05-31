/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//1.target - nums[i]
var twoSum = function (nums, target) {
    let arr = []
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i]
        //diff =7
        //nums[i] = 2
        //i=0
        //arr = []
        if (arr[diff]!=null) {
            return [arr[diff], i]
        }
        arr[nums[i]] = i
    }
};

console.log(twoSum([2, 7, 11, 15], 9))
//去数组中查找当前符合当前差值的下标

