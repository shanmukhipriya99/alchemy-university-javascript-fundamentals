function toNumber(string) {
    if(parseInt(string)) {
        return parseInt(string)
    } 
    return 0
}

module.exports = toNumber;