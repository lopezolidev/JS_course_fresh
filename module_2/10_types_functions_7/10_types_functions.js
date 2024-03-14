/* 
    1. Declarative Functions (or named functions):

    - They are defined with the keyword function
    - They can be referenced before their declaration.

*/
 function suma(a, b) { return a + b; } 

/* 2. Expressive Functions (or anonymous functions):

- They are assigned to variables.
- They are often used to assign functions as values to variables.

*/
const suma = function(a, b) { return a + b; };

/* 3. Arrow Functions:

 -Introduced in ES6, they provide a more concise syntax.
 - They have a slightly different behavior with respect to the value of this.

*/
const suma = (a, b) => a + b; 

// 4. Constructor Functions:

// Used to create objects with new.
// They use this to assign properties to the new object.
function Persona(nombre, edad) { this.nombre = nombre; this.edad = edad; } 
const persona1 = new Persona('Juan', 25); 

// 5. Higher-Order Functions:

// They accept functions as arguments or return functions.
// Examples include map, filter, reduce.

// 6. Recursive Functions:

// They call themselves during execution.
// Useful for problems that can be divided into smaller subproblems.
function factorial(n) { if (n === 0 || n === 1) { return 1; } else { return n * factorial(n - 1); } } 

// 7. Nested Functions:

// Defined inside another function.
// They can access the variables of the containing function (closure).
function exterior() { let variableExterior = 'Exterior'; function interior() { console.log(variableExterior); } interior(); } 
exterior(); 

// 8. Object Methods:

// Functions that are properties of objects and are called methods when invoked in the context of that object.
const objeto = { metodo: function() { console.log('Hola desde el método'); } }; 
objeto.metodo(); 

// 9. Asynchronous Functions:

// Used to handle asynchronous operations with callbacks, Promises or Async/Await.
async function fetchData() { const response = await fetch('<https://api.example.com/data>'); const data = await response.json(); console.log(data); } 

// 10. Pure Functions:

// Given the same set of inputs, they will always produce the same output without causing observable side effects.
// They do not depend on or modify external states.
function suma(a, b) { return a + b; } 
