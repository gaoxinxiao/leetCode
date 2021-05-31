/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    if (intervals.length === 0) return []
    intervals.sort((a,b)=> a[0]-b[0])
    let arr = [intervals[0]];
    for (let i = 1; i < intervals.length; i++) {
        if (arr[arr.length-1][1]<intervals[i][0]){
            arr.push(intervals[i])
        } else {
            arr[arr.length-1][1] = Math.max(arr[arr.length-1][1],intervals[i][1])
        }
    }
    console.log(arr)
    return arr
};
merge([[1,4],[0,4]])
