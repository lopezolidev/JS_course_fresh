// How to alter the end of an array? With push() and pop()

// push() → inserts an element (or many) at the end of the array and returns the number of total elements

const music = ['jazz', 'rock', 'salsa']
const number_of_genres = music.push('ballad')
console.log(music)  // [ 'jazz', 'rock', 'salsa', 'ballad' ]
console.log(number_of_genres)   // 4

// pop() → removes the last element of the array and returns such element
const countries = ['Vzla', 'Col', 'Pe', 'RD']
const removed_country = countries.pop()
console.log(countries)  // [ 'Vzla', 'Col', 'Pe' ]
console.log(removed_country)    // RD