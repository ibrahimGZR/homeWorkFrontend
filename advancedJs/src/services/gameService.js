export default class GameService {

    constructor() {
        this.games = [];
    }

    add(game) {
        if (game.unitPrice <= 0) {
            console.log("Lütfen fiyat giriniz")
            return
        }
        this.games.push(game)
    }

    list() {
        return this.games;
    }

    remove(game) {
        var index = this.games.indexOf(game);
        if (index > -1) {
            this.games.splice(index, 1);
        }
        return this.games;
    }

    removeAll() {
        this.games.splice(0,this.games.length)

        return this.games;
    }
}