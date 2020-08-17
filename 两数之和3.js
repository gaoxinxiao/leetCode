var twoSum = function (nums, target) {
    let arr = [];
    for (var i = 0; i < nums.length; i++) {
        let dfs = target - nums[i]
        if (arr[dfs] != undefined) {
            return [arr[dfs], i]
        }
        arr[nums[i]] = i
    }
};

console.log(twoSum([3, 3], 6))
