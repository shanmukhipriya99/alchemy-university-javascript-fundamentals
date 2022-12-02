class Hero {
    constructor(health) {
        this.health = health
    }
    takeDamage(dam) {
        this.health -= dam
    }
}

module.exports = Hero;