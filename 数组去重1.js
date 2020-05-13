

function Fn(nums){
    let obj = {};
    let arr = [];
    for (let i=0;i<nums.length;i++){
        if (!obj[nums[i]]){
            arr.push(nums[i])
            obj[nums[i]] = 'gxx'
        }
    }
    console.log(arr)
}

Fn([1,3,3,2,1,34,5,34,34])