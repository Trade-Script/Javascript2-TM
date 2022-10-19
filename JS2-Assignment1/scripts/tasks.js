// My Functions
// Add
function addNumbersNew() {
    number1 = parseFloat(document.getElementById('addend1New').value);
    number2 = parseFloat(document.getElementById('addend2New').value);
    document.getElementById('sumNew').innerHTML = number1 + number2;
}
document.getElementById('addNumbersNew').addEventListener('click', addNumbersNew);


// Subtract
function subtractNumbersNew() {
    number1 = parseFloat(document.getElementById('minuendNew').value);
    number2 = parseFloat(document.getElementById('subtrahendNew').value);
    document.getElementById('differenceNew').innerHTML = number1 - number2;
}
document.getElementById('subtractNumbersNew').addEventListener('click', subtractNumbersNew);


// Multiply with arrow functions and querySelectors
const multiplyNumbersNew = () => {
    number1 = parseFloat(document.querySelector('#factor1New').value);
    number2 = parseFloat(document.querySelector('#factor2New').value);
    document.querySelector('#productNew').innerHTML = number1 * number2;
}
document.querySelector('#multiplyNumbersNew').addEventListener('click', multiplyNumbersNew);


// Divide with arrow functions and querySelectors
const divideNumbersNew = () => {
    number1 = parseFloat(document.querySelector('#dividendNew').value);
    number2 = parseFloat(document.querySelector('#divisorNew').value);
    document.querySelector('#quotientNew').innerHTML = number1 / number2;
}
document.querySelector('#divideNumbersNew').addEventListener('click', divideNumbersNew);



// Add
function addNumbers() {
    number1 = parseFloat(document.getElementById('addend1').value);
    number2 = parseFloat(document.getElementById('addend2').value);
    document.getElementById('sum').value = number1 + number2;
}
document.getElementById('addNumbers').addEventListener('click', addNumbers);


// Subtract
function subtractNumbers() {
    number1 = parseFloat(document.getElementById('minuend').value);
    number2 = parseFloat(document.getElementById('subtrahend').value);
    document.getElementById('difference').value = number1 - number2;
}
document.getElementById('subtractNumbers').addEventListener('click', subtractNumbers);


// Multiply with arrow functions and querySelectors
const multiplyNumbers = () => {
    number1 = parseFloat(document.querySelector('#factor1').value);
    number2 = parseFloat(document.querySelector('#factor2').value);
    document.querySelector('#product').value = number1 * number2;
}
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);


// Divide with arrow functions and querySelectors
const divideNumbers = () => {
    number1 = parseFloat(document.querySelector('#dividend').value);
    number2 = parseFloat(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = number1 / number2;
}
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);


// Date
const dateYear = new Date().getFullYear();
document.getElementById('year').innerHTML = dateYear;


// Array
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
document.getElementById('array').innerHTML = arr;

// odd numbers
const odd = arr.filter(number => {
    return number % 2 === 1;
});
document.getElementById('odds').innerHTML = odd;

// even numbers
const even = arr.filter(number => {
    return number % 2 === 0;
});
document.getElementById('evens').innerHTML = even;

// sum of numbers
const initialValue = 0;
const sum = arr.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue);
document.getElementById('sumOfArray').innerHTML = sum;

// multiply numbers by 2
const multipliedNumbers = arr.map(function (element) {
    return element * 2;
});
document.getElementById('multiplied').innerHTML = multipliedNumbers;

// sum of multiplied numbers
const newArr = arr.map(function (element) {
    return element * 2;
});
const sumMultiplied = newArr.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue);
document.getElementById('sumOfMultiplied').innerHTML = sumMultiplied;


/*
// Steps 1 & 2, found a more efficient solution above

// Add
function add(number1, number2) {
    return number1 + number2;
}
// with arrow function
const add = (number1, number2) => number1 + number2;


// Subtract
function subtract(number1, number2) {
    return number1 - number2;
}
// with arrow function
const subtract = (number1, number2) => number1 - number2;


// Multiply
function multiply(number1, number2) {
    return number1 * number2;
}
// with arrow function
const multiply = (number1, number2) => number1 * number2;


// Divide
function divide(number1, number2) {
    return number1 / number2;
}
// with arrow function
const divide = (number1, number2) => number1 / number2;
*/


/*
// onclick event listeners

document.querySelector('#addNumbers').onclick = addNumbers;
document.querySelector('#addNumbers').addEventListener('click', addNumbers);
document.getElementById('addNumbers').addEventListener('click', addNumbers);
document.getElementById('addNumbers').onclick = function() { addNumbers() };
*/


/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2

// Step 2: In the function, return the sum of the parameters number1 and number2

// Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function

// Step 4: Assign the return value to an HTML form element with an ID of sum

// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function

// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers

// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and multiplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers

// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers

// Step 9: Test all of the mathematical functionality of the task3.html page.


/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date

// Step 2: Declare a variable to hold the current year

// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2

// Step 4: Assign the current year variable to an HTML form element with an ID of year


/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25

// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"

// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the result to the HTML element with an ID of "odds" ( hint: % (modulus operator) )

// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"

// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"

// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"

// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"
