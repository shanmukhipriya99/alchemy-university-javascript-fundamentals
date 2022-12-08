const { makeFood } = require('./Kitchen');

class Order {
    constructor() {
        this.isReady = false;
        this.error;
    }
    request(food) {
        makeFood(food).then(() => {
            this.isReady = true
        }).catch((err) => {
            this.error = err
        })
    }
}

module.exports = Order;