/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let arr = []
    _generate(0, 0, n, '')
    function _generate(l, r, max, s) {
        if (l == max && r == max) {
            arr.push(s)
            return 
        }
        if(l<max){
            _generate(l + 1, r, max, s + '(')
        }
        if (l>r){
            _generate(l, r + 1, max, s + ')')
        }
    }
    console.log(arr)

};
generateParenthesis(3)