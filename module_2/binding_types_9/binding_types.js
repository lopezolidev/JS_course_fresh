/* Binding in JavaScript refers to how the this keyword is bound or associated to a function.
 So, understanding the different types of “binding” is essential for understanding how this behaves in different situations.
 Let's see the five main types of “binding”:

 Implicit Binding:
 Occurs when a method is invoked on an object, and this is bound to the object that contains the method.
 Example:
*/
const person = { 
    name: 'Adam', 
    greet: function() { 
        console.log(`Hello, I'm ${this.name}`); 
    } 
};
person.greet(); // Output: Hello, I'm Adam

/* Explicit Binding:
    - Occurs when methods like call, apply, or bind are used to explicitly set the value of this.
    Example:
*/
function greet() { 
    console.log(`Hello, I'm ${this.name}`); 
}
const adam = { 
    name: 'Adam' 
};
greet.call(adam); // Output: Hello, I'm Adam

/*  New Binding:
    Occurs when a function is invoked with the new keyword, thus creating a new object and binding this to that object.
    Example:
*/

function Person(name) { 
    this.name = name; 
}

const adam_2 = new Person('Adam');

console.log(adam_2.name); // Output: Adam

/* Lexical Binding:
    Occurs when this is used in a function within another function. In this case, this is bound to the lexical context of the outer function.
    Example:
*/
const person_2 = { 
    name: 'Adam', 
    greet: function() { 
        const innerFunction = () => { 
            console.log(`Hello, I'm ${this.name}`); 
        }; 
        innerFunction();
    } 
};

person_2.greet(); // Output: Hello, I'm Adam

/* Window Binding:
    Occurs when none of the previous rules apply and this is bound to the global object (e.g., window in the browser).
    Example (run in the browser):
*/
function showName() { 
    console.log(this.name); 
}

window.name = 'Adam';

showName(); // Output: Adam
