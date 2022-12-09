function timer() {
    const prom = new Promise((resolve, reject) => {
        resolve("Yay!")
    })
    return prom
}

module.exports = timer;