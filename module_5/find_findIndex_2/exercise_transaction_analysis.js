// Exercise: Transaction analysis

const transactions = [
    {id: 1, description: 'Grocery shopping', ammount: -80},
    {id: 2, description: 'Salary Deposit', ammount: 3000},
    {id: 3, description: 'Utilities Bill payment', ammount: -100},
    {id: 4, description: 'Online purchase', ammount: -40},
    {id: 5, description: 'Freelance gig', ammount: 300},
]

// 1. Calculate Total Balance

const total_ammount = transactions.reduce((accum, current) => accum + current.ammount, 0)

console.log('Total Balance: ',total_ammount)  // 3080

// 2. Find the largest transaction

const largest_income = transactions.reduce( (acc, cur) => {
    if(acc.ammount < cur.ammount){
        acc = cur
    }
    return acc
}, transactions[0])

console.log('largest income: ', largest_income) // largest income:  { id: 2, description: 'Salary Deposit', ammount: 3000 }

const largest_expense = transactions.reduce( (acc, cur) => {
    if(acc.ammount > cur.ammount){
        acc = cur
    }
    return acc
}, transactions[0])

console.log('largest expense: ' ,largest_expense) // largest expense:  { id: 3, description: 'Utilities Bill payment', ammount: -100 }

const largest_transaction = transactions.reduce( (max_transaction, current_transaction) => {
    return Math.abs(current_transaction.ammount) > Math.abs(max_transaction.ammount) ? current_transaction : max_transaction 
}, transactions[0] )

console.log('Largets transaction: ', largest_transaction)   // Largets transaction:  { id: 2, description: 'Salary Deposit', ammount: 3000 }

// 3. Filter purchase transactions

const purchase_transactions = transactions.filter( transaction => transaction.ammount < 0)

console.log('Purchase transactions: ', purchase_transactions)
/*
Purchase transactions:  [
  { id: 1, description: 'Grocery shopping', ammount: -80 },
  { id: 3, description: 'Utilities Bill payment', ammount: -100 },
  { id: 4, description: 'Online purchase', ammount: -40 }
]
*/

// 4. Find a transaction by description

const transaction_by_description = transactions.find( transaction => transaction.description === 'Freelance gig')

console.log('Transaction by description: ',transaction_by_description)  // Transaction by description:  { id: 5, description: 'Freelance gig', ammount: 300 } 

// 5. Find the index of a transaction by ammount

const index_of_transaction_by_ammount = transactions.findIndex( transaction => transaction.ammount === -40)

console.log('Index of a transaction by ammount -40: ', index_of_transaction_by_ammount) // Index of a transaction by ammount:  3

// 6. Update transactions descriptions

transactions.forEach( transaction => {
    if(transaction.ammount < 0){
        transaction.description = `Expense: ${transaction.description}`
    } else {
        transaction.description = `Income: ${transaction.description}`
    }
})

console.log(transactions)