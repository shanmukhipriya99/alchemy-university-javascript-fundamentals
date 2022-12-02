function halfValue(numbers) {
    let newArr = numbers.map((item) => {
        return Math.ceil(item/2)
    })
    return newArr;
}

module.exports = halfValue;