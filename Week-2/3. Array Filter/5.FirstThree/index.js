function firstThree(array) {
    return array.filter((el, i) => {
        if (i < 3) {
            return el
        }
    })
}

module.exports = firstThree;