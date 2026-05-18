// JavaScript Control Flow Mastery Notes
// Save this file and run it in Node.js or browser console to test the examples

// ============================================
// TRUTHY VALUES (Evaluate to true in boolean context)
// ============================================

// All values are truthy except the falsy list below
// Important truthy examples you might expect to be false:
console.log(Boolean("false"));  // true - non-empty string
console.log(Boolean(" "));      // true - space is a character
console.log(Boolean("0"));      // true - string with zero
console.log(Boolean([]));       // true - empty array
console.log(Boolean({}));       // true - empty object
console.log(Boolean(function(){})); // true - function is an object

// ============================================
// FALSY VALUES (Evaluate to false in boolean context)
// ============================================

// These 8 values are the only falsy values in JavaScript
console.log(Boolean(false));     // false
console.log(Boolean(0));         // false
console.log(Boolean(-0));        // false
console.log(Boolean(""));        // false - empty string double quotes
console.log(Boolean(''));        // false - empty string single quotes
console.log(Boolean(null));      // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN));       // false
console.log(Boolean(0n));        // false - BigInt zero

// ============================================
// IF-ELSE STRUCTURE
// ============================================

let tanju = true;
if (tanju) {
    console.log('Its executing');
} else {
    console.log('Not executing');
}

const isUserLoggedIn = true;
if (isUserLoggedIn) {
    console.log('Logged In');
}

const temperature = 50;
if (temperature < 40) {
    console.log('Less than 40');
} else if (temperature === 40) {
    console.log('Equal to 40');
} else {
    console.log('Greater than 40');
}

// Common mistakes to avoid:
// Wrong: } else (condition) {
// Correct: } else if (condition) {

// ============================================
// LOGICAL OPERATORS
// ============================================

// AND (&&) - both conditions must be true
const userLoggedIn = true;
const debitCard = true;
if (userLoggedIn && debitCard) {
    console.log('Allow him to buy');
}

// OR (||) - at least one condition must be true
const loggedInFromGoogle = true;
const loggedInFromEmail = false;
if (loggedInFromEmail || loggedInFromGoogle) {
    console.log('User Logged in');
}

// ============================================
// EMPTY CHECKS
// ============================================

// Array check
const isEmail = [];
if (isEmail.length === 0) {
    console.log('The user email is empty');
} else {
    console.log('User has an email');
}

// Object check
const emails = {};
if (Object.keys(emails).length === 0) {
    console.log('Object is Empty');
} else {
    console.log('Object has properties');
}

// ============================================
// NULLISH COALESCING OPERATOR (??)
// ============================================

// Returns the first value that is NOT null or undefined
let val1 = null ?? 10;
console.log(val1); // 10

let val2 = undefined ?? 15;
console.log(val2); // 15

let val3 = 0 ?? 20;
console.log(val3); // 0 (0 is not null or undefined)

let val4 = null ?? undefined ?? 5 ?? 10;
console.log(val4); // 5

// Difference between ?? and ||
let usingNullish = 0 ?? 100;
let usingOr = 0 || 100;
console.log(usingNullish); // 0
console.log(usingOr);      // 100

// ============================================
// TERNARY OPERATOR
// ============================================

// Syntax: condition ? expressionIfTrue : expressionIfFalse

// Good use - returning a value
const iceTeePrice = 10;
const message = iceTeePrice >= 80 ? 'Price is okay' : 'Price is unfair, take it';
console.log(message);

// Avoid using ternary for executing statements
// Wrong: price >= 80 ? console.log('okay') : console.log('unfair')

// ============================================
// SWITCH STATEMENT
// ============================================

const month = 22;
switch (month) {
    case 1:
        console.log('jan');
        break;
    case 2:
        console.log('feb');
        break;
    case 3:
        console.log('march');
        break;
    case 4:
        console.log('april');
        break;
    default:
        console.log('The input value is unavailable');
        break;
}

// Switch with string values
const grade = 'competitive_programming';
switch (grade) {
    case 'competitive_programming':
        console.log('passed');
        break;
    case 'DataStructure':
        console.log('Passed');
        break;
    default:
        console.log('Input a valid course');
        break;
}

// Fall-through example (intentional - no break)
const day = 'Saturday';
switch (day) {
    case 'Saturday':
    case 'Sunday':
        console.log('Weekend');
        break;
    default:
        console.log('Weekday');
}


// WHEN TO USE WHAT : 


// if-else: Simple yes/no question
// if (user.isLoggedIn) showDashboard() else showLogin()

// && : Multiple conditions all must be true
// if (user.isAdmin && user.hasPermission) allowEdit()

// || : At least one condition must be true
// if (loggedInWithGoogle || loggedInWithEmail) allowAccess()

// ?? : Setting fallback for missing data
// const name = userName ?? 'Guest'

// Ternary: Choosing one of two values
// const status = score >= 60 ? 'Pass' : 'Fail'

// switch: One variable with many specific values
// switch(day) { case 'Monday': ... case 'Tuesday': ... }

// if-else if chain: Complex logic with different conditions
// if (score >= 90) grade = 'A'
// else if (score >= 80) grade = 'B'
// else grade = 'C'


// Quick Look :

/*
 if-else is a fork in the road. Choose left or right.
 && is a bouncer at a club. Both IDs must be valid.
 || is having backup plans. Try first plan, if fails try second.
 ?? is a spare key. Use real key if available, otherwise use spare.
 ternary is a coin flip. Heads gives one result, tails gives another.
 switch is a vending machine. Press button A gets chips, button B gets candy.
*/ 

// COMMON ERRORS AND SOLUTIONS : 


// 1. Using return in global switch
// Error: Illegal return statement
// Fix: Use break, or wrap switch inside a function

// 2. Using else with condition
// Wrong: } else (condition) {
// Correct: } else if (condition) {

// 3. Missing variable declaration
// Wrong: grade = 'A';
// Correct: let grade = 'A';

// 4. Switch missing colon after default
// Wrong: default
// Correct: default:


// - Falsy values: false, 0, -0, "", '', null, undefined, NaN, 0n
// - Everything else is truthy including "false", "0", [], {}
// - Use ?? for null/undefined defaults, not for other falsy values
// - Ternary returns values, if-else executes blocks
// - Switch uses strict comparison (===)
// - break exits switch, return exits function
// - Empty array and empty object are truthy, check .length or Object.keys()

console.log('Control flow notes loaded. Study the patterns above.');


const publicHoliday = 'monday';

switch(publicHoliday) { 
  case 'sat':
  case 'sunday':
    console.log('Weekend - No work');
    break;  
  case 'monday':
  case 'tuesday':
  case 'wednesday':
  case 'thursday':
    console.log('Work Day');
    break;  
  case 'friday': 
    console.log('Weekend starts - yay'); 
    break; 
  default: 
    console.log('Not a valid day');
}