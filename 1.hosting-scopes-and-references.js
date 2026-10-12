console.log("testing")

// HOISTING is a process in which JS looks for all variables created with "var" and all functions created with "function declaration" and moves them to the top of the code
// variables with var will have value undefined
// myAge = undefined;
// functions declarations will do the original action

// console.log(myName) // ReferenceError: Cannot access 'myName' before initialization
console.log(myAge) // undefined

let myName = "jorge";
console.log(myName)
var myAge = 28;
console.log(myAge)

// let myName = "bob" // SyntaxError: Identifier 'myName' has already been declared
var myAge = 24;
console.log(myAge)

// hoisting works with functions

myFunction()

function myFunction() {
  console.log("Hello!")
}

myFunction()

function myFunction() {
  console.log("Good bye!")
}

myFunction()

// doesn't work on function expression or arrow function since it often uses a variables created with let or const.
// myOtherFunction()
let myOtherFunction = function() {

}

// let myOtherFunction = () => {

// }


// SCOPES

//1. GLOBAL SCOPE => everything we create here will ALWAYS be accesible anywhere in the code

let someVariable = "potato"

function runFunction() {
  if (30 === 30) {
    for (let i = 0; i < 10; i++) {
      if (true) {
        console.log(someVariable)
      }
    }
  }
}
runFunction()

//2. BLOCK SCOPE (conditionals, switch cases, loops, classes). Everything we create in the block scope, should only be accesible in that scope.

{
  let string1 = "variable created with let"
  console.log(string1)
  // Garbage collector looks for variables created inside this scope and will destroy them.
  var string2 = "variable created with var"
  console.log(string2)
  string3 = "variable without keyword. global scope variable"
  console.log(string3)
}

// console.log(string1) // can't do due to garbage collector
console.log(string2)
console.log(string3)

//3. FUNCTION SCOPE
function lastFunction() {
  let myString1 = "variable created with let, inside function"
  console.log(myString1)
  var myString2 = "variable created with var, inside function"
  console.log(myString2)
  myString3 = "variable created without a keyword like creating it in global scope variable, inside function"
  console.log(myString3)
}

lastFunction()

// console.log(myString1) // can't do due to garbage collector
// console.log(myString2) // can't do due to how function scopes work
console.log(myString3)

// conclusions: 
// - NEVER user var
// - you can use function declaration while undertanding about hoisting
// - as intented, you should not access variables created withing scopes.
// - if you are preparing for technical interviews, read about and study about this.

// REFERENCES => ids attached to each object or array created in JS

let age1 = 46;
let age2 = 46;

console.log(age1 === age2); // primitive data types always compared by value: 46 vs 46 => true

let agesArr1 = [10, 20, 30]; // ref 1234
let agesArr2 = [10, 20, 30]; // ref 3456

console.log(agesArr1 === agesArr2); // complex data types (array and object) always compared by reference: 1234 vs 3456 => false

// console.log(agesArr1[0] === agesArr2[0])

console.log(JSON.stringify(agesArr1)) // "[10,20,30]"
console.log(JSON.stringify(agesArr2)) // "[10,20,30]"

console.log( JSON.stringify(agesArr1) ===  JSON.stringify(agesArr2) )

// let agesArr3 = agesArr1 // assigned the SAME ref as agesArr1 to agesArr3
// cloning
let agesArr3 = structuredClone(agesArr1) // create a new ref with the exact same values

console.log(agesArr3)
agesArr3.pop() // remove last element
console.log(agesArr3)
console.log("original", agesArr1)


let someNames = ["bob", "sarah", "john"] // ref abcd

function removeAllElements(array) {
  // let array = someNames 

  array.splice(0, array.length)
  console.log("the array is now empty", array)

}

removeAllElements(someNames)
console.log(someNames)