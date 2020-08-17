var arr = [2, 3, 1, 4, 5, 6, 1];

function sortArr(arr) {
    if (arr.length < 2) return arr;
    let index = Math.floor(arr.length / 2);
    let base = arr.splice(index, 1)
    let left = [];
    let right = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < base) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return sortArr(left).concat(base, ...sortArr(right));
}
console.log(sortArr(arr))