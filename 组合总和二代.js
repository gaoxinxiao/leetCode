/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
//1.递归回溯 保证每个值只使用一次
//2.target -数组中的值 并且记载减掉值的下标  如果正好==0 说明是一组等于8 的数据放到数组中并且把start更新为最近的i 如果<0说明已经超了 在重新递归并且使用最新start
var combinationSum2 = function (candidates, target) {
    //[ 1, 1, 2, 5, 6, 7, 10 ]
    let result = [];
    candidates.sort((a, b) => a - b);
    backtrack(candidates, target, [], 0);

    function backtrack(candidates, target, current, start) {
        //terminator
        if (target === 0) {
            result.push(current);
            return;
        }

        for (var i = start; i < candidates.length; i++) {
            if (target - candidates[i] < 0) break;
            if (i > start && candidates[i] == candidates[i - 1]) continue;
            current.push(candidates[i]);
            backtrack(candidates, target - candidates[i], current.slice(), i + 1);
            current.pop();
        }
    }
    console.log(result)
};

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
