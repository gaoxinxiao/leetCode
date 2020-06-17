/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let arr = [];
    while (nums1.length && nums2.length) {
        if (nums1[0] < nums2[0]) {
            arr.push(nums1.shift())
        } else {
            arr.push(nums2.shift())
        }
    }
    while (nums1.length) arr.push(nums1.shift());
    while (nums2.length) arr.push(nums2.shift());

    if (arr.length%2 === 0){
        let index = Math.floor(arr.length / 2);
        return (arr[index] + arr[index-1])/2;
    } else {
        let index = Math.floor(arr.length / 2);
        return arr[index];
    }
};



findMedianSortedArrays([1, 2], [3,4]);