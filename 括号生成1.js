/**
 * @param {number} n
 * @return {string[]}
 */
//1、暴力解法 可以先不看生成出来的括号是否合法直接全部输出
//2、最后在filter数组里不合法的括号
var generateParenthesis = function (n) {
    var arr = [];
    _generate(0, 2 * n, '');
    function _generate(level, max, s) {
        //terminator 边界条件
        if (level >= max) {
            arr.push(s);
            return;
        }
        //process logic in current level 当前这层逻辑
        let s1 = s + "(";
        let s2 = s + ")";

        //drill down 调用自身
        _generate(level + 1, max, s1);
        _generate(level + 1, max, s2);
    }
};



/**
 * @param {number} n
 * @return {string[]}
 */
//1、在递归的时候就判断括号是否合法 当left == n说明已经用完了 左括号
var generateParenthesis1 = function (n) {
    var arr = [];
    _generate(0, 0, n, '');
    function _generate(left, right, n, s) {
        //terminator 边界条件
        if (left == n && right == n) {
            arr.push(s);
            return;
        }
        //process logic in current level 当前这层逻辑
        if (left < n) {
            _generate(left + 1, right, n, s + "(")
        }
        if (left > right) {
            _generate(left, right + 1, n, s + ")")
        }
        //drill down 调用自身
    }
    return arr;
};
console.log(
    generateParenthesis1(3))
