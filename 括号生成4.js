/**
 * @param {number} n
 * @return {string[]}
 */
//递归+剪枝
var generateParenthesis = function (n) {
    let arr = []
    _generate(0, 0, n, '')
    function _generate(l, r, max, s) {
        if (l === max && r === max) {
            arr.push(s)
            return
        }
        if (l < max) {
            _generate(l + 1, r, max,  s+"(")
        }
        //剪枝 r 的数量一定小于l 因为 r多少个是有l决定的
        if (r<l){
            _generate(l, r + 1, max, s + ")")
        }
    }
    return arr
};
generateParenthesis(3)