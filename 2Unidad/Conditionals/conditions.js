console.log("Conditional Exercises")
/*Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback: 
'You are old enough to drive' but if not 18 give another feedback stating to 
wait for the number of years, he needs to turn 18*/

let usersAge = parseInt(prompt("Enter your age"));

if (usersAge >= 18) {
  console.log("You are old enough to drive. Bless your heart.");
} else {
  let remainingYears = 18 - usersAge;
  console.log("You need to wait for " + remainingYears + " more years to turn 18. Enjoy them.");
}

/*Compare the values of myAge and yourAge using if … else. 
Based on the comparison and log the
result to console stating who is older (me or you). 
Use prompt(“Enter your age:”) to get the age as input. */
const myAge = 21;
let ageDiff = usersAge - myAge;
if (usersAge > myAge) {
  console.log("You are older than me. By " + ageDiff +" year(s).");
} else if (usersAge < myAge) {
    let ageDiff = myAge - usersAge;
  console.log("I am older than you. By " + ageDiff +" year(s).");
} else {
  console.log("We are the same age.");
}

// If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
//using if else:
let a = 10;
let b = 5;

if (a > b) {
  console.log('a is greater than b');
} else {
  console.log('a is less than b');
}

//ternary operator:
let result = a > b ? 'a is greater than b' : 'a is less than b';
console.log(result);

/*- Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer */

let userInputMonth = prompt("Current Month?").toLowerCase;

let season;
switch (userInputMonth) {
  case "september":
  case "october":
  case "november":
    season = "Autumn";
    break;
  case "december":
  case "january":
  case "february":
    season = "Winter";
    break;
  case "march":
  case "april":
  case "may":
    season = "Spring";
    break;
  case "june":
  case "july":
  case "august":
    season = "Summer";
    break;
  default:
    season = "Invalid month";
}

console.log("The season is " + season);

/* 
Write a code which can give grades to students according to their scores:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F
*/

let score = parseInt(prompt("Enter the your score:"));

let grade;
if (score >= 80 && score <= 100) {
  grade = "A";
} else if (score >= 70 && score < 80) {
  grade = "B";
} else if (score >= 60 && score < 70) {
  grade = "C";
} else if (score >= 50 && score < 60) {
  grade = "D";
} else if (score >= 0 && score < 50) {
  grade = "F";
} else {
  grade = "Invalid score";
}

console.log("Your grade is " + grade);
