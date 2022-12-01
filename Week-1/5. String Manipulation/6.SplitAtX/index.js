function splitAtX(string) {
    let ind = string.indexOf("x");
    let fHalf = string.slice(0, ind);
    let sHalf = string.slice(ind+1);
    return fHalf.length>sHalf.length ? fHalf : sHalf;
  // console.log(fHalf.length>sHalf.length ? fHalf : sHalf); 
}

module.exports = splitAtX;