/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    // j代表行
    // i代表列
    let R = obstacleGrid.length;
    let C = obstacleGrid[0].length;

    if (obstacleGrid[0][0] == 1) {
        return 0;
    }
    obstacleGrid[0][0] = 1;
    for (var i = 1; i < R; i++) {
        obstacleGrid[i][0] = (obstacleGrid[i][0] == 0 && obstacleGrid[i - 1][0] == 1) ? 1 : 0;
    }
    for (var i = 1; i < C; i++) {
        obstacleGrid[0][i] = (obstacleGrid[0][i] == 0 && obstacleGrid[0][i - 1] == 1) ? 1 : 0;
    }
    for (var i = 1; i < R; i++) {
        for (var j = 1; j < C; j++) {
            if (obstacleGrid[i][j] == 0) {
                obstacleGrid[i][j] = obstacleGrid[i - 1][j] + obstacleGrid[i][j - 1]
            } else {
                obstacleGrid[i][j] = 0
            }
        }
    }
    return obstacleGrid[R-1][C-1]
};
uniquePathsWithObstacles([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0]
])