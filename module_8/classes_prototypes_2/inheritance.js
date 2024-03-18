// Let's create a general class that other classes will inherit from it.

class Animal {
    constructor (name, type) {
        this.name = name ;
        this.type = type ;
    }
    make_sound () {
        console.log("The animal emits a sound...") ;
    }
} // parent class. We will inherit from this one

class Dog extends Animal { // 'extends' means that 'Animal' will now be the prototype of 'Dog' 
    constructor (name, type, breed ) {
        super(name, type) ; // now we're calling the constructor from 'Animal' class, sending parameters of 'name' and 'type' to the constructor of 'Animal' but 'this' refers to the instance of 'Dog' not 'Animal'

        this.breed = breed ; 
    }

    make_sound () {
        console.log(`The ${this.type} barks`) ;
    } // we're overwriting the method 'make_sound' and also refering to an attribute that is not 'present' in this class 

    run () {
        console.log(`${this.name} runs playfully`) ;
    } // we're refering to an attribute of the parent class. The prototype of 'Dog' that is 'Animal'
}

const dog_1 = new Dog('toby', 'dog', 'bulldog') ;

console.log(dog_1) ;    // Dog { name: 'toby', type: 'dog', breed: 'bulldog' }
dog_1.make_sound() ;    // The dog barks
dog_1.run() ;           // toby runs playfully


// I want to insert a new method to an INSTANCE

dog_1.play = function () {
    console.log(`${this.name} is playing outside`) ;
}

dog_1.play() ;  // toby is playing outside

console.log(dog_1)
/*
Dog {
  name: 'toby',
  type: 'dog',
  breed: 'bulldog',
  play: [Function (anonymous)]
}
*/

// Now I want to insert this method for EVERY dog. That means, that I have to alter the prototype of 'Dog' and add the method

Dog.prototype.play = function () {
    console.log(`${this.name} is playing outside`) ;
} // 'prototype' is only accessed through classes. Not instances

// Now let's make a general method that any class that extends from 'Animal' can also have access 

Animal.prototype.third_method = function () {
    console.log(`This ${this.type} likes to move around`) ;
}

dog_1.third_method() ;    // This dog likes to move around
// even though 'third_method()' is not present in the class of 'Dog', can be accessed through the prototype chain.
// first, dog_1 asks its prototype if such method is in this methods (in this case 'Dog' prototype). If it's not will follow up with the prototype, which in this case is 'Animal' prototype. As it's available, will make use of the method

// let's see which is the parent of the parents of the prototypes

let currentPrototype = Object.getPrototypeOf(dog_1);
  for (;currentPrototype !== null; currentPrototype = Object.getPrototypeOf(currentPrototype)) {
    console.log(currentPrototype);
  }

/*

Animal { play: [Function (anonymous)] }
{ third_method: [Function (anonymous)] }
[Object: null prototype] {} ← the end of the prototype chain is a null pointer

*/

// What's 'this'?

Dog.prototype.whats_this = function () {
    console.log(`${this}`)
}

dog_1.whats_this() ;    // [object Object] ← referring to the execution context. Meaning 'dog_1'