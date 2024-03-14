// this methods also DO NOT alter the original array

// filter() ← recieves a condition

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const even_numbers = numbers.filter(number => number % 2 === 0) //← we send a condition in the body of the arrow function

console.log(numbers)
/*
[
  1, 2, 3, 4,  5,
  6, 7, 8, 9, 10
]
*/

console.log(even_numbers)   // [ 2, 4, 6, 8, 10 ]


// reduce() · Case 1 → makes a sum of all the elements

const sum = numbers.reduce((accumulated_value, current_value) => accumulated_value + current_value, 0) 
// in this case, each value represent what they show. We want to sum accumulated to the current. Starting the accumulated with 0

console.log(sum)    // 55

// reduce() · Case 2 → counts the frequency of elements in an array

const words = ['hello', 'chair', 'ball', 'shoe', 'pendulum', 'hello', 'chair', 'table', 'house', 'chair']

const words_frequency = words.reduce( (accumulator, current_value) => {
    if(accumulator[current_value]){
        accumulator[current_value]++
    } else {
        accumulator[current_value] = 1
    }
    return accumulator
}, {})
// this case, the accumulator will be an empty object. Therefore that's what we send as second parameter in the method 'reduce()'. Then we'll use 'current_value' as an element from the array and check if that element already exists in the object accessing its property, hence the 'accumulator[current_value]' validation. If that object exists, we will sum 1 to the existing value for such attribute, if not we'll initialize that attribute in 1

console.log(words_frequency)
/*
 {
  hello: 2,
  chair: 3,
  ball: 1,
  shoe: 1,
  pendulum: 1,
  table: 1,
  house: 1
}

*/

// exercise: passing grade average. Calculate the average of the passing grades, that means the average of grades greater than 70

const grades = [100, 90, 100, 80, 90, 80, 65, 28, 60, 45, 72, 55, 88, 40, 68, 75, 58, 95, 62, 50, 82, 35]

const passing_grades = grades.filter( grade => grade >= 70)
const number_passing_grades = passing_grades.length

const passing_grade_average = parseFloat((passing_grades.reduce( (accum, current) => accum + current, 0) / number_passing_grades).toFixed(2))

console.log(passing_grades)
/*
[
  100, 90, 100, 80, 90,
   80, 72,  88, 75, 95,
   82
]
*/
console.log(passing_grade_average)  // 86.55