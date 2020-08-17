
var exist = function (board, word) {
    //1.取到二维数组中的行和列
    const row = board.length;//行
    const col = board[0].length;//列
    //2.循环行和列拿到当前的位置 和word中第一个字符匹配 如果匹配到了 返回true 否则 false
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (board[i][j] === word[0]) {
                const isExact = _exist(board, word, i, j, {});
                if (isExact) return true;
            }
        }
    }
    return false;
    function _exist(board, word, row, col, visited) {
        //3.word.length等于0的情况下证明所有单词都被搜索到了 返回true
        if (!word.length) {
            return true;
        }
        const key = `${row}-${col}`;
        //4.边界条件越界、之前访问过、单词首字母和当前元素不相同，返回false
        if (
            row >= board.length || row < 0 ||
            col >= board[0].length || col < 0 ||
            visited[key] || board[row][col] !== word[0]
        ) {
            return false;
        }
        visited[key] = true;
        word = word.slice(1);
        //5.进行当前比配单词的上下左右搜索 
        const res = _exist(board, word, row + 1, col, visited) ||
            _exist(board, word, row - 1, col, visited) ||
            _exist(board, word, row, col + 1, visited) ||
            _exist(board, word, row, col - 1, visited);
        //6.res为false的时候进行回溯
        visited[key] = res;
        return res;
    }
};
exist(
    [
        ['A', 'B', 'C', 'E'],
        ['S', 'F', 'C', 'S'],
        ['A', 'D', 'E', 'E']
    ]
    , 'ABCCED');
