/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

var merge = function (intervals) {
    if (!intervals.length) return [];
    intervals.sort((a, b) => a[0] - b[0]);
    let arr = [intervals[0]];
    for (var i = 1; i < intervals.length; i++) {
        if (arr[arr.length-1][1] < intervals[i][0]) {
            arr.push(intervals[i]);
        } else {
            arr[arr.length-1][1] = Math.max(intervals[i][1], arr[arr.length-1][1]);
        }
    }
    return arr;
};
merge([[1, 3], [2, 6], [8, 10], [15, 18]])