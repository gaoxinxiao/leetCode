
let arr = [1, 2, 3, 2, 3, 1];

function set(arr) {
    let list = [];
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (!obj[arr[i]]) {
            list.push(arr[i])
            obj[arr[i]] = 'gxx'
        }
    }
    return list
}
console.log(set(arr))
