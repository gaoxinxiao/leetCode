/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

//1.使用j记载第一个不为0的位置 前移

var moveZeroes = function (nums) {
    for (var i = 0, j = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            nums[j] = nums[i];
            if (i != j) {
                nums[i] = 0;
            }
            j++;
        }
    }
    return nums;
};

//2.把数组的位置全部向前移动清除0

var moveZeroes1 = function (nums) {
    for (var i = 0, j = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            nums[j] = nums[i]
            j++;
        }
    }
    for (var i = j; i < nums.length; i++) {
        nums[i] = 0;
    }
    return nums
};



console.log(moveZeroes1([1, 2, 0, 4, 5]))