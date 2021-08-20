import Sale from "../models/sale.js";

export default class SaleService {

    constructor() {
        this.sales = [];
    }

    sell(user, game) {
        if (user.age < game.minAge) {
            console.log("Yaşınız bu oyunu satın almak için uygun değil")
            return
        }

        var id = this.sales.length + 1
        if (this.sales.length == 0) {
            id = 1
        }

        let sale = new Sale(id, user, game)

        this.sales.push(sale)
    }

    list() {
        return this.sales;
    }

    remove(id) {

        for (let i = 0; i < this.sales.length; i++) {
            if (id == this.sales[i].id) {
                this.sales.splice(i, 1);
            }
        }
        return this.sales;
    }

    removeAll() {
        this.sales.splice(0, this.sales.length)

        return this.sales;
    }
}