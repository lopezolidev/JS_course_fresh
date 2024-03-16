// slice() → makes a portion from the original array and returns such

const animals = ['duck', 'elephant', 'snake', 'turtle', 'dog', 'cat', 'pigeon', 'camel']

const some_animals = animals.slice(3, 6)
console.log(animals)    // ['duck',   'elephant', 'snake',  'turtle', 'dog',    'cat', 'pigeon', 'camel']


console.log(some_animals)   // [ 'turtle', 'dog', 'cat' ]   → from position 3 and stops at 6 - 1.

console.log(animals.slice(3))   // [ 'turtle', 'dog', 'cat', 'pigeon', 'camel' ] → from index 3 and beyond

console.log(animals.slice(-2))  // [ 'pigeon', 'camel' ] → from position -2 and beyond, counts the last element as -1

console.log(animals.slice(-4, -1))  // [ 'dog', 'cat', 'pigeon' ] → starts at -4 and stops before the -1

console.log(animals.slice())    // [ 'duck',   'elephant', 'snake',  'turtle', 'dog',    'cat', 'pigeon', 'camel']