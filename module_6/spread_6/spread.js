// Spread operator, use cases:

// 1 · Copying an array

const original_array = [1, 2, 3, 4, 5]

const copy_array = [...original_array]

console.log(original_array) // [ 1, 2, 3, 4, 5 ]

console.log(copy_array) // [ 1, 2, 3, 4, 5 ]

// 2 · Combining arrays

const array_1 = [1, 2, 3]

const array_2 = [4, 5, 6]

const combined_array = [...array_1, ... array_2]
console.log(array_1)    // [ 1, 2, 3 ]
console.log(array_2)    // [ 4, 5, 6 ]
console.log(combined_array) // [ 1, 2, 3, 4, 5, 6 ]

// 3 · Creating an array with additional elements 

const array_with_additional_elements = [...array_1, 4, 5, 6]

console.log(array_with_additional_elements) // // [ 1, 2, 3, 4, 5, 6 ]

// 4 · Pass elements to functions

const some_array = [1, 5, 9, 3, 6, 7]

function sum_array(a, b, c, d, e, f){
    return a + b + c + d + e + f
}

console.log(sum_array(...some_array))   // 31