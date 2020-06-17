/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
//递归回溯+剪枝
//1.使用target-数组中的每一个值 等于0的情况证明一组符合的数据放到数组中 小于0说明超了 current 数组减掉当前push 的值
var combinationSum2 = function (candidates, target) {
    var res = [];
    candidates.sort((a, b) => a - b);
    backtrack(target, [], 0);
    function backtrack(target, currt, start) {
        //terminator
        if (target < 0) return;
        if (target == 0) {
            res.push(currt);
        }
        for (var i = start; i < candidates.length; i++) {
            if (candidates[i] > target) break;

            if (i > start && candidates[i] == candidates[i - 1]) continue;

            currt.push(candidates[i]);
            backtrack(target - candidates[i], currt.slice(), i+1);
            currt.pop();
        }
    }
    return res
};

combinationSum2([10, 1, 2, 7, 6, 1, 5], 8);