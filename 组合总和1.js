/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

//1.递归回溯
var combinationSum = function (candidates, target) {
    let list = [];
    backtrack(candidates, target, [],0);
    function backtrack(candidates, target, current,start) {
        if (target < 0) return;
        if (target == 0) {
            list.push(current);
            return;
        }
        for (var i = start; i < candidates.length; i++) {
            current.push(candidates[i]);
            backtrack(candidates, target - candidates[i], current.slice(),i);
            current.pop()
        }
    }
    return list;
};

console.log(combinationSum([2, 3, 6, 7], 7))