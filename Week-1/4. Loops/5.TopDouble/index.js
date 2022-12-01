function topDouble(value, top) {
    for(let i=0;i<top;i++) {
        if (value*2 <= top) {
            value*=2;
        } else break;
    }    
    return value;
}

module.exports = topDouble;