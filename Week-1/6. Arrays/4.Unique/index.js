function unique(array) {
    let newArr = [...new Set(array)]  
    return newArr;  
}

module.exports = unique;