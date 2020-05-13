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
    defs('', digits, 0, arr, map);
    function defs(s, digits, i, arr, map) {
        //terminator 边界条件
        if (i == digits.length) {
            arr.push(s);
            return;
        }
        let letters = map.get(digits.charAt(i));
        for (var j = 0; j < letters.length; j++) {
            //drill down 调用自身
            defs(s + letters.charAt(j), digits, i + 1, arr, map);
        }
    }
    return arr;
};

letterCombinations('23')
