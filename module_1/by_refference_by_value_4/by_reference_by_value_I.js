// make example of primite values


// make example with an array, showing that it's modified even if it's a "copy"

let obj_1 = {
    name: 'pepito',
    age: 5
}

let obj_2 = {
    name: 'juancito',
    age: 12
}

let obj_3 = {
    name: 'jorgito',
    age: 15
}

let obj_4 = {
    name: 'maro',
    age: 13
}
let objs = [obj_1, obj_2, obj_3, obj_4]

objs[0].name = 'pedrito'
objs[0].age = 8

let objs_2 = objs

objs_2[0].name = 'Exterminator'
objs_2[0].age = 9

console.log(objs)

