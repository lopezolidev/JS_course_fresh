// Explicit conversion

let number_in_string = '546'
let number_in_string_to_int = parseInt(number_in_string)
console.log(number_in_string, typeof number_in_string)  // 546 string   
console.log(number_in_string_to_int, typeof number_in_string_to_int)  // 546 number

let decimal_number = '2.71828'
let decimal_number_to_float = parseFloat(decimal_number)
console.log(decimal_number, typeof decimal_number)  // 2.71828 string
console.log(decimal_number_to_float, typeof decimal_number_to_float)    // 2.71828 number

let binary_number = '10110110'
let binary_number_to_int = parseInt(binary_number, 2)   //we pass 2 arguments, where the first one is the binary number and the second is the base of conversion
console.log(binary_number, typeof binary_number)    // 10110110 string
console.log(binary_number_to_int, typeof binary_number_to_int)  // 182 number

// Implicit conversion

let sum_strings = 'string_1' + 'string_2'
console.log(sum_strings)    // string_1string_2 ← CONCATS

let sum_strings_numbers = 'string_1' + 5
console.log(sum_strings_numbers)    // tring_15 ← CONCATS

let sum_strings_booleans = 'string_1' + true
console.log(sum_strings_booleans)   // string_1true ← CONCATS

//with strings, everything is parsed to strings

let sum_numbers = 5 + 7
console.log(sum_numbers) // 12  ← SUMS

let sum_numbers_booleans = 5 + true
console.log(sum_numbers_booleans) //6 ← SUMS

let sum_booleans = true + true
console.log(sum_booleans)   // 2 ← SUMS

