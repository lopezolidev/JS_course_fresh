// 1. Integers and decimals

let any_number = 100

let pi = 3.1416

console.log(typeof any_number, typeof pi)    // number number

// 2. Scientific Notation

let number_scientific_notation = 4e8

console.log(number_scientific_notation)     // 400000000

// 3. Infinites and NaN (Not a Number)

let infinite = Infinity

let not_a_number = NaN

console.log(typeof infinite, typeof not_a_number)   // number number

console.log(infinite, not_a_number) // Infinity NaN

// arithmethic operations

let sum = 12 + 58

let substraction = 4 - 18

let multiplication = 3 * 91

let division = 45 / 9

let modulo = 21 % 4

let exponentiation = 3 ** 8

// floating point error

let decimal_sum = 0.1 + 0.2
console.log(decimal_sum)    // 0.30000000000000004

console.log(decimal_sum.toFixed(1)) // '0.3' ← this is a string, not a number

console.log(0.3 === decimal_sum.toFixed(1)) // false → with === we compare the value and type

// advanced operations

let squared_root = Math.sqrt(81)

let absolute_value = Math.abs(-12)

let random_value = Math.random()

console.log(squared_root)   // 9
console.log(absolute_value) // 12
console.log(random_value) // 0.68046608259184
