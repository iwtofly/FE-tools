/**
 * 最小编辑距离（Levenshtein Distance 莱文斯坦距离）实现
 * @params target 目标字符串, 长m
 * @params source 源字符串, 长n
 * 求解他们之间的最小距离
 */
function minEditDistance(target, source) {
    var m = target.length;
    var n = source.length;

    // 需要构造一个(m+1) * (n+1)的矩阵，矩阵的最后一个值 matrix[m][n]即为最小距离
    var matrix = [];
    // 初始化matrix的第一列
    for (var i = 0; i <= m; i++) {
        matrix.push([i]);
    }
    // 初始化matrix的第一行
    for (var i = 0; i <= n; i++) {
        matrix[0][i] = i;
    }

    // 开始计算矩阵
    for (var i = 1; i <= m; i++) {
        for (var j = 1; j <= n; j++) {
            var above = matrix[i-1][j] + 1;
            var left = matrix[i][j-1] + 1;
            var temp = matrix[i-1][j-1] + (target[i - 1] === source[j - 1] ? 0 : 1);
            matrix[i][j] = Math.min(above, left, temp);
        }
    }

    return matrix[m][n];
    
}