/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
//1.首先对二维数组 行和列进行遍历 如果 opt[i,j] = opt[i,j] == 0 && opt[i-1,][j] == 1 ? 1 : 0
//2.寻找dp方程 if opt[i,j] == 1 {opt[i,j]=0} else {opt[i,j]=opt[i-1,j]+pt[i,j-1]}


var uniquePathsWithObstacles = function (obstacleGrid) {
    var R = obstacleGrid.length; //行
    var C = obstacleGrid[0].length; //列

    //terminator
    if (obstacleGrid[0][0] === 1) return 0;

    obstacleGrid[0][0] = 1

    for (var i = 1; i < R; i++) {
        obstacleGrid[i][0] = obstacleGrid[i][0] == 0 && obstacleGrid[i - 1][0] == 1 ? 1 : 0
    }

    for (var i = 1; i < C; i++) {
        obstacleGrid[0][i] = obstacleGrid[0][i] == 0 && obstacleGrid[0][i - 1] == 1 ? 1 : 0
    }

    for (var i = 1; i < R; i++) {
        for (var j = 1; j < C; j++) {
            if (obstacleGrid[i][j] === 1) {
                //空地
                obstacleGrid[i][j] = 0;
            } else {
                obstacleGrid[i][j] = obstacleGrid[i - 1][j] + obstacleGrid[i][j - 1];
            }
        }
    }
    return obstacleGrid[R - 1][C - 1]
};


uniquePathsWithObstacles([
    [0, 0, 1]
]);