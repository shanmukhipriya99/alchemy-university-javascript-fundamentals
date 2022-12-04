function lessThanFive(array) {
    return array.filter((x) => {
        return x<5
    })    
}

module.exports = lessThanFive;