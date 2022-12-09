function timer() {
    const prom = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("YaY!")
        }, 1000)
    })
    return prom
}

module.exports = timer;