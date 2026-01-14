// Классы ES6 и this


class User {

    constructor(name) {
        this.name = name;
    }
    
    getName() {
        return this.name;
    }
    
    getNameArrow = () => {
        return this.name;
    }
}


const user = new User('Mike');

const getName = user.getName;

const getNameArrow = user.getNameArrow;



console.log(getName());         // Что выведет?
console.log(getNameArrow());    // А это?