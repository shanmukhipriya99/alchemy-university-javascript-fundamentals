function countElements(elements) {
    let obj = {}
    for(item of elements) {
        if(obj[item]) obj[item]++
        else obj[item]=1
    }
    return obj;
}

module.exports = countElements;