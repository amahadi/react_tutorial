class Person {
    constructor(name = 'Annonymous', age = 0) {
        this.name = name
        this.age = age
    }

    getGreting() {
        return `Hi! I am ${this.name}.`
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old`
    }
}

class Traveller extends Person {
    constructor(name, age, homeLocation) {
        super(name, age)
        this.homeLocation = homeLocation
    }

    hasLocation(){
        return !!this.homeLocation
    }

    getGreting() {
        if(this.hasLocation()) {
            return `${super.getGreting()} I am visiting from ${this.homeLocation}`
        } else {
            return super.getGreting()
        }
    }
}



const me = new Traveller("Alvi Mahadi", 27, 'Dhaka, Bangladesh')
const other = new Traveller()

console.log(me.getGreting())
console.log(other.getGreting())