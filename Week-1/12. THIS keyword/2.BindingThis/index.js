function thisName() {
    return this.name
}

module.exports = thisName.bind({ name: "Bob"});