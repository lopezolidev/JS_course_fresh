// this is a game implementing loops and conditionals

const secret_word = 'apple'
console.log('Guess the word')

function game(secret_word) {
    let tries = 3
    do {
        let user_word = prompt('Insert the word you think it is the right one')
        if(user_word === secret_word){
            console.log('Congratulations! you guessed correctly')
            break
        } 
        tries--
        if (tries === 2){
            console.log('It is something you eat')
        } else if(tries === 1){
            console.log('It is a fruit, commonly in colors of red, green and yellow')
        } else {
            console.log(`You lost! the word is ${secret_word}`)
        }
    
        
    
    } while ( tries > 0)    
}

game(secret_word)

let decision = prompt('Would you like to play again? (y  / n)')

while(decision === 'y'){
    game(secret_word)
    decision = prompt('Would you like to play again? (y  / n)')
}

console.log('game over')