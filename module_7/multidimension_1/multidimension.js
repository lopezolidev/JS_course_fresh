// Creating a bidimensional array or matrix

const one_dimension_array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const bidimensional_array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

const matrix = [
    [1, 2, 3], 
    [4, 5, 6], 
    [7, 8, 9]
] // a visually more appealing way to represent matrices

// accessing a matrix
console.log(matrix[1])  // [ 4, 5, 6 ]
console.log(matrix[1][2]) // 6

matrix[1][2] = 19 ;

// resorting through a matrix

let i = 0;
while(i < matrix.length){
    let j = 0;
    while(j < matrix[i].length){
        console.log(matrix[i][j]);
        j++;
    }
    i++;
}
    // 1 2 3 4 5 6 7 8 9

// making a function with a bidimensional array

function is_included_in_matrix (matrix, element){
    let b = false;
    let i = 0;
    while(i < matrix.length){
        let j = 0;
        while(j < matrix[i].length){
            if(matrix[i][j] === element){
                b = true; 
            }
            j++
        }
        i++
    }
    return b ;
}

console.log(is_included_in_matrix(matrix, 5))   // true
console.log(is_included_in_matrix(matrix, 34))   // false


// duplicate elements from a matrix

function duplicate_matrix (matrix){
    const new_matrix = [] // initialize with empty brackets

    for(let i = 0; i < matrix.length; i++){
        new_matrix[i] = [...matrix[i]] ; // using spread operator we 'drop' these elements from the input matrix, inside the row of the new matrix
    }
    
    return new_matrix ;
}

console.log(duplicate_matrix(matrix))   // [ [ 1, 2, 3 ], [ 4, 5, 19 ], [ 7, 8, 9 ] ]