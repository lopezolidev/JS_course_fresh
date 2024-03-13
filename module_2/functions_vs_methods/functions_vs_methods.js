// different ways we can play with functions

// Returning functions inside another functions → closures

function a () {
    function b () {
        return
    }
    return b
}

const function_returned = a() // the raw function

const second_function_returned = a()() // executing the inside function


// Callbacks → sending a function as argument to another function

function one(){
    return
}

function two(something){
    return
} // this can become an implicit closure
const function_to_another_function = two(one()) 

// Function Expressions → assigning a function to a variable

const variable = function () {return} //the function has no name. The name of the function is 'variable'

// functions as methods
function action() {
    return 'hi'
}

const obj = {}

action.call(obj) // the execution context of 'action' is the object 'obj' 

//Nested functions 

function x (){
    function y () {
        function z () {

        }
        z()
    }
    y()
}
x()

// Can we store functions in objects?

const rocket = {
    name: 'Challenger',
    launchMessage: function launchMessage (){
        console.log('🔥')
    }
}

console.log(rocket.launchMessage())