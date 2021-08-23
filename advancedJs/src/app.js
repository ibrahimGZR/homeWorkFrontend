//import Product from "./models/product.js"
//import ProductService from "./services/productService.js"
//import Game from "./models/game.js"
//import GameService from "./services/gameService.js"
//import User from "./models/user.js"
//import UserService from "./services/userService.js"
//import Sale from "./models/sale.js"
//import SaleService from "./services/saleService.js"
//import UserService2 from "./services/userService2.js"
import GameService2 from "./services/gameService2.js"

function friday() {
    // let product1 = new Product(1,"Elma",5)
    // let product2 = new Product(2,"Armut",10)
    // let product3 = new Product(3,"Erik",20)
    // let product4 = new Product(4,"Ayva",30)

    // console.log(product.id)
    // console.log(product.name)
    // console.log(product.unitPrice)

    // let productService = new ProductService();
    // productService.add(product1)
    // productService.add({id:2,name:"Armut",unitPrice:20})
    // productService.add(product3)
    // productService.add(product4)

    // console.log(productService.list())

    let game1 = new Game(1, "CS:GO", 100, 12)
    let game2 = new Game(2, "Valorant", 150, 10)
    let game3 = new Game(3, "WOW", 500, 18)
    let game4 = new Game(4, "L4D", 400, 18)
    let game5 = new Game(5, "LOL", 30, 10)

    // let gameService = new GameService()
    // gameService.add(game1)
    // gameService.add(game2)
    // gameService.add(game3)
    // gameService.add(game4)
    // gameService.add(game5)

    //console.log(gameService.list())

    //gameService.removeAll()
    //gameService.remove(game3)

    //console.log(gameService.list())

    let user1 = new User(1, "İbrahim", 28)
    let user2 = new User(2, "Ahmet", 10)
    let user3 = new User(3, "Mehmet", 15)
    let user4 = new User(4, "Ali", 5)

    let userService = new UserService()
    userService.add(user1)
    userService.add(user2)
    userService.add(user3)
    userService.add(user4)

    console.log(userService.list())

    userService.remove(user4)

    console.log(userService.list())

    let saleService = new SaleService()
    saleService.sell(user1, game1)
    saleService.sell(user2, game2)
    saleService.sell(user3, game5)



    console.log(saleService.list())

    saleService.remove(2)

    console.log(saleService.list())

    //game - minAge  
    //user id,name,age 
    //userService ekle - add(), list(), remove()
    //sellingService - sell(user, game) --> Age control 
}


// let userService2 = new UserService2()
// userService2.load()

let gameService2 = new GameService2()
gameService2.load()

gameService2.add({id:5,gameName:"Wow",unitPrice:50,type:"fps"})