const power = (x, n) => {
    let res = x;

    for (let i = 1; i < n; i++) {
        res = res * x;
    }

    return res;
}

console.log(power(2, 5))