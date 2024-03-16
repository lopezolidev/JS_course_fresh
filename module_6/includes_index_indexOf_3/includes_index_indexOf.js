// Methods that DO NOT modify the original array

const numbers = [2, 5, 3, 7, 4, 9, 12, 5, 8, 6, 3, 7]

// includes() → true/false if some element we send is part of the array

const is_7_in_array = numbers.includes(7)
console.log(is_7_in_array)  // true

const is_30_in_array = numbers.includes(30)
console.log(is_30_in_array) // false

// indexOf() → tells us the index of the FIRST index of the element that matches the sent element

const index_of_5 = numbers.indexOf(5)
console.log(index_of_5) // 1

const index_of_3 = numbers.indexOf(3)
console.log(index_of_3) // 2

// lastIndexOf() → tells us the index of the LAST index of the element that matches the sent element

const last_index_of_5 = numbers.lastIndexOf(5)
console.log(last_index_of_5)    // 7

const last_index_of_3 = numbers.lastIndexOf(3)
console.log(last_index_of_3) // 10