function map(arr, callback) {
    let newArr = [];
    newArr = arr.map((el) => {
        return callback(el)
    })
    return newArr;
}

module.exports = map;