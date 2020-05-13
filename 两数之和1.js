var twoSum = function (nums, target) {
    let arr = [];
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if(nums[i]+nums[j] == target){
                arr[0] = i; 
                arr[1] = j; 
                return arr;
            }
        }
    }
    return [];
};

console.log(twoSum([3, 3], 6))
