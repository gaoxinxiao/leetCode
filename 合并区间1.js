
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
//1、先排序得到一个升序的序列
//2、把数组中第一组数据存到数组里面之后每次拿数组最后一个区间的右端点和当前遍历的区间的左端点判断 
//3、如果当前左端点大于右端点证明没有区间push到数组中
//4、如果当前左端点小于右端点证明有区间我们需要当前区间的右端点更新数组最后一个区间的右端点，将其设置为一个最大值

var merge = function (intervals) {
    if (!intervals.length) return intervals
    intervals.sort((a, b) => a[0] - b[0]);
    let arr = [intervals[0]];
    for (var i = 1; i < intervals.length; i++) {
        if (intervals[i][0] > arr[arr.length - 1][1]) {
            arr.push(intervals[i])
        } else {
            arr[arr.length - 1][1] = Math.max(arr[arr.length - 1][1], intervals[i][1])
        }
    }
    return arr;
};

function merge(intervals) {
    if (!intervals.length) return intervals
    intervals.sort((a, b) => a[0]-b[0])
    var prev = intervals[0]
    var res = [prev]
    for (var curr of intervals) {
       
        if (curr[0] <= prev[1]) {
            prev[1] = Math.max(prev[1], curr[1])
        } else {
            res.push(curr)
            prev = curr
        }
    }
    return res
}
console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]]))
