
let arr = [1,2,3,4,5,6,7,8]
//1.二分查找首先保证数据的的有序性 单调升序
//2.每次一组数据一分为二，小于当前查找的target 可以left++ 相反right-- 如果等于target直接返回下标

function find(list, target) {
    let left = 0, right = list.length - 1;
    while (left <= right) {
        let mid = parseInt((left + right) / 2);
        if (list[mid] === target) {
            return mid;
        } else if (list[mid]<target){
            left++;
        } else {
            right--;
        }
    }
    return -1;
}

console.log(find(arr, 1))