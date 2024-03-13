/* 
    -> Pure functions: only alter elements in the body of the function

    -> Impure functions: alter elements outside the body of the function
    
    Examples of secondary effects:
        - Printing messages in screen or terminal
        - HTTP requests
        - Modify global variables
        - DOM manipulation
        - Modify parameters
        - Get actual time
*/

// Examples of pure functions

function add (x) {
    return x + x 
}

function square (a) {
    return a * a
}

const num = 7

const final_result = add(square(num)) //this callback of pure functions it's still a pure function

console.log(final_result) // 98

// Examples of impure functions

let total = 5

function multiply (a) {
    return total *= a
}

console.log(multiply(7))    // 35 ← alters the value of 'total'