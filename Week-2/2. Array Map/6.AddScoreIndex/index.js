function addScore(players) {
    return players.map((player, index) => {
        if(index<3) {
            return {
            id: player.id,
            score: player.score+10
        }
        } else {
            return {
            id: player.id,
            score: player.score
        }
        }
    })
}

module.exports = addScore;