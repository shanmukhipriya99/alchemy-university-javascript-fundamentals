class Dialog {
    onClose(callbackFunction) {
        // store the callback
        this.func = callbackFunction;
    }

    close() {
        // invoke the callback
        this.func()
    }
}

module.exports = Dialog;