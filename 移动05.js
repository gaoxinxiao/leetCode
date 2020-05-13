/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
//1.维护一个下标j
var moveZeroes = function (nums) {
    for (var i = 0, j = 0; i < nums.length; i++) {
        if (nums[i]!=0){
            nums[j] = nums[i];
            j++;
        }
    }
    for (var i=j;i<nums.length;i++){
        nums[i] = 0;
    }
    return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));