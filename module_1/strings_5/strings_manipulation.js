// Creating strings

// 1. Primitive string

let primitive_string = 'primitive string'

let primitive_string_2 = String('primitive string')
//these two forms are equivalent

console.log(typeof primitive_string, typeof primitive_string_2) // string string


// 2. Object string

let object_string = new String('object string')
//this is an object, has different properties

console.log(typeof object_string)   // object

// How do we manipulate strings?

let tobe_manipulated_string = 'Hello. How are you doing?'

//length of the string
console.log(tobe_manipulated_string.length) //25

// index of the first element that matches with the sent argument
console.log(tobe_manipulated_string.indexOf('a')) //11

//character of certain index
console.log(tobe_manipulated_string[17]) // u
//character of certain index
console.log(tobe_manipulated_string.charAt(17)) // u

//indexOf also works with strings, beyond characters
console.log(tobe_manipulated_string.indexOf('are')) // 11

//the last index of certain character or string
console.log(tobe_manipulated_string.lastIndexOf('o'))   // 20

//when certain word doesn't exists in the string, returns -1
console.log(tobe_manipulated_string.indexOf('p'))   // -1

//picking a set of characters from the string, (initial_index, final_index + 1)
console.log(tobe_manipulated_string.slice(7, 10))   // How

//setting uppercase to the whole string
console.log(tobe_manipulated_string.toUpperCase())  // HELLO. HOW ARE YOU DOING?

//setting lowercase to the whole string
console.log(tobe_manipulated_string.toLowerCase())  // hello. how are you doing?

//generating an array based on wich separator we include, in this case, the separator is ' '
let divided_greet = tobe_manipulated_string.split(' ')
console.log(divided_greet)  // [ 'Hello.', 'How', 'are', 'you', 'doing?' ]

//triming spaces in a string
let spaced_greet = '    Hello, How are you doing?           '
console.log(spaced_greet.trim())    // Hello, How are you doing?

let original_greet = ' Hello, this is my dog'
console.log(original_greet.replace('dog', 'cat'))   //  Hello, this is my cat