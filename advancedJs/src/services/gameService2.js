import { games } from "../data/games.js"
import { DataError } from "../models/dataError.js"

export default class GameService2 {

    constructor() {
        this.arcades = []
        this.strategies = []
        this.errors = []
    }

    load() {
        for (let game of games) {

            for (let i = 0; i < games.length; i++) {
                if (game.gameName == games[i].gameName && games.indexOf(game) != i) {
                    this.errors.push("Bu oyun ismi tekrar ediyor : " + games[i].gameName, games[i])
                    games.splice(i, 1)
                }
            }

            switch (game.type) {
                case "arcade":
                    if (!this.validateArcade(game)) {
                        this.arcades.push(game)
                    }
                    break;
                case "strategy":
                    if (!this.validateStrategy(game)) {
                        this.strategies.push(game)
                    }
                    break;
                default:
                    this.errors.push(new DataError("Invalid data", game))
                    break;
            }
        }

        console.log(this.arcades)
        console.log(this.strategies)
        console.log(this.errors)
        console.log(games)
    }


    add(game) {
        if (!this.validateGameName(game)) {
            games.push(game)
            switch (game.type) {
                case "arcade":
                    if (!this.validateArcade(game)) {
                        this.arcades.push(game)
                    }
                    break;
                case "strategy":
                    if (!this.validateStrategy(game)) {
                        this.strategies.push(game)
                    }
                    break;
                default:
                    this.errors.push(new DataError("Invalid data", game))
                    break;
            }
            console.log(games)
            console.log(this.arcades)
            console.log(this.strategies)
            console.log(this.errors)
        }
    }

    validateArcade(game) {
        let requiredFields = ["id", "gameName", "unitPrice", "type"]
        let hasErrors = false
        for (let field of requiredFields) {
            if (!game[field]) {
                this.errors.push(new DataError("Ge??ersiz alan : " + field, game))
                hasErrors = true
            }
        }
        return hasErrors
    }

    validateStrategy(game) {
        let requiredFields = ["id", "gameName", "unitPrice", "type"]
        let hasErrors = false
        for (let field of requiredFields) {
            if (!game[field]) {
                this.errors.push(new DataError("Ge??ersiz alan : " + field, game))
                hasErrors = true
            }
        }
        return hasErrors
    }

    validateGameName(game) {
        let hasErrors = false

        for (let field of games) {
            if (field.gameName == game.gameName) {
                this.errors.push(new DataError("Bu oyun sistemde kay??tl?? : " + game.gameName, game))
                hasErrors = true
            }
        }
        return hasErrors
    }

}
