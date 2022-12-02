function sortUp(array) {
    array.sort(function comp(a, b) {
        return a-b
    })
}

module.exports = sortUp;