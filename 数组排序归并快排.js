var arr = [5, 2, 3, 1];

// //归并排序：采用分治思想
// //1.首先分解数组分成每一个单独独立的
// //2.比较数组的值放到一个新数组 里面

// function mergeSort(list) {
//     let len = list.length;
//     if (list.length === 1) return list;
//     let mid = parseInt(len / 2);
//     let left = list.slice(0, mid);
//     let right = list.slice(mid, len);
//     let mergeSortLeft = mergeSort(left);
//     let mergeSortRight = mergeSort(right);
//     return sortArray(mergeSortLeft, mergeSortRight);
// }
// function sortArray(l, r) {
//     const result = [];
//     while (l.length && r.length) {
//         if (l[0] < r[0]) {
//             result.push(l.shift());
//         } else {
//             result.push(r.shift());
//         }
//     }
//     //将剩下的元素加上
//     while (l.length) result.push(l.shift());
//     while (r.length) result.push(r.shift());
//     return result;
// }

// mergeSort(arr)


// let arr = [1, 2, 3, 4], brr = [3, 5, 6, 7];

// function sort(l, r) {
//     const result = [];
//     while (l.length && r.length) {
//         if (l[0] < r[0]) {
//             result.push(l.shift());
//         } else {
//             result.push(r.shift());
//         }
//     }
//     //将剩下的元素加上
//     while (l.length) result.push(l.shift());
//     while (r.length) result.push(r.shift());
//     return result;
// }


// function kuaipai(list) {
//     if (list.length <= 1) { return list; }
//     var index = Math.floor(list.length / 2);
//     var base = list.splice(index, 1)[0];
//     let left = [];
//     let right = [];
//     for (var i = 0; i < list.length; i++) {
//         if (list[i] < base) {
//             left.push(list[i])
//         } else {
//             right.push(list[i])
//         }
//     }
//     return kuaipai(left).concat([base],kuaipai(right));
// }
// console.log(kuaipai(arr))