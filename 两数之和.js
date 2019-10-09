

/**
 * 实现思想 
 * 通过for循环第一次遍利数据 进行比较 第一层for循环的第一个i 来比较第二层for循环的j 一一对比 跟入参相等的返回 
 *  */

var twoSum = function(nums, target) {
    var arr = []
    for(var i=0;i<nums.length;i++){
        for (var j=i+1;j<nums.length;j++){
            if (nums[i]+nums[j] == target) {
                arr[0] = i
                arr[1] = j
                return arr
            }
        }
    }
    return []
};

twoSum([3,3],6)


