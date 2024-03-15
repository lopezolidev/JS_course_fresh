// methods that DO NOT modify the original array

// map () → returns a new array based on the previous array

const numbers = [1, 2, 3, 4, 5]

const squaredNumbers = numbers.map( number => number * number)

console.log(numbers)    // [ 1, 2, 3, 4, 5 ]
console.log(squaredNumbers) // [ 1, 4, 9, 16, 25 ]

// forEach () → does not return anything 

const colors = ['red', 'blue', 'green']

const iterated_colors = colors.forEach( color => console.log(`Color ${color}`))
/*
Color red
Color blue
Color green
*/

console.log(colors) // [ 'red', 'blue', 'green' ]
console.log(iterated_colors)    // undefined

// from Farenheit to celcius

const f_degrees = [120, 50, 25, 34] 

const c_degrees = f_degrees.map(degree => parseFloat(((5/9) * (degree - 32)).toFixed(2)))

console.log(f_degrees)  // [ 120, 50, 25, 34 ]
console.log(c_degrees)  // [ 48.89, 10, -3.89, 1.11 ]

// sum all the numbers in an array

let n = 0

numbers.forEach( num => n += num)

console.log(n)  // 15