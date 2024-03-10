//here we explore the difference of declaring variables with let and const

let some_variable = 3

const constant_variable = 'constant variable'

console.log(some_variable, constant_variable)

// reassignation → 
some_variable = 24 //can be done with 'let' → also, JS creates a 'clone' in memory...

// constant_variable = 'string' //cannot be done with 'const'

console.log(some_variable, constant_variable)