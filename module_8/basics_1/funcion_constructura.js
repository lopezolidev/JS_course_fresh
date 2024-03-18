// Creating objects from functions

function Persona(name, lastname, age){
    this.name = name ;
    this.lastname = lastname ;
    this.age = age ;
}   //'this' refers to the 'function' as an 'object-to-be' (execution context)

const person_1 = new Persona('Oscar', 'Perez', 24) ;    // using 'new' to call this function as an object constructor

person_1.nationality = 'Dominican' ; // inserting a property in person_1 outside of the object

console.log(person_1) ;   
/*
Persona {
  name: 'Oscar',
  lastname: 'Perez',
  age: 24,
  nationality: 'Dominican'
}
*/

const person_2 = new Persona('Peter', 'Peterson', 31) ; 
console.log(person_2)   // Persona { name: 'Peter', lastname: 'Peterson', age: 31 }

// How to add methods to the objects? 

Persona.prototype.greet = function () {
    console.log(`Hi, my name is ${this.name} ${this.lastname} and I'm ${this.age}, also my nationality is ${this.nationality}`)
}
// <constructor function>.prototype.<method name> = function () {...}

person_1.greet() ;  // Hi, my name is Oscar Perez and I'm 24, also my nationality is Dominican

person_2.greet() ;  // Hi, my name is Peter Peterson and I'm 31, also my nationality is undefined ← this person has no nationality, because we didn't insert that attribute 