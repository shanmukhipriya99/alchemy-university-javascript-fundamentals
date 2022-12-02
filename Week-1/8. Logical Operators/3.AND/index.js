function canBreathe(isConnected, hasOxygen, aboveWater) {
    if(aboveWater) return true
    else if(isConnected && hasOxygen) return true
    else return false    
}

module.exports = canBreathe;