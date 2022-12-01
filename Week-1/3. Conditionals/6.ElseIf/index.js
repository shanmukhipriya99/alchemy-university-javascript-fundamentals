function canAccess(purchasedSubscription, freeTrial) {
    if(purchasedSubscription === true || freeTrial === true) {
        return true
    } else return false
}

module.exports = canAccess;