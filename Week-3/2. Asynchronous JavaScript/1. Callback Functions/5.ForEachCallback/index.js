function forEach(arr, callback) {
    // for each element in the arr, run the callback, passing in the element
    arr.map((el, ind) => {
        callback(el, ind)
    })
}

module.exports = forEach;