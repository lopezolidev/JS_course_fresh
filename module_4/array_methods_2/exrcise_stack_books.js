// Exercise: Simulate a Stack of books

function stack_a_book(book, stack_of_books){
    stack_of_books.push(book)
    console.log('stack of books: ', stack_of_books)
}

function destack_a_book(stack_of_books){
    const removed_book = stack_of_books.pop()
    console.log('stack of books: ', stack_of_books)
    return removed_book
}

function interact_with_stack(stack_of_books, option, book){

        console.log(`What do you wish? 
        a- Stack a Book
        b- Destack a Book
        c- Do nothing
        `)
        if(option === 'a'){
            stack_a_book(book, stack_of_books)
        } else if(option === 'b'){
            destack_a_book(stack_of_books)
        } else {
            console.log('stack of books: ', stack_of_books)
            return
        }
}

const books = ['book 1', 'book 2', 'book 3', 'book 4']

interact_with_stack(books, 'a', 'El Principito')

// --------------------------  ALTERNATE FORM

let bookCart=[]

const ADD_TO_CART_ACTION='addToCart'
const REMOVE_FROM_CART_ACTION='removeFromCart'
const VIEW_CART_ACTION='viewCart'

function viewCart(){
    console.log('Current Cart of Books: ',bookCart)
}

function performCartActions(action,newBook){
    switch(action){
    
        case ADD_TO_CART_ACTION:
        bookCart.push(newBook)
        break;

    case REMOVE_FROM_CART_ACTION:
        if(bookCart.length===0){
            console.log('Cart is empty. No books to remove.')
        }else{
            const removedBook=bookCart.pop()
            console.log(`Removed book from the cart: ${removedBook}`)
        }

        break;

        case VIEW_CART_ACTION:
            viewCart()
            break;

        default:
            console.log('Invalid action. Please choose a vaid option.')
        }
}

    performCartActions(ADD_TO_CART_ACTION,'Think like a monk')
    performCartActions(VIEW_CART_ACTION)
    performCartActions(ADD_TO_CART_ACTION,'Ego is the enemy.')
    performCartActions(VIEW_CART_ACTION)
    performCartActions(REMOVE_FROM_CART_ACTION)