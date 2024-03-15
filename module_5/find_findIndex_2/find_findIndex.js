// find () → returns the first ELEMENT that matches the condition sent in the body of the arrow function

const numbers = [,2 ,5, 3, 6, 8, 9 ,6 , 4, 3, 2, 1, 11, 20, 20, 39, 54, 32, 65, 47, 84, 32, 76]

const first_number_greater_than_30 = numbers.find(number => number > 30)

console.log(first_number_greater_than_30) // 39

// findIndex() → returns the INDEX of the first element that matches the condition

const multiples_of_3 = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45]

const index_of_greater_than_30 = multiples_of_3.findIndex(number => number > 30)

console.log(index_of_greater_than_30)   // 10

// Exercise: Raffle winner verification program

const participants = [
    {id: 1, name: 'Kath', ticket_number: 1},
    {id: 8, name: 'Rosemary', ticket_number: 8},
    {id: 14, name: 'Oscar', ticket_number: 14},
    {id: 21, name: 'Xavier', ticket_number: 21},
]

function winner(name) {
    const winning_ticket = 8
    const winning_participant = participants.find(participant => participant.ticket_number === winning_ticket )
    if(winning_participant.name === name){
        return `${name} won the raffle`
    } 
    return `${name} did't win the raffle`
}

console.log(winner('Rosemary')) // Rosemary won the raffle

