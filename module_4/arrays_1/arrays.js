// Creating an array

// 1. With 'new Array' or 'Array'

const fruits = new Array('apple', 'lemon', 'orange')
console.log(fruits) // [ 'apple', 'lemon', 'orange' ]

const sports = Array('rugby', 'swimming', 'basketball')
console.log(sports) // [ 'rugby', 'swimming', 'basketball' ]

const empty_array = Array(12) // signaling a number makes room for such number of elements
console.log(empty_array)    // [ <12 empty items> ]

// which is the same as 
const empty_array_2 = []
const one_number = [2]
console.log('empty array 2: ', empty_array_2, 'one number: ', one_number)   // empty array 2:  [] one number:  [ 2 ]

console.log(fruits[0])  // apple ← accessing array elements

// 2. Array literal syntax

const array_literal_syntax = ['element_1', 'element_2', 'element_3']
console.log(array_literal_syntax)   // [ 'element_1', 'element_2', 'element_3' ]

// knowing the lenght of an array

console.log(array_literal_syntax.length)    // 3
console.log(empty_array.length) // 12 ← even though there're no elements in the array, there's "room" for 12 elements and this space is counted as the length of the array

// we can have mixed arrays 

const mixed_array = [
    1,
    false,
    'spring',
    {item_1: 1, item_2: 'flour'},
    true,   
    ['fruit_1', 'rocket_3', 'poolroom_47']
]
console.log(mixed_array)
/*
[
  1,
  false,
  'spring',
  { item_1: 1, item_2: 'flour' },
  true,
  [ 'fruit_1', 'rocket_3', 'poolroom_47' ]
]
*/

// Mutability → original array gets modified

fruits.push('watermelon')
console.log(fruits) // [ 'apple', 'lemon', 'orange', 'watermelon' ]

// Inmutability → the original array it's not modified

const new_unmodified_fruits = fruits.concat(['banana', 'tomato'])
console.log(fruits) // [ 'apple', 'lemon', 'orange', 'watermelon' ]
console.log(new_unmodified_fruits)  // [ 'apple', 'lemon', 'orange', 'watermelon', 'banana', 'tomato' ]

// Checking if an array is an array with Array.isArray()

const some_array = ['item_1', 'item_2', 'item_3']
const an_object = { item_1: 1, item_2: 2, item_3: 3}
console.log(Array.isArray(some_array))  // true
console.log(Array.isArray(an_object))   // false

// Exercise → sum all the numbers in an array
const numbers = [1, 9, 2, 8, 3, 7, 4, 6, 5]
let sum = 0

for(let i = 0; i < numbers.length; i++){
    sum += numbers[i]
}

console.log(sum) // 45
