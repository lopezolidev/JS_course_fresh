// traditional function

const greeting = function (name, lastname) {
   return `Hi, I'm ${name} ${lastname}`
} 

console.log(greeting('George', 'Jackson'))   // Hi, I'm George Jackson

// arrow function → Explicit return
const greeting_arrow_explicit = name => {
    return `Hi I'm ${name}`
}
console.log(greeting_arrow_explicit('Jackson'))  // Hi I'm Jackson

// arrow function → Implicit return

const greeting_arrow_implicit = name => `Hi, I'm ${name}`   // ← when there's only one parameter, we can supress the parenthesis
console.log(greeting_arrow_implicit('George'))    // Hi, I'm George


// arrow function with > 1 parameter

const greeting_arrow_params = (name, lastname, age) => `Hi, I'm ${name} ${lastname} at the ripe age of ${age}`

console.log(greeting_arrow_params('George', 'Jackson', 91))  // Hi, I'm George Jackson at the ripe age of 91

// Execution context and lexical binding

const character = {
    name: 'Harvey Specter',
    message: function (something_to_say){
        return `${this.name} says: ${something_to_say}`
    },
    message_2: something_to_say => `${this.name} says: ${something_to_say}`
}

console.log(character.message('I like basketball'))   // Harvey Specter says: I like basketball
character.message_2(`I like being a lawyer`)    // undefined says: I like being a lawyer ← arrow functions 'forget' the execution context. Best practice is to use it outside the object