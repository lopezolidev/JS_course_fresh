// Methods that modify the original array

// splice() → we can sculpt our array, selecting which position we want to delete certain element, how many elements we want to delete from the original array and insert new elements in the array. This methods returns an array with the removed elements from the array

const vegetables = ['cucumber', 'onion', 'broccoli', 'spinach']

console.log(vegetables) // [ 'cucumber', 'onion', 'broccoli', 'spinach' ]

const removed_vegetable = vegetables.splice(2, 1, 'tomato', 'lettuce')

console.log(vegetables) // [ 'cucumber', 'onion', 'tomato', 'lettuce', 'spinach' ] ← broccoli (idex 2) was removed, 'spinach' remained because we only set to delete 1 element. 'tomato' and 'lettuce' were inserted in the position were 'broccoli' was. 

console.log(removed_vegetable)  // [ 'broccoli' ]

/* 
    const removed_vegetable = vegetables.splice(2, 0, 'tomato', 'lettuce')  ← when set to 0. No elements are removed 
    vegetables → [ 'cucumber', 'onion', 'tomato', 'lettuce', 'broccoli', 'spinach' ]
    removed_vegetable → []
*/

// -------------------------------------------

// reverse() → flips the order were each element appears in the array

const numbers = [2, 7, 3, 9, 4, 1, 5]
console.log(numbers)    // [  2, 7, 3, 9, 4, 1, 5]

const reversed_numbers = numbers.reverse()
console.log(reversed_numbers)   // [ 5, 1, 4, 9, 3, 7, 2]

// -------------------------------------------

// sort() → has an inner implementation of a bubble sort

// sort() with Numbers · Like strings 

const reversed_numbers2 = [4, 18, 1, 62, 34]

const sorted_numbers_like_strings = reversed_numbers2.sort()
console.log(sorted_numbers_like_strings)    // [ 1, 18, 34, 4, 62 ]

// sort() with Numbers · Like numbers

const other_set_of_numbers = [4, 18, 1, 62, 34]
console.log(other_set_of_numbers)   // [ 4, 18, 1, 62, 34 ]

const sorted_numbers_like_numbers = other_set_of_numbers.sort( (a, b) => a - b)
// a - b -> -N → b > a → numbers must NOT be swapped
// a - b -> N → a > b → numbers must be swapped

console.log(sorted_numbers_like_numbers)    // [ 1, 4, 18, 34, 62 ]

// sort() with Strings → does it with UTF-16

const words = ['banana', 'orange', 'apple', 'melon', 'kiwi', 'grapes']

const sorted_strings = words.sort() 
console.log(words)  // [ 'apple', 'banana', 'grapes', 'kiwi', 'melon', 'orange' ]

// what if sort() with Strings but like numbers?

const other_words = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
const sorted_strings_like_numbers = other_words.sort( (a, b) => a - b)
console.log(sorted_strings_like_numbers)    // ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'] → no changes

// -------------------------------------------

// fill() · 3 forms

// fill() · from an index to another index

const numbers_to_fill = [2, 5, 4, 6, 7, 12, 34, 33, 1, 0]
console.log(numbers_to_fill.fill(3, 1, 6))     // [2,  3,  3, 3, 3, 3, 34, 33, 1, 0] → number used to fill: 3. starting index: 1, finish index: 6

// fill() · from a starting index to another index

const numbers_to_fill_2 = [2, 5, 4, 6, 7, 12, 34, 33, 1, 0]
console.log(numbers_to_fill_2.fill(-1, 5))  // [ 2,  5,  4,  6,  7, -1, -1, -1, -1, -1]  → number used to fill: -1, starting index: 5.

// fill() · from the start to finish

const numbers_to_fill_3 = [2, 5, 4, 6, 7, 12, 34, 33, 1, 0]
console.log(numbers_to_fill_3.fill(999))    // [ 999, 999, 999, 999, 999, 999, 999, 999, 999, 999] → number used to fill: 999
