// A class is the mold of our objects, defines the attribute and methods of it

class Person {
    constructor (name, age) {
        this.name = name ;
        this.age = age ;
    }   // the constructor method is the method called when we call the class to make an instance. 'this' refers to the execution context, being in this case the 'to-be-intanced' object

    greet () {
        console.log(`Hello, I'm ${this.name} and I'm ${this.age}`)
    } // this is how we create a method inside a class
}

const person_1 = new Person('Oriana', 22) ;
person_1.greet() ;  // Hello, I'm Oriana and I'm 22
 

// Creating this class 'Person', Javascript internally creates a prototype with all the attributes and metods of the class 'Person' every time we want to instance a new object. The instanced object communicates with the class by going through the prototype.

// When an object looks for a method, looks for it's prototype and then the prototype for such prototype. Until it reaches the 'father' prototype 'Object.prototype' which is the base for all the objects in JavaScript. In this language, inheritance works through prototypes, NOT classes. That's called the "prototype chain".

// The property of 'prototype' regarding classes and constructor functions only works for methods. Not with attributes