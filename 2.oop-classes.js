
// create the class that defines how each one of the objects will look like
class Hero {
  constructor(name, secretIdentity) {
    // this is where we define all properties
    this.name = name
    this.secretIdentity = secretIdentity // dynamic properties
    this.isEvil = false // default properties
  }

  // this is where we define all methods
  revealSecretIdentity() {
    let message = `${this.name} has revealed their secret identity as ${this.secretIdentity}`
    return message
  }

  turnEvil() {
    this.isEvil = true
    let message = `${this.name} is now evil, MUAHAHAHA!`
    return message
  }

}

// start fabricating the different objects based on that class
let hero1Obj = new Hero("Iron Man", "Tony Stark")
console.log( hero1Obj ) 
console.log( hero1Obj.revealSecretIdentity() )

let hero2Obj = new Hero("Black Widow", "Natasha Romanoff")
console.log(hero2Obj) 
console.log( hero2Obj.revealSecretIdentity() )

let hero3Obj = new Hero("Hawkeye", "Bart Something")
console.log( hero3Obj.turnEvil() )
console.log(hero3Obj) 



