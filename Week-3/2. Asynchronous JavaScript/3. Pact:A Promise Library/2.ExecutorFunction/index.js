class Pact {
    // add methods to return on the instance
    constructor(executor) {
        this.resolve = () => {

        }
        this.reject = () => {
            
        }
        executor(this.resolve, this.reject);
    }
    catch() {

    }
    then() {
        
    }
}

module.exports = Pact;