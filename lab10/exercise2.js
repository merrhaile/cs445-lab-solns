

class User {
    constructor(name){
        this.name = name;
    }
}

class DecoratedUser {
    constructor(user, street, city){
        this.user = user
        this.street = street
        this.city = city
    }
    logger() {
        console.log("Hi, this is " +this.user.name + " from " + " " + this.street + " " + this.city)
    }
}

const user = new User("Kelly");

const decorated = new DecoratedUser(user, "Broadway", "New York");
decorated.logger();