const arr = [
    [1, 2, 2],
    [3, 4, 5, 5],
    [6, 7, 8, 9, [11, 12, [12, 13, [14]]]],
    10,
];

//暴力解法 递归

function flat(nums, arr) {
    for (var i = 0; i < nums.length; i++) {
        if (Array.isArray(nums[i])) {
            flat(nums[i], arr);
            continue;
        }
        arr.push(nums[i])
    }
    return arr;
}

const list = flat(arr, []);

function set(nums) {
    var stack = [];
    for (var i = 0; i < nums.length; i++) {
        if (stack[stack.length - 1] != nums[i]) {
            stack.push(nums[i]);
        }
    }
    return stack;
}

const newArr = set(list);

function sort(nums) {
    var temp;
    for (var i = 0; i < nums.length - 1; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] > nums[j]) {
                temp = nums[j];
                nums[j] = nums[i];
                nums[i] = temp;
            }
        }
    }
    return nums;
}
console.log(sort(newArr))