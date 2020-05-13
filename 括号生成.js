/**
 * @param {number} n
 * @return {string[]}
 */
//1. 可以先不考虑合法性把括号都输出出来  假设有n个括号 那么总数就是 2n 相当于一个括号是两边组成所以是2 然后又n个 就是 2n
//2.需要过滤不合法的括号
//3.在判断递归条件的时候 如果n==left （左括号的个数说明左括号到头了）
//4.right一定是比left个数要少的 因为 right 永远在left右面 

var generateParenthesis = function (n) {
    let arr = [];
    function _generate(left, right, n, s) {
        //证明快结束了
        if (n == left && n == right) {
            arr.push(s);
            return;
        }
        if (left < n) {
            _generate(left + 1, right, n, s + "(")
        }
        if (left > right) {
            _generate(left, right + 1, n, s + ")")
        }
    }
    _generate(0, 0, n, '');
    return arr;
};


generateParenthesis(3)