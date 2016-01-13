#!/usr/bin/env node

'use strict';

/*
 * Create a function called startsWith that returns true if a given String
 * starts with a given character. Should work if the given values are
 * uppercase or lowercase.
 */

/* Defines a function named startsWith() with the parameters string and 
character. startsWith() contains a code block that executes an if statement
that checks whether the [0] index of the string parameter is === to the
character parameter. If string[0] === character, the fuction returns the
Boolean value of true.
*/
function startsWith(string, character) {     
    if (string[0] === character) {
        return true;
    }
}
// declares the variable stringCheck then assigns it to 'Alice'. 
var stringCheck = 'Alice';
// declares the variable characterCheck then assigns it to 'A'.
var characterCheck = 'A';
/* inspects the function startsWith() with the arguements 
(stringCheck, characterCheck) passed into it. It displays the 
Boolean value true.
*/
console.log(startsWith(stringCheck, characterCheck));
 
/*
 * Create a function called toDashCase that returns a dash case String: If 
 * input is "Your Mama", the output result would be "your-mama".
 */

/* defines a function named toDashCase() with a parameter named string.
toDashCase() contains a code block that executes an if statement that
checks whether the parameter string is equal to itself. If string is
equal to string the function reutrns the string all lower case then searches the
string to see if there is a ' ' and if there is it replaces the ' ' with a '-'.
*/
function toDashCase(string) {
    if (string === string) {
        return string.toLowerCase().replace(' ', '-');
    }
}

// declares the variable string then assigns it to "Your Mama"
var string = 'Your Mama';
/* inspects the function toDashCase() with the arguement (string) passed into 
it. Displays 'your-mama'. */
console.log(toDashCase(string));
