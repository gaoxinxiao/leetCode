/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
//递归回溯
var combinationSum = function (candidates, target) {
    let res = [];
    candidates.sort((a, b) => a - b)
    backtrack(target, [], 0);
    function backtrack(target, currt, start) {
        //terminator
        if (target < 0) return;
        if (target == 0) {
            res.push(currt);
            return;
        }
        for (var i = start; i < candidates.length; i++) {
            if (candidates[i]>target) break;
            currt.push(candidates[i]);
            backtrack(target - candidates[i], currt.slice(), i);
            currt.pop();
        }
    }
    return res;
};

combinationSum([2, 3, 6, 7], 7);