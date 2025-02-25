/*[SECTION] Syntax, Statements and Comments
    Statements in programming are instructions that we tell the computer to perform
    - It usually end with semi colon(;)
Syntax it is a set of rules that describes how statements must be constructed
    - All lines/blocks of code should be written in a specific manner to work. This is due to how these codees were initially programmed to function and perform in a certain manner
Comments are parts of the code that gets ignored by the language
    - tO describe the written code
    - single-line comment denoted by two slashes //
    - multi-line comment denoted by a slash and asterisk

*/
// Variables
/*
    - It is used to contain data
    - any information that is used by an application is stored in what we called a "memory"
    - create a variables, certain portions of a device's memory is given a "name" that we called "variables"
*/

// Declare variable 

let myVariable;

console.log(myVariable);
myVariable = 'Juan Dela Cruz';
console.log(myVariable);

// variables must be declared first before they are used
//console.log(hello);
//let hello;

// Declaring and initializing variables - the instance when a variable is given it's initial/starting value
// syntax: let/const varableName = value;

let productName = 'desktop computer';
console.log(productName);

let productPrice = 1500;
console.log(productPrice);

const interest = 3.59;
console.log(interest);

// Reassigning variable values
// Syntax: variableName = newValue;

productName = 'laptop';
console.log(productName);

productPrice = 1000;
console.log(productPrice);

//values of constants cannot be changed
//interest = 1.25;
//console.log(interest);

// var vs let/const
/*
    var - is also used in declaring a vriable, but var is an ECMASCRIPT 2015 or ES6 features - let/const

    hoisting - default behavior of moving declarations to the top, In terms of variables and constants, key word var is hoisted and let/const does not allow hoisting
*/

a = 5;
console.log(a);
var a;
//let a;

// Scope essentially means where these variables are available for used
// let and const are blocked scope
// a block is a chunk of code bounded by {}. A block lives in curly braces and anything within the curly braces is a block

let outerVariable = 'hello again';
{
    let innerVariable = 'good bye';
    console.log(innerVariable);
}

console.log(outerVariable);
//console.log(innerVariable);//error

/* [SECTION] Data Types
    Strings are series of characters that create a word , a sentence or anything related to create text

*/