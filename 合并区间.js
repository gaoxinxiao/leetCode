/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (a) {
    if (!a.length) return []; 
    let arr = [];
    a.sort((a, b) => a[0] - b[0]);
    arr = [a[0]];
    for (var i = 1; i < a.length; i++) {
        if (arr[arr.length - 1][1] < a[i][0]) {
            arr.push(a[i]);
        } else {
            arr[arr.length - 1][1] = Math.max(arr[arr.length - 1][1],a[i][1])
        }
    }
    return arr;
};
console.log(merge([[0, 4], [1, 4]]))