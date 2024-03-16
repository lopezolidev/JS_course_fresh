// These methods DO NOT modify the original array

// concat()

const colors = ['yello', 'white', 'blue']
const meals = ['burger', 'hot dog', 'pizza']

const concatenated_array = colors.concat(meals)
console.log(colors) // [ 'yello', 'white', 'blue' ]
console.log(meals)  // [ 'burger', 'hot dog', 'pizza' ]
console.log(concatenated_array) // [ 'yello', 'white', 'blue', 'burger', 'hot dog', 'pizza' ]

// concat() · with empty array [] → works when we have more than one array to concatenate

const concatenated_array_2 = [].concat(colors, meals)
console.log(concatenated_array_2)   // [ 'yello', 'white', 'blue', 'burger', 'hot dog', 'pizza' ]

// -------------------

// spread operator '...' 

const numbers_1 = [1, 2, 3, 4, 5]
const string = 'string'

function using_spread_operator(array_1, array_2){
    return [...array_1, ...array_2]
}

console.log(using_spread_operator(numbers_1, string))   // [ 1,   2,   3,   4,   5, 's', 't', 'r', 'i', 'n', 'g'] → deconstruct both arrays and turns it into one

const morse_code = ['....', '----']
const morse_code_2 = ['.-..', '.-']
const spreaded_morse_code= using_spread_operator(morse_code, morse_code_2)        // [ '....', '----', '.-..', '-.--' ]

// -------------------

// join() → returns a string with all the elements of the array joined using a separator (or no separator at all)

const joined_morse_code = spreaded_morse_code.join('')
console.log(joined_morse_code)  // ....----.-...-

const joined_morse_code_with_spaces = spreaded_morse_code.join(' | ')
console.log(joined_morse_code_with_spaces)  // .... | ---- | .-.. | .-