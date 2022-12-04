function onlyTrue(array) {
    return array.filter((x) => {
        return (x === true)
    })
}

module.exports = onlyTrue;