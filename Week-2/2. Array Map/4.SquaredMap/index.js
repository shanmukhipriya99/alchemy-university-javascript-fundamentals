const squared = require('./squared');

function squaredMap(arr) {
    return arr.map((x) => {
        return x**2
    })
}

module.exports = squaredMap;