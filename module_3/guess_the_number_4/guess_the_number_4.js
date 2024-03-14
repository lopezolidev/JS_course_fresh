const secretNumber = parseInt(Math.floor(Math.random() * 10 +1))
console.log(secretNumber)

const playerNumber = parseInt(prompt(`Insert a number between 1 and 10`))

console.log(playerNumber)

if(playerNumber == secretNumber){
    console.log('Congratulations!')   
} else if(playerNumber > secretNumber){
    console.log('The number is too high')
} else {
    console.log('The number is too low')
}