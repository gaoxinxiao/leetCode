/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

//1.递归回溯
var combinationSum = function (candidates, target) {
    let n = candidates.length;
    let res = [];
    let temps = [];
    candidates.sort((a, b) => a - b)
    function backtrack(temps, target, start) {
        if (target < 0) return null;
        if (target === 0) {
            res.push(temps);
            return;
        }
        for (var i = start; i < n; i++) {
            if (target < candidates[i]) break;
            temps.push(candidates[i]);
            backtrack(temps.slice(), target - candidates[i], i);
            temps.pop();
        }
    }
    backtrack(temps, target, 0);
    return res;
};

console.log(combinationSum([2, 3, 6, 7], 7))