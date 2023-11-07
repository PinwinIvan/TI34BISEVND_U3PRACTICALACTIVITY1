console.log("Boolen, Operators and Date Exercises")
// Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

let firstName = "Juanin";
let lastName = "Juan";
let country = "USA";
let city = "New York";
let age = 27;
let isMarried = false;
let currentYear= 2023;

console.log(typeof firstName);  
console.log(typeof lastName);   
console.log(typeof country);    
console.log(typeof city);       
console.log(typeof age);        
console.log(typeof isMarried);  
console.log(typeof yearVariable); 

//- Check if type of '10' is equal to 10
console.log(typeof '10' === typeof 10);

//Check if parseInt('9.8') is equal to 10
console.log(typeof parseInt('9.8') === typeof 10);

//- Boolean value is either true or false.
//i.- Write three JavaScript statement which provide truthy value.
console.log("Write three JavaScript statement which provide truthy value.") 
if (4==4)
 console.log("True")
    else 
        console.log("False");

console.log(55>3);
console.log("Juan"=="Juan");

// ii.- Write three JavaScript statement which provide falsy value.
console.log("Write three JavaScript statement which provide falsy value.")
if ("juanin"==1)
    console.log("True")
        else
            console.log("False");

console.log(1==2);
console.log("Juanin"=="Tulio")

// Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
console.log("Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()")
// i. 4 > 3. Expected result: true
console.log(4 > 3);

// ii. 4 >= 3. Expected result: true
console.log(4 >= 3);

// iii. 4 < 3. Expected result: false
console.log(4 < 3);

// iv. 4 <= 3. Expected result: false
console.log(4 <= 3);

// v. 4 == 4. Expected result: true
console.log(4 == 4);

// vi. 4 === 4. Expected result: true
console.log(4 === 4);
// vii. 4 != 4. Expected result: false
console.log(4 != 4);

// viii. 4 !== 4. Expected result: flase
console.log(4 !== 4);

// ix. 4 != '4'. Expected result: true
console.log(4 != '4');

// x. 4 == '4’. Expected result: true
console.log(4 == '4');

// xi. 4 === '4’. Expected result: false
console.log(4 === '4');


// Use the Date object to do the following activities
let thisMoment = new Date();

// i. What is the year today?
let year = thisMoment.getFullYear();
console.log("Year: " + year);

// ii. What is the month today as a number?
let month = thisMoment.getMonth();
console.log("Month: " + (month));

// iii. What is the date today?
let today = thisMoment.getDate();
console.log("Today is: " + today);

// iv. What is the day today as a number?
let todayNumber = thisMoment.getDay();
console.log("The " + todayNumber);

// v. What is the hours now?
let hour = thisMoment.getHours();
console.log("Hours: " + hour);

// vi. What is the minutes now?
let minute = thisMoment.getMinutes();
console.log("Minutes: " + minute);

// vii. Find out the numbers of seconds elapsed from January 1, 1970 to now.
let secondsSince1970 = Math.floor(thisMoment.getTime() / 1000);
console.log("Seconds since January 1, 1970: " + secondsSince1970);

//  Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
let base = parseFloat(prompt("Enter base"));
let height = parseFloat(prompt("Enter height"));

let area = (base * height)/2;
console.log("The area of the triangle is " + area);

//  Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
let sideA = parseFloat(prompt("Enter side a:"));
let sideB = parseFloat(prompt("Enter side b:"));
let sideC = parseFloat(prompt("Enter side c:"));

let perimeter = sideA + sideB + sideC;

console.log("The perimeter of the triangle is: " + perimeter);
