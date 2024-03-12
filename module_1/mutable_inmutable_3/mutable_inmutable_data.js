
/*
    primitive data:
        - number
        - string
        - bool
        - null
        - undefined
        - symbol
        - bigint
    → they're inmutable and pass by value


    Complex data:
        - objects
        - arrays
        - functions
    → they're mutable and pass by refference
*/ 

// with primitive data → inmutable

let number = 10

number = number + 10

let number_2 = number

number_2 = number_2 * 20
console.log("number: ", number, "number_2: ", number_2) // JS creates a new value, which is the sum of 10 + 10. But the real value of the number it's still 10

let boolean_value = true
console.log("boolean_value: ", boolean_value, "number: ", number)

// let string_1 = '2 + 2'
// let string_2 = new String("2 + 2")
// console.log(eval(string_1))
// console.log(eval(string_2))

boolean_value = false // → happens the same with boolean values. This is a clone in memory, therefore the original value is not altered

console.log("boolean_value: ", boolean_value, "number: ", number)

let symbol_variable = Symbol // this data type works as a function

console.log("symbol: ", symbol_variable)

// // with complex data → mutable

let person = {
    name: 'George Jackson',
    person_id: '123456'
}

console.log(person.name, person.person_id)

person.name = 'Jorge Hijo-de-Jack'

console.log(person.name, person.person_id)

let fruits = ['banana', 'apple', 'orange']
console.log(fruits)

let vegetables = fruits //this assignation creates a variable of type pointer that links both variables to the same memory address

vegetables[0] = 'broccoli'
console.log(fruits)

let person_2 = {
    name:' ',
    person_2_id: ' '
}

person_2.name = person.name
person_2.person_2_id = person.person_id

person_2.name = 'Larry Page'
person_2.person_2_id = '12121212'

console.log("person_1: ", person, "person_2: ", person_2)

// // do example with object, array and function

function sum(x){
    x = x * 6
    return x
} //this function alters 'x' by value, not by reference 

let x = 5
x = sum(x)
console.log(x)
// sum(x)

function sum_array(arr){
    let i = 0
    while(i < arr.length){
        arr[i] = (arr[i] * arr[i]) -1
        i++
    }
} // complex data types are altered by reference

let some_array = [1, 2, 3, 4, 5, 6]
console.log(some_array) // [ 1, 2, 3, 4, 5, 6 ]

sum_array(some_array)

console.log(some_array) // [ 0, 3, 8, 15, 24, 35 ]  ← the results differ

// function outerFunction(x) {
//     function innerFunction(y) {
//       return x + y;
//     }
//     return innerFunction;
// }

// let z = outerFunction(5)(5)
// console.log(z) // closure → we'll check it later...