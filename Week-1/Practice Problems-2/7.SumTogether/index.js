function sumTogether(arr1, arr2) {
    let arr =[];
    for(let i=0;i<arr1.length;i++) {
        arr[i] = arr1[i]+arr2[i]
    }
    return arr
}

module.exports = sumTogether;