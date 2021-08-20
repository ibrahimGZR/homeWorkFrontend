export default class Product {
    constructor(id, name, unitPrice) {

        if(!id || !name || !unitPrice){
            console.log("Nesne geçersiz")
        }

        //prototyping
        this.id = id;
        this.name = name;
        this.unitPrice = unitPrice;
    }
}