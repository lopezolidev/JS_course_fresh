/* Exercise: Card Game Implementation
    
    Imagine you're building a simple card game. You have an array representing a deck of cards, and you
    want to perform the following operations:

    1. Shuffle the Deck: Randomly rearrange the order of the cards in the deck.
    
    2. Deal Cards: Deal a specific number of cards to players from the top of the deck. 
    
    This exercise involves using the splice() method to shuffle the deck and deal cards.
*/

const cards = [ 2 , 10 , 2, 6, 10, 9, 5 , 7, 10 , 6 , 2 , 9 , 4 , 9 , 10 , 5 , 10 , 4 , 6 , 9 ]

// Fished - Yates Algorithm

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      // Generate random index within the remaining un-shuffled portion (0 to i)
      const j = Math.floor(Math.random() * (i + 1)); // ← if the ';' is not present JS doesn't understand that there's a line jump
      [array[i], array[j]] = [array[j], array[i]]; // swap elements
    }
    return array;
  }
  
  // Example usage
  const shuffledNumbers = shuffle(cards.slice()); // slice to avoid modifying original array
  
  console.log(shuffledNumbers); // [9, 4, 10,  6,  5,  9, 6, 6, 4,  9,  2, 10, 10, 7, 10, 2,  2, 10,  9,  5]

  // Deal cards

  function dealCards(numCards, array){
    const dealt_cards = array.splice(0, numCards)
    return dealt_cards
  }

  const dealt_cards = dealCards(4, shuffledNumbers)
  console.log(dealt_cards)  // [ 2, 6, 7, 6 ]