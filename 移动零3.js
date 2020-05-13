/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

 //1.移动下标 i和j替换位置把不是0的数字向前移动

var moveZeroes = function(nums) {
    for (var i=0,j=0;i<nums.length;i++){
        if (nums[i]!=0) {
            nums[j] = nums[i];
            if (i!=j){
                nums[i] = 0;
            }
            j++;
        }
    }
    return nums;
};

moveZeroes([0,1,0,3,12])