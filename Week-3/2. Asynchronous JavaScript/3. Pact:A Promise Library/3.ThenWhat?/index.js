class Pact {
    // add methods to return on the instance
    constructor(executor) {
        this.resolve = (value) => {
            this.func(value);
        }
        this.reject = () => {
            
        }
        executor(this.resolve, this.reject);
    }
    catch() {

    }
    then(_then) {
        this.func = _then
    }
}

module.exports = Pact;