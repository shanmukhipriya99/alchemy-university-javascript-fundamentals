function countVowels(str) {
    if(str.match(/[aeiou]/gi))
    return str.match(/[aeiou]/gi).length
    else return 0
}

module.exports = countVowels;