function countC(str) {
    let count = 0;
    let arr = str.split("")
    arr.map((item) => {
        if (item === 'c' || item === 'C') count++;
    })
    return count;
}

module.exports = countC;