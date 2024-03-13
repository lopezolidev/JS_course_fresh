// Creating social media profile

// 1. basic data
const user_name = 'Terminus'
const full_name = 'Dylan Nash'
const age = 25

// 2. address
const address = {
    street: '321 Woodke Street',
    city: 'San Programador',
    state: 'Techland'
}

// 3. hobbies
const hobbies = ['Coding', 'Working out', 'Gaming']

// 4. representing bio

const personalized_bio = `Hi, I'm ${full_name}, but people from ${address.city} now me better as ${user_name}. I'm at the ripe age of ${age}, living in ${address.street} from ${address.state}. My hobbies include ${hobbies.pop()}, ${hobbies.pop()} and ${hobbies.pop()}`

console.log(personalized_bio)