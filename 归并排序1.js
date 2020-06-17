

/**
 * @param {number[]} nums
 * @return {number[]}
 */

//1.归并排序采用分治思想把数组分成一个单一的数组然后比数组的大小在进行合并
//2.时间复杂度为O(nlogn) 分解的时候 是logn 的复杂度 合并的时候是On的复杂度
var sortArray = function (nums) {
    if (nums.length==1) return nums;
    //分开数组
    let mid = parseInt(nums.length / 2);
    let left = nums.slice(0, mid);
    let right = nums.slice(mid, nums.length);
    let larr = sortArray(left);
    let rarr = sortArray(right);

    //合并数组
    function mergeSort(l, r) {
        let arr = [];
        while (l.length && r.length) {
            if (l[0] < r[0]) {
                arr.push(l.shift());
            } else {
                arr.push(r.shift());
            }
        }
        while(l.length) arr.push(l.shift());
        while(r.length) arr.push(r.shift());
        return arr;
    }
    return mergeSort(larr, rarr)
};


console.log(sortArray([5, 1, 1, 2, 0, 0]));