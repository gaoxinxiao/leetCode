/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if (digits.length == 0) return []

    let map = new Map([
        [
            '2', 'abc'
        ], [
            '3', 'def'
        ], [
            '4', 'ghi'
        ], [
            '5', 'jkl'
        ], [
            '6', 'mno'
        ], [
            '7', 'pqrs'
        ], [
            '8', 'tuv'
        ], [
            '9', 'wxyz'
        ]
    ])
    let arr = [];
    defs('', 0);
    function defs(s, i) {
        //terminator 边界条件
        if (i == digits.length) {
            arr.push(s);
            return;
        }
        let letters = map.get(digits.charAt(i));
        for (var j = 0; j < letters.length; j++) {
            //drill down 调用自身
            defs(s + letters.charAt(j), i + 1);
        }
    }
    return arr;
};

console.log(letterCombinations('235'))
