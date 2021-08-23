import { users } from "../data/users.js"
import { DataError } from "../models/dataError.js"

export default class UserService2 {

    constructor() {
        this.customers = []
        this.employees = []
        this.errors = []
    }

    load() {
        for (let user of users) {
            switch (user.type) {
                case "customer":
                    if (!this.validateCustomer(user)) {
                        if (!this.validateAge(user)) {
                            if (!this.validateEmail(user)) {
                                this.customers.push(user)
                            }
                        }
                    }
                    break;
                case "employee":
                    if (!this.validateEmployee(user)) {
                        this.employees.push(user)
                    }
                    break;
                default:
                    this.errors.push(new DataError("Invalid data", user))
                    break;
            }
        }

        console.log(this.customers)
        console.log(this.employees)
        console.log(this.errors)
    }

    validateCustomer(user) {
        let requiredFields = ["id", "firstName", "lastName", "age", "email"]
        let hasErrors = false
        for (let field of requiredFields) {
            if (!user[field]) {
                this.errors.push(new DataError("Geçersiz alan : " + field, user))
                hasErrors = true
            }
        }
        return hasErrors
    }

    validateEmployee(user) {
        let requiredFields = ["id", "firstName", "lastName", "age"]
        let hasErrors = false
        for (let field of requiredFields) {
            if (!user[field]) {
                this.errors.push(new DataError("Geçersiz alan : " + field, user))
                hasErrors = true
            }
        }
        return hasErrors
    }

    validateAge(user) {
        let hasErrors = false

        if (Number.isInteger(user.age) == false || user.age < 0) {
            this.errors.push(new DataError("Geçersiz yaş alanı", user))
            hasErrors = true
        }

        return hasErrors
    }

    validateEmail(user) {
        let hasErrors = false

        let email = user.email
        let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!filter.test(email)) {
            this.errors.push(new DataError("Geçersiz email alanı", user))
            hasErrors;
        }
        return hasErrors
    }

}



//game.js -- type strategy,arcade
//gameService2 -- loadGames()
//id,name,unitPrice,type required
//kurala uygun olmayan oyun türleri hatalı olarak eklenecek
//aynı isimde bir oyun 2 kere eklenemez