function isAllX(string) {
    let xPresent=0;
    for(let i=0;i<string.length;i++) {
        if(string[i] === "x" || string[i] === "X") xPresent++
    }
    if(xPresent===string.length) return true
    else return false
}

module.exports = isAllX;
