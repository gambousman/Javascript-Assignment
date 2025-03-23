// PRIMITIVE DATA TYPES
// string (split method)
let name = "Gambo usman"
let newName = name.split()
console.log(newName)


// numbers
let age = 60
console.log(typeof(age))

// boolean
isBoy = true
console.log((isBoy))

// undefine
var isBoy 
console.log(isBoy)

// null
var isBoy = null
console.log(isBoy)

// NON PRIMITIVE DATA TYPES
// Array
var girls = ['nama', 'gambo', 'amal']
let ages = [10, 20, 30]

console.log("The girls name is", girls[2])

// Array methods
// array.lenght
var girls = ['nama', 'gambo', 'amal']
console.log(girls.length)
console.log(girls.length-1)

// pop() This remove the last item on the array
let popped = girls.pop()
console.log(popped)
console.log(girls)

// push() This add an item to the array
let pushed = girls.push('dami')
console.log(pushed)
console.log('added item:', girls)

// shift() Remove the first item of the array
let shifted = girls.shift()
console.log(shifted)
console.log('Shifted list:', girls)

// unshift() This method adds a new element to an array (at the beginning), and "unshifts" older elements
let unshifted = girls.unshift('Tolani')
console.log(unshifted)
console.log('Unshifted list:', girls)

// Array to string: this method converts an array to a string of (comma separated) array values.
var fruits = ['banana', 'orange', 'mango', 'guava']
let toString = fruits.toString()
console.log('String list:', toString)