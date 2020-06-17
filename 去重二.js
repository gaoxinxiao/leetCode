
function sort(arr) {
    var Arr = [];
    var repArr = [];
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (Arr.indexOf(arr[i]) == -1) {
            Arr.push(arr[i])
            newArr.push(arr[i])
        } else {
            if (repArr.indexOf(arr[i]) == -1) {
                repArr.push(arr[i])
                newArr.push(arr[i])
            }
        }
    }
    return newArr;
}
//[1,2,1,2,3]
sort([1, 2, 1, 2, 1, 3, 2]);


//评测题目1: 设计一个function， 实现 从数组中删除重复超过2次的元素。
// 例如 A = [1,1,1,2,2,3],预期 [1,1,2,2,3]
// 例如 A = [1,2,1,2,1,3,2],预期 [1,2,1,2,3]




// 评测题目2: 实现一个LazyPig，可以按照以下方式调用:
/* LazyPig("Peggy")输出:
Hello，I'm Peggy！

LazyPig("Peggy").sleep(10).eat("dinner")输出
Hello，I'm Peggy！
//等待10秒..
Eat dinner~

LazyPig("Peggy").eat("dinner").eat("supper")输出
Hello，I'm Peggy！
Eat dinner~
Eat supper~

以此类推。
*/
