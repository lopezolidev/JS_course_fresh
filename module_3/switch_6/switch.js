const pdct = 'Mango'

switch(pdct){
    case 'Melon':
        console.log('Melons are $5 per lb')
        break
    case 'Lemon':
        console.log('Lemons are $3 per lb')
        break
    case 'Strawberries':
        console.log('Strawberries are $3 per lb')
        break
    case 'Mango':
    case 'Papaya':
        console.log('Mangoes and Papayas are $6 per lb')
        break
    default:
        console.log(`${pdct} is not available in the store`)    
}

console.log('Do wish something else?')