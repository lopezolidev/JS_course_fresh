/*
    - Creation
    - Concatenation: 4 forms → +, template literals, join(), concat
*/

let s_1 = 'palabra_1'

let s_2 = "palabra_2"

console.log("+ → ", s_1 + ' '+ s_2)

console.log(`template literal → ${s_1} ${s_2}`)

let strings = [s_1, s_2]

console.log("join() → ", strings.join(' '))

console.log("concat → ", s_1.concat(', ',s_2))

//we can also use concat with the literal string

let s_3 = 'my words are '.concat(s_1, ', ',s_2)

console.log(s_3)

/*
    - Literals and values → what's the difference?
    - Escape characters → double colons, template literals and \ 
    - long strings
    - methods
*/

// Escape characters

// 1. Double colons Escape

let double_colons = "I'm a Computer Scientist"

// 2. Alternative Escape

let alternative_escape = 'I\'m a Computer Scientist'

// 3. Template Literal Escape

let template_literal = `I'm a Computer Scientist`

// Writing Long Strings

/*
Con diez cañones por banda,
viento en popa, a toda vela,
no corta el mar, sino vuela
un velero bergantín.
Bajel pirata que llaman,
por su bravura, el Temido,
en todo mar conocido
del uno al otro confín.
*/

// 1. + and \n 

let poema_pirata =  'Con diez cañones por banda,\n' +
                    'viento en popa, a toda vela,\n' +
                    'no corta el mar, sino vuela,\n' +
                    'un velero bergantín.\n' +
                    'Bajel pirata que llaman,\n' +
                    'por su bravura, el Temido,\n' +
                    'en todo mar conocido\n' +
                    'del uno al otro confín.'

console.log(poema_pirata)


// 2. with \n\  

let poema_pirata_2 = 'Con diez cañones por banda,\n\
viento en popa, a toda vela,\n\
no corta el mar, sino vuela,\n\
un velero bergantín.\n\
Bajel pirata que llaman,\n\
por su bravura, el Temido,\n\
en todo mar conocido\n\
del uno al otro confín.'

console.log(poema_pirata_2)

// 3. with ``  

let poema_pirata_3 = `Con diez cañones por banda,
viento en popa, a toda vela,
no corta el mar, sino vuela,
un velero bergantín.
Bajel pirata que llaman,
por su bravura, el Temido,
en todo mar conocido
del uno al otro confín.` // ← this is a string literal, it's what we write

console.log(poema_pirata_3) // ← this is the string value, it's what we see in the console