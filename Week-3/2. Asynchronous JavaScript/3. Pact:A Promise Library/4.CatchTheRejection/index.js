class Pact {
    // add methods to return on the instance
    constructor(executor) {
        this.resolve = (value) => {
            this.func(value);
        }
        this.reject = (value) => {
            this.catchFunc(value);
        }
        executor(this.resolve, this.reject);
    }
    catch(_catch) {
        this.catchFunc = _catch
    }
    then(_then) {
        this.func = _then
    }
}

module.exports = Pact;