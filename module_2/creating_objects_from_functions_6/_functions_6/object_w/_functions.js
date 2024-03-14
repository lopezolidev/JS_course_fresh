//--------------- With traditional functions

function Space_ship_creator (name, power) {
    this.id = name
    this.level = power
    this.launch_message = function () {
        return `${this.id} with power of ${power}. All ready...`  // its indistinct if we refer to the attributes as 'this' or not. The function takes those as parameters. Using 'this' will only work if we refer to an existing attribute. that way → 'this.name' won't work
    }
} // for a function to become a object factory, we need to refer to the attributes of the object as 'this.' and the name of the attribute

const ship_1 = new Space_ship_creator('falcon 9', 10000) // then we must use the word 'new' to "create" the object and assign it to a variable
console.log(ship_1.launch_message()) // then we can call the methods of the object

//---------------- With arrow functions

const Space_ship_w_arrow_function = (name, power, launch_message) => ({id: name, level: power, own_message: launch_message}) // we use '({ })' notation also as our attributes initialized with ':' instead of '='

// const message_for_spaceshit_w_arrow_function = () => `${this.id} with power of ${this.level}. To the Moon !`  → undefined with power of undefined. To the Moon !
//remember that arrow functions "forget" the execution context. Therefore we'll not be able to access inside the object (execution context)

const message_for_spaceshit_w_arrow_function = () => `To the Moon !`    // this is an arrow function we send to the object factory made with another arrow function. The "exterior function" (the factory) can be a traditional or arrow function

const falcon_x = Space_ship_w_arrow_function('Falcon X', 20000, message_for_spaceshit_w_arrow_function) 
/*
    - We don't instance the object with 'new'
    - our last parameter is the function declaration
    - the rest of parameters are like any other function
*/
console.log(falcon_x.id, falcon_x.level, falcon_x.own_message())    // Falcon X 20000 To the Moon !