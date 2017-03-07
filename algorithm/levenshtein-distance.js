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
    for (var i = 1; i <= n; i++) {
        matrix[0][i] = i;
    }

    // 开始计算矩阵
    for (var i = 1; i <= m; i++) {
        for (var j = 1; j <= n; j++) {
            // var above = matrix[i-1][j] + 1;
            // var left = matrix[i][j-1] + 1;
            // var temp = matrix[i-1][j-1] + (target[i - 1] === source[j - 1] ? 0 : 1);
            // matrix[i][j] = Math.min(above, left, temp);
            if (target[i - 1] === source[j - 1]) {
                matrix[i][j] = matrix[i-1][j-1];
            } else {
                matrix[i][j] = Math.min(matrix[i-1][j] + 1, matrix[i][j-1] + 1);
            }
        }
    }

    return {distance : matrix[m][n],
            matrix: matrix};
    
}

function back(target, source) {
    var result = minEditDistance(target, source);
    var current = result.distance,
        matrix = result.matrix,
        m = target.length,
        n = source.length,
        edits = [],
        i = n,
        j = m; // target
    console.log(matrix);
    while(i > 0 || j > 0) {
        // 最后一列
        if (i === 0) {
            edits.unshift(3);
            j--;
            continue;
        }
        // 最后一行
        if (j === 0) {
            edits.unshift(2);
            i--;
            continue;
        }

        var leftAbove = matrix[i-1][j-1],
            left = matrix[i-1][j],
            above = matrix[i][j-1];
        var min = Math.min(leftAbove, left, above);
        if (min === left) {
            // delete
            edits.unshift(2);
            i--;
            current = left;
        } else if (min === leftAbove) {
            if (leftAbove === current) {
                edits.unshift(0); // noChange
            } else {
                console.log(min, leftAbove, current);
                edits.unshift(1); // update
            }
            current = leftAbove;
            i--;
            j--;
        } else {
            // min === above
            edits.unshift(3); // ADD
            j--;
            current = above;
        }
    }
    console.log(edits);
    var LEAVE = 0;
    var ADD = 3;
    var DELETE = 2;
    var UPDATE = 1;

    var n = 0;
    var m = 0;
    var steps = [];
    var step = {index: null, add: 0, removed: []};
    for (var i = 0; i < edits.length; i++) {
        if (step.index === null) {
            step.index = m;
        } else {
            if (step.index != null) {
                steps.push(step);
                step = {index: null, add: 0, removed: []};
            }
        }
        switch (edits[i]) {
            case LEAVE:
                n++;
                m++;
                break;
            case ADD:
                step.add ++;
                m++;
                break;
            case DELETE:
                step.removed.push(source[n]);
                n++;
                break;
            case UPDATE:
                step.add++;
                step.removed.push(source[n]);
                n++;
                m++;
                break;
        }
        if (step.index != null) {
            steps.push(step);
        }
    }
    return JSON.stringify(steps);
}