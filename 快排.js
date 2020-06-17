var arr = [1, 2, 3, 4, 5, 8, 6, 9, 7];

var sortArray = function (arr) {
    if (arr.length <= 1) return arr;
    let index = Math.floor(arr.length / 2);
    let base = arr.splice(index, 1);
    let left = [];
    let right = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < base) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return sortArray(left).concat(base, ...sortArray(right))
}

console.log(sortArray(arr))