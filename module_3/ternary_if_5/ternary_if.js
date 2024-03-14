// traditional 'if'
const age = 17

let message

if(age >= 18){
    message = 'You shall pass'
} else {
    message = 'You shall not pass'
}

console.log(message)    // You shall not pass


// ternary 'if':

let message_2 = age >= 18 ? 'You shall pass' : 'You shall not pass'

console.log(message_2)  // You shall not pass