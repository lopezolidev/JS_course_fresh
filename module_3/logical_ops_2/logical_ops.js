const a = 10
const b = 20
const c = '10'

console.log(a == b && a === c) // false

console.log(a != b || b === c)  // true

console.log(a != b && a == c)   // true

console.log(!(a === b)) // true
