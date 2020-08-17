//回溯
var exist = function (board, word) {
    //1.取到行和列的总数
    let row = board.length;
    let col = board[0].length;

    //2.判断当前项是否匹配word中的字符进行回溯
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (board[i][j] === word[0]) {
                let exact = _exist(board, word, i, j, {});
                if (exact) return true;
            }
        }
    }
    return false;
    function _exist(board, word, row, col, visited) {
        //3.当word全部匹配之后返回true
        if (!word.length) return true;

        let key = `${row}-${col}`;
        //4.terminator  边界条件 越界、之前访问过、单词首字母和当前元素不同的都返回false
        if (
            row < 0 || row >= board.length ||
            col < 0 || col >= board[0].length ||
            visited[key] || board[row][col] !== word[0]
        ) {
            return false
        }
        visited[key] = true
        word = word.slice(1)
        //5.进行四联通查找顺序不分先后
        let result = _exist(board, word, row + 1, col, visited) ||
            _exist(board, word, row - 1, col, visited) ||
            _exist(board, word, row, col + 1, visited) ||
            _exist(board, word, row, col - 1, visited);
        visited[key] = result;
        return result
    }

}
exist(
    [
        ["A", "B", "C", "E"],
        ["S", "F", "C", "S"],
        ["A", "D", "E", "E"]
    ]
    , 'ABCB');