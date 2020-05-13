


var twoSum = function(nums, target) {
    var arr = []
    for(var i=0;i<nums.length;i++){
        var difs = target - nums[i];//取出差值
        //证明里面有这个值
        if (arr[difs]!=undefined){
            return [arr[difs],i]
        }
        arr[nums[i]] = i
    }
};

console.log(twoSum([10,7,2,15],9))
