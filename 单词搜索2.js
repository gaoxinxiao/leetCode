/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    const row = board.length;
    const col = board[0].length;

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (board[i][j] === word[0]) {
                let flag = _exist(board, word, i, j, {});
                if (flag) return true;
            }
        }
    }
    return false;

    function _exist(board, word, row, col, visited) {
        if (!word.length) return true;
        let key = `${row}-${col}`;
        //边界条件 越界、当前的值已经使用过、当前计算的值不等于word中第一个值 返回false
        if (
            row < 0 || row >= board.length ||
            col < 0 || col >= board[0].length ||
            visited[key] || board[row][col] !== word[0]
        ) {
            return false;
        }
        visited[key] = true;
        word = word.slice(1);
        //进行四联通查找
        let result = _exist(board, word, row + 1, col, visited) || _exist(board, word, row - 1, col, visited) || _exist(board, word, row, col + 1, visited) || _exist(board, word, row, col - 1, visited);
        visited[key] = result;
        return result;
    }
};
exist([
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E']
], 'ABCCED');