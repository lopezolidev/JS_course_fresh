//here we explore the difference of declaring variables with let and const

//primals
let some_variable = 'some_variable'

some_variable = '4' //clone of some_variable

let booleano = true

let nule = null

let strings = 3

let indefinido = undefined

let symbols = Symbol

let bigInt = BigInt

console.log(some_variable, booleano, nule, strings, indefinido, symbols, bigInt)

//complex

let objeto = {
    atributo_cualquiera: 'Antonio',
    occupation: 'asshole',
    age: 41,
}

let array = [some_variable, booleano, strings, indefinido, symbols, bigInt]

// console.log(objeto)
// console.log(array)

function my_function(valor_a, valor_b){
    console.log(valor_a + valor_b)
}


// console.log(fruta)

const constant_variable = 'constant variable'


console.log(some_variable, constant_variable)

// // reassignation → 
// some_variable = 24 //can be done with 'let' → also, JS creates a 'clone' in memory...

// // constant_variable = 'string' //cannot be done with 'const'

// console.log(some_variable, constant_variable)

