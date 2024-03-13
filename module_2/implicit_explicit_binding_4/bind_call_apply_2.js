// Using call

function dog_greeting () {
    console.log(`Hi, my name is ${this.dog} and I'm ${this.age}`) 
}

const house = {
    dog: 'Fido',
    age: 3
}

dog_greeting.call(house)    // Hi, my name is Fido and I'm 3

// or sending arguments

function dog_greeting_2 (owner, address) {
    console.log(`Hi, my name is ${this.dog} and I'm ${this.age}, I live with ${owner} on ${address}`) 
}

const person = 'Kath'

const address = 'Moromi street'

dog_greeting_2.call(house, person, address) // Hi, my name is Fido and I'm 3, I live with Kath on Moromi street, to send multiple parameters we need multiple commas after the execution context

// Using apply

const vital_values = [person, address]

dog_greeting_2.apply(house, vital_values)    // Hi, my name is Fido and I'm 3, I live with Kath on Moromi street → this case we send the parameters of the function using an array. The method 'apply' by itself recieves 2 parameters. 1st the execution context, 2nd an array with the arguments of the function

// Using bind

const greet = dog_greeting_2.bind(house, person, address)
console.log(greet)   // [Function: bound dog_greeting_2] → 'bind' returns a function declaration, not the execution of the function, to have the execution of the function we need to call the function

greet() // Hi, my name is Fido and I'm 3, I live with Kath on Moromi street

// or simply

dog_greeting_2.bind(house, person, address)()   // Hi, my name is Fido and I'm 3, I live with Kath on Moromi street. We add a second parenthesis that 'calls' the function
