// Objective: The objective of this assignment is to familiarize students with different types of operators in JavaScript and reinforce their understanding through practical exercises.

// Problem Statement: You are tasked with developing a simple calculator program in JavaScript. Your program should be able to perform basic arithmetic operations such as addition, subtraction, multiplication, and division.

// Task 1: Declare variables to store two numeric values for performing arithmetic operations.
let num1;
let num2;

// Task 2: Assign sample numeric values to the variables declared in Task 1.
num1 = 10;
num2 = 5;

// Task 3: Perform arithmetic operations on your numeric values using various operators and display the results.
let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;

console.log("Sum:", sum); // Sum: 15
console.log("Difference:", difference); // Difference: 5
console.log("Product:", product); // Product: 50
console.log("Quotient:", quotient); // Quotient: 2

// Task 4: Explore assignment operators and update the values of variables.
num1 += 2; // num1 = num1 + 2
num2 *= 3; // num2 = num2 * 3

console.log("Updated num1:", num1); // Updated num1: 12
console.log("Updated num2:", num2); // Updated num2: 15

// Task 5: Use comparison operators to compare the values of variables.
let isEqual = (num1 == num2); // Check if num1 is equal to num2
let isGreater = (num1 > num2); // Check if num1 is greater than num2
let isNotEqual = (num1 != num2); // Check if num1 is not equal to num2

console.log("Is num1 equal to num2?", isEqual); // Is num1 equal to num2? false
console.log("Is num1 greater than num2?", isGreater); // Is num1 greater than num2? false
console.log("Is num1 not equal to num2?", isNotEqual); // Is num1 not equal to num2? true

// Task 6: Apply logical operators to combine conditions and display the results.
let isPositive = (num1 > 0 && num2 > 0); // Check if both numbers are positive
let isEven = (num1 % 2 === 0 || num2 % 2 === 0); // Check if at least one number is even

console.log("Are both numbers positive?", isPositive); // Are both numbers positive? true
console.log("Is at least one number even?", isEven); // Is at least one number even? true
