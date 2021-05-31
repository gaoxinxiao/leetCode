/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if (digits == '') return []
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
    let list = []
    comb('', 0)
    function comb(str, index) {
        if (index === digits.length) {
            list.push(str)
            return
        }
        let letter = map.get(digits[index])
        for (let i = 0; i < letter.length; i++) {
            comb(str+letter[i], index + 1)
        }
    }
    return list
};
letterCombinations("23")