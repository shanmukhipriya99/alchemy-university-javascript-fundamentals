function shortStrings(array) {
    return array.filter((str) => {
        return (str.length <=3)
    })
}

module.exports = shortStrings;