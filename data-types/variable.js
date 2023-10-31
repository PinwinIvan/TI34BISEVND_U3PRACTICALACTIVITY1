// EXERCISES I

// comments can make code readable

// This is my first JS Code

/*
comments can 
make code readable, 
easy to reuse
and informative
*/

const producer = 'Juanin';
let on = true;
let off = false;
let hatchet;
let nothing = null;

let juanin;
let tulio;
let bodoque;
let sog;

const five = 5;
let axe = 'Axe'
const y = 10;
const z = 2444;
let x = y-z;

let firstName = prompt("Your name:");
let lastName = prompt("Your last name:");
let statusMarital = prompt("Marital Status:");
let country = prompt("Country of origin:");
let age = prompt("Your age:");

let _firstName = 'Ivan'; let _lastName = 'Camarillo Guillen'; let tatusMarital = 'Single'; let originCountry = 'Mexico'; let timeLived = 21;

const myAge = 21;
let yourAge = 12345;

console.log("My age: "+myAge +"; Your Age: "+yourAge);
console.log("Name: " + firstName+" "+lastName);
console.log("Age: " + age);
console.log("Marital Status: " + statusMarital);
console.log("Origin Country: " + country);


// EXERCISES II


// Declare a variable named challenge and assign it an initial value '30 Days Of JavaScript'.
let challenge = '30 Days Of JavaScript';

// Print the string on the browser console using console.log()
console.log(challenge);

// Print the length of the string on the browser console using console.log()
console.log("Length of 'challenge': "+challenge.length);

// Change all the string characters to capital letters using toUpperCase() method
console.log(challenge.toUpperCase());

// Change all the string characters to lowercase letters using toLowerCase() method
console.log(challenge.toLowerCase());

// Cut (slice) out the first word of the string using substr() or substring() method
console.log(challenge.substr(3, 5));

// Slice out the phrase 'Days Of JavaScript' from 30 Days Of JavaScript.
console.log(challenge.slice(3)); 

// Check if the string contains the word 'Script' using includes() method
console.log(challenge.includes('Script'));

// Split the string into an array using split() method
console.log(challenge.split(''));

// Split the string '30 Days Of JavaScript' at the space using split() method
console.log(challenge.split(' '));

// 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let corpos = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(corpos.split(','));

// Change '30DaysOfJavaScript' to '30DaysOfNode' using replace() method
console.log(challenge.replace('JavaScript', 'Node'));

// What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method
console.log(challenge.charAt(15)); 
        // Char at index 15 is "S"

// What is the character code of 'J' in '30 Days Of JavaScript' string using charCodeAt()
console.log(challenge.charCodeAt(11));

// Use indexOf to determine the position of the first occurrence of a in '30 Days Of JavaScript'
console.log(challenge.indexOf('a'));

// Use lastIndexOf to determine the position of the last occurrence of a in '30 Days Of JavaScript'.
console.log(challenge.lastIndexOf('a'));

// Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.indexOf('because'));

// Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.lastIndexOf('because'));

// Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.search('because'));

// Use trim() to remove any trailing whitespace at the beginning and end of a string.E.g' 30 Days Of JavaScript '.
let challengeSpaces= ' 30 Days Of JavaScript ';
console.log(challengeSpaces.trim());

// Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.startsWith('30'));

// Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.endsWith('pt'));

// Use match method to find all the a's in 30 Days Of JavaScript
console.log(challenge.match(/a/g));

// Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
console.log('30 Days of '.concat('JavaScript'));

// Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(challenge.repeat(2));