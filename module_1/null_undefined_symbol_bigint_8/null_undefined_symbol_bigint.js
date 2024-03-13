// Null
let no_value = null
console.log(no_value)   // null
console.log(typeof no_value)    // object ← this is a mistake from JavaScript

// Symbol

let unique = Symbol('id')   

let obj = {}
obj[unique] = '123456' 
console.log(obj)    //{ [Symbol(id)]: '123456' }

// let's tests if they're different
let some_symbol_1 = Symbol(1)
let some_symbol_2 = Symbol(1)

console.log(unique)     //Symbol(id)
console.log(typeof unique)  // symbol
console.log(some_symbol_1 === some_symbol_2)    //false

// Udefined

let name
console.log(name)   // undefined
console.log(typeof name)     // undefined

// BigInt → useful for representing big numbers

let gravity_of_a_black_hole = 1600000000000000000000n // ← we put 'n' at the end of the number
console.log(gravity_of_a_black_hole)    // 1600000000000000000000n
console.log(typeof gravity_of_a_black_hole)     //bigint