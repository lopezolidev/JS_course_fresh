/*

for (variable of list_of_variables){
    do something for every variable in the list...
}

    - this works in iterable objects → arrays and strings

*/

const shelf = ['Don Quijote', 'The Treasure Island', 'The C++ programming language']

for (book of shelf){
    console.log(book + ' volume 1')
} // even though 'shelf' is a constant, we can alter its elements because those are non constant variables

/*
    Don Quijote volume 1
    The Treasure Island volume 1
    The C++ programming language volume 1
*/