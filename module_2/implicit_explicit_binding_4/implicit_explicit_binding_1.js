// Implicit binding 

const house = {
    dog: 'Dogo',
    dog_greeting: function () {
        console.log(`Hi, my name is ${this.dog}`) // → 'this' refers to the execution context, in this case its the object 'house'
    }
}

house.dog_greeting()    // Hi, my name is Dogo 

// Explicit binding

function dog_greeting () {
    console.log(`Hi, my name is ${this.dog} and I'm ${this.age}`) 
}

const house_2 = {
    dog: 'Fido',
    age: 3
}

dog_greeting.call(house_2)  // Hi, my name is Fido and I'm 3 → now with '.call(<execution_context>)' refers to the execution context of the object we send. 

// Now let's send parameters

const owner = 'Kath'

const address = '123 Street'

function new_dog_greeting (owner, address) {
    console.log(`Hi, my name is ${this.dog}, I'm ${this.age} and I live with ${owner} on ${address}`) // the arguments do not have 'this' word. Only those which are in the execution context, that is the object where we want to call this function
}

new_dog_greeting.call(house_2, owner, address)  // Hi, my name is Fido, I'm 3 and I live with Kath on 123 Street → we send the execution context and the arguments to the function. After the execution context we send the arguments 