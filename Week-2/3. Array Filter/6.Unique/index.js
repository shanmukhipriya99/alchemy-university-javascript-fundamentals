function unique(array) {
    return array.filter((el, i) => {
        return array.indexOf(el) === i
    })
}

module.exports = unique;