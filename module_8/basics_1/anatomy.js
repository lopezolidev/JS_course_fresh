/*
    What's an object?
    - Complex Data type
    - Data Structure

    based on: property -> value

    obj {
        property: value,
        property: value,
        property: value,
        method () {
            ...
        } Like functions but nested inside objects
    }

*/

const person = {
    name: 'Joe',
    age: 28,
    address: {
        city: 'City A',
        street: 'Roady road 123'
    }, // nested object
    greet () {
        console.log(`Hi, I'm ${this.name}, with the ripe age of ${this.name}. I live in ${this.address.city} on ${this.address.street}`)
    } // method
}

person.greet()  // Hi, I'm Joe, with the ripe age of Joe. I live in City A on Roady road 123
// calling a method


console.log(person.name) ;
//accessing a property

console.log(person.address.city) ; // accessing a nested object

person.phone = '555 - 555 - 5555' ; // creating a property outside the object

person.goodbye = () => {
    console.log('Goodbye') ;
} // creating an arrow function outside of the object, but for the object

console.log(person)

delete person.age ;
// deleting an attribute

delete person.goodbye() ; // this won't work to delete function of goodbye()

person.goodbye = undefined ; // this way we'll return nothing when we call the method or in this case the attribute 'goodbye'

console.log(person)

/*
{
  name: 'Joe',
  address: { city: 'City A', street: 'Roady road 123' },
  greet: [Function: greet],
  phone: '555 - 555 - 5555',
  goodbye: undefined
}
*/
