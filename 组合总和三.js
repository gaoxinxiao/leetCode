/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 给定一个由正整数组成且不存在重复数字的数组，找出和为给定目标正整数的组合的个数。
示例:
nums = [1, 2, 3]
target = 4
所有可能的组合为：
(1, 1, 1, 1)
(1, 1, 2)
(1, 2, 1)
(1, 3)
(2, 1, 1)
(2, 2)
(3, 1)
请注意，顺序不同的序列被视作不同的组合。
因此输出为 7。
 */


//1.递归
// var combinationSum4 = function (nums, target) {
//     var ans = 0;
//     nums.sort((a, b) => a - b);
//     backtrack(nums, 0, 0);
//     function backtrack(nums, start, count) {
//         //terminator
//         if (count > target) return;
//         if (target == count) {
//             ans++;
//             return;
//         }
//         //process in logic current
//         for (var i = start; i < nums.length; i++) {
//             count += nums[i];
//             backtrack(nums, start, count);
//             count -= nums[i];
//         }
//         //drill down
//     }
//     return ans;
// };

// var combinationSum41 = function (nums, target) {
//     let dp = new Array(target + 1).fill(0);
//     dp[0] = 1;
//     for (let i=1;i<=target;i++) {
//         for (let num of nums){
//             if (i>=num){
//                 dp[i]+=dp[i-num]
//             }
//         }
//     }
//     return dp[target]
// };


// combinationSum41([1, 2, 3], 4);