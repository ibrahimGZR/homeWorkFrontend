export default class Sale {
    constructor(id, user, game) {

        if (!id || !user || !game ) {
            console.log("Nesne geçersiz")
        }

        //prototyping
        this.id = id;
        this.user = user;
        this.game = game;
    }
}