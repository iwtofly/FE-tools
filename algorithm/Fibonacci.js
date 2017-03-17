// Fibonacci斐波那契数列，假设f(1) = 1,f(2) = 2
function getFn(n) {
    if (n === 1) {
        return 1;
    } else if(n===2) {
        return 2;
    }
    var t1 = 1;
    var t2 = 2;
    var num = 0;
    for (var i = 3; i <= n; i++) {
        num = t1 + t2;
        t1 = t2;
        t2 = num;
    }

    return num;
}