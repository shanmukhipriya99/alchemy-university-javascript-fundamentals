const cardScore = {
    "K": 4,
    "Q": 3,
    "J": 2
}
function playerHandScore(hand) {
    let score = 0;
    for(let i=0;i<hand.length;i++) {
        if(hand[i] === "K") score+=cardScore["K"]
        else if(hand[i] === "Q") score+=cardScore["Q"]
        else if(hand[i] === "J") score+=cardScore["J"]
    }
    return score;
}

module.exports = playerHandScore;