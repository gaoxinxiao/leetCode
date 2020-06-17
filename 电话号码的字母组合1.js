/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    let map = new Map([
        ['2', 'abc'],
        ['3', 'def'],
        ['4', 'ghi'],
        ['5', 'jkl'],
        ['6', 'mno'],
        ['7', 'pqrs'],
        ['8', 'tuv'],
        ['9', 'wxyz'],
    ])
    let arr = [];

    backtrack('', 0);
    function backtrack(str, i) {
        if (i == digits.length) {
            arr.push(str);
            return;
        }
        let letters = map.get(digits.charAt(i));
        for (var j = 0; j < letters.length; j++) {
            backtrack(str + letters.charAt(j), i + 1)
        }
    }
};

letterCombinations('23');