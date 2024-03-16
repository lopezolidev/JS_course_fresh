// Exercise: Find a target string and index of first and last occurrence for such string

const fruits = ['banana', 'apple', 'orange', 'grape', 'tangerine', 'watermelon', 'banana', 'apple', 'tangerine', 'blueberries']

function find_occurrence (target_string, array) {
    if(array.includes(target_string)){
        return {
            index_first_occurrence: array.indexOf(target_string),
            index_last_occurrence: array.lastIndexOf(target_string)
        }
    }
    return -1
}
const ocurrence = find_occurrence('apple', fruits)
console.log(ocurrence)  // { index_first_occurrence: 1, index_last_occurrence: 7 }