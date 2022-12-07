class Dialog {
    constructor() {
        this.cbFunctions = []
    }
    onClose(callbackFunction) {
        // store the callback
        this.cbFunctions.push(callbackFunction);
    }

    close() {
        // invoke the callback
        this.cbFunctions.map((func) => {
            func()
        })
    }
}

module.exports = Dialog;