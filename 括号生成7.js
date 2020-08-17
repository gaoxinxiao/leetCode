/**
 * @param {number} n
 * @return {string[]}
 */
//括号生成递归加减枝
var generateParenthesis = function (n) {
    let arr = []
    _generate(0, 0, n, '')
    function _generate(l, r, max, s) {
        //terminator
        if (l == max && r == max) {
            arr.push(s)
            return
        }
        if (l <= max) {
            _generate(l + 1, r, max, s + "(")
        }
        //减枝右括号数量必须小于或者等于左括号数量
        if (r <l) {
            _generate(l, r + 1, max, s + ")")
        }
    }
    return arr
};
generateParenthesis(3)