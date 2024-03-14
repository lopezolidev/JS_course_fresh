// expressions → they ALWAYS produce a value. 

'Hello'

4

1

true

// declarations → it's an instruction to our program, they DO NOT produce a concrete value

function sum(a, b){
    return a + b
} // the function itself doesn't produce anything. We need to call it with its arguments

const integer = 1 // we're declaring a variable. We need to refer to that variable to know the value. By itself does not produce anything

// and we have this

const func = function () {
    // Code...
} // ← this is a function expression. We're not "declaring" explicitly the function but expressing the function as the value of a variable