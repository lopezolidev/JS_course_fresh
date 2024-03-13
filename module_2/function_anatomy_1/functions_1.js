function calculate_price_with_discout (price, discount_percentage) {
    const discount = (price * discount_percentage) / 100
    const discounted_price = price - discount
    return discounted_price
}

const original_price = 400
const discount_value = 15

const result = calculate_price_with_discout(original_price, discount_value)
console.log('Original price: $' + original_price)
console.log('Discount : ' + discount_value + '%')
console.log('Discounted price: $' + result)