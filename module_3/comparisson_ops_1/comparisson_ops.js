// Resume: Comparison Operators in JavaScript

// Comparison operators in JavaScript are used to compare two values and return a Boolean value (true or false) based on the comparison result. These operators are essential for making decisions and controlling the flow of programs. Here are some commonly used comparison operators in JavaScript along with examples:

// 1. Equal to (==):
//    - Description: Checks if two values are equal, performing type coercion if necessary.
//    - Example: 
5 == 5; // true
"5" == 5; // true (type coercion)
5 == 6; // false

// 2. Not equal to (!=):
//    - Description: Checks if two values are not equal, performing type coercion if necessary.
//    - Example: 
5 != 6; // true
"5" != 5; // false (type coercion)

// 3. Strict equal to (===):
//    - Description: Checks if two values are equal without performing type coercion.
//    - Example: 
5 === 5; // true
"5" === 5; // false (no type coercion)

// 4. Strict not equal to (!==):
//    - Description: Checks if two values are not equal without performing type coercion.
//    - Example: 
5 !== 6; // true
"5" !== 5; // true (no type coercion)

// 5. Greater than (>): 
//    - Description: Checks if the left operand is greater than the right operand.
//    - Example: 
5 > 3; // true
2 > 7; // false

// 6. Less than (<):
//    - Description: Checks if the left operand is less than the right operand.
//    - Example: 
5 < 3; // false
2 < 7; // true

// 7. Greater than or equal to (>=): 
//    - Description: Checks if the left operand is greater than or equal to the right operand.
//    - Example: 
5 >= 3; // true
2 >= 7; // false
5 >= 5; // true

// 8. Less than or equal to (<=):
//    - Description: Checks if the left operand is less than or equal to the right operand.
//    - Example: 
5 <= 3; // false
2 <= 7; // true
5 <= 5; // true

// These comparison operators are fundamental for performing logical evaluations and conditional branching in JavaScript. By mastering these operators, you can effectively compare values and make informed decisions within your programs.