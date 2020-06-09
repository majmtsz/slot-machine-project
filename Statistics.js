class Statistics {
    constructor() {
        this.gameResults = []
    }
    addGameToStats(win, bid) {
        let gameResult = {
            win: win,
            bid: bid
        }
        this.gameResults.push(gameResult)
    }
    showGameStats() {
        let games = this.gameResults.length;
        let wins = this.gameResults.filter(game => game.win === true).length
        let losses = games - wins

        return [games, wins, losses]
    }
}


const stats = new Statistics()