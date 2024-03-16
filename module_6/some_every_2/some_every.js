// Methods that DO NOT modify the original array

// every() → checks if ALL of the elements in the array pass certain condition

const ages = [23, 45, 19, 25, 28, 39]

const isEveryPersonOver20 = ages.every( age => age > 18)
console.log(isEveryPersonOver20)    // true


// some() → checks if AT LEAST one item passes certain condition

const isSomeoneOver60 = ages.some( age => age > 60)
console.log(isSomeoneOver60)    // false

