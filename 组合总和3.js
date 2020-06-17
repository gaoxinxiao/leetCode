/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

//1.递归回溯
//2.升序排序
//3.用数组的值-target 等于0的情况就说明是一组和为target的数据
var combinationSum = function (candidates, target) {
    let res = [];
    backtrack(candidates, target, [],0);
    candidates.sort((a,b) => a-b);
    function backtrack(candidates, target, current,start) {
        //terminator
        if (target < 0) return;
        if (target === 0) {
            res.push(current);
        }
        for (var i = start; i < candidates.length; i++) {
            current.push(candidates[i]);
            backtrack(candidates, target - candidates[i], current.slice(),i);
            current.pop();
        }
    }
    console.log(res)
};

combinationSum([2, 3, 6, 7], 7);