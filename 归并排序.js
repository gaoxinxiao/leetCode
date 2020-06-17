var arr = [1, 2, 3, 4, 5, 8, 6, 9, 7];



var sort = function (arr) {
    if (arr.length <= 1) return arr;
    let ind = Math.floor(arr.length / 2);
    let left = arr.slice(0, ind);
    let right = arr.slice(ind, arr.length);
    let leftArr = sort(left)
    let rightArr = sort(right)
    console.log(leftArr)
    function merge(left, right) {
        let arr = [];
        while (left.length && right.length) {
            if (left[0] < right[0]) {
                arr.push(left.shift())
            } else {
                arr.push(right.shift())
            }
        }
        while (left.length) arr.push(left.shift());
        while (right.length) arr.push(right.shift());
        return arr;
    }
    return merge(leftArr, rightArr)
}

sort(arr)