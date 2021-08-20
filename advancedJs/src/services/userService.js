export default class UserService {

    constructor() {
        this.users = [];
    }

    add(user) {
        this.users.push(user)
    }

    list() {
        return this.users;
    }

    remove(user) {
        var index = this.users.indexOf(user);
        if (index > -1) {
            this.users.splice(index, 1);
        }
        return this.users;
    }

    removeAll() {
        this.users.splice(0,this.users.length)

        return this.users;
    }
}