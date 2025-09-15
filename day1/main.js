// var readlineSync = require('readline-sync');

// Wait for user's response.
// var say = readlineSync.question('Say something! -> ');
// console.log("You said: " + say);

// var readlineSync = require('readline-sync'),
//   MAX = 60, MIN = 0, value = 30, key;
// console.log('\n\n' + (new Array(20)).join(' ') +
//   '[Z] <- -> [X]  FIX: [SPACE]\n');
// while (true) {
//   console.log('\x1B[1A\x1B[K|' +
//     (new Array(value + 1)).join('-') + 'O' +
//     (new Array(MAX - value + 1)).join('-') + '| ' + value);
//   key = readlineSync.keyIn('',
//     {hideEchoBack: true, mask: '', limit: 'zx '});
//   if (key === 'z') { if (value > MIN) { value--; } }
//   else if (key === 'x') { if (value < MAX) { value++; } }
//   else { break; }
// }
// console.log('\nA value the user requested: ' + value);

// let num1 = "5"
// let num2 = 1

// console.log((num1 + num2) / 2)


// const prompt = require("readline-sync");

// let input = prompt.question("What's your name? ");

// let message = "Hello. " + input + ". \nHow are you?";

// console.log(message)


// const prompt = require("readline-sync");
// let input = prompt.question("Enter a  nunmber: ");
// console.log(typeof input);
// input = Number(input);
// console.log(typeof input);
// console.log(input);

// // input = Boolean(input);
// // console.log(typeof input);
// // console.log(input);
// console.log(isNaN(input));


// let x = 1;
// let y = Boolean(x);
// console.log(y);

// const prompt = require("readline-sync");

// let str = "5";
// let num = 4;
// let concat = str + num;
// let concatDiv = concat / 2

// console.log(typeof concat);
// console.log(typeof concatDiv);

/////////
//TASKS//
/////////

// // 1. Write JavaScript to do the following:
// // a. Store a number in a variable then print that value to the console.
// // b. Without creating a new variable, or changing the value of the existing
// // one, print out the value of your variable, plus one.
// // c. Create a new variable that is your original variable multiplied by 2, and
// // print the value of this new variable to the console

// let num = 4;
// console.log(num);
// console.log(num+1);
// let num2 = num * 2;
// console.log(num2);

// // 2. Write a JavaScript program which will prompt the user to first enter the
// // width and then the height of a rectangle. Use this input to output:
// // a. The area of the rectangle.
// // b. The length of the perimeter of the rectangle.

// const prompt = require("readline-sync");
// let prompt1 = prompt.question("Please enter the width: ");
// let prompt2 = prompt.question("Please enter the height: ");
// let area = prompt1 * prompt2;
// console.log(area);
// let lengthOfPerimeter = (Number(prompt1) + Number(prompt2)) * 2;
// console.log(lengthOfPerimeter);

// 3. Write a JavaScript program which will prompt the user for the radius of a
// circle. Us this input to output:
// a. The diameter of the circle.
// b. The circumference of the circle.
// c. The area of the circle
// If you’re not sure of the formula for any of these, search the internet. You
// should use a const to store the value of pi which you then reuse.

// const pi = 3.14;
// let radiusPrompt = prompt.question("Please enter the radius of the circle: ");
// console.log("The diameter of the circle is: " + radiusPrompt*2);
// console.log("The circumference of the circle is: " + (2 * pi * radiusPrompt));
// console.log("The area of the circle is: " + (pi * radiusPrompt * radiusPrompt));


// 4. Write a JavaScript program which will prompt the user for their name and
// output the following:
// Hello <name>,
// Your name contains <number> letters
// It begins with <first letter> and ends with <last letter>
// Hint: to get a character from a specific position in a string, you can use
// .charAt(n) – where n is the position of the character (be aware of a potential
// pitfall here…)

// const prompt = require("readline-sync");
// let namePrompt = prompt.question("Plase enter your name: ");
// console.log("Hello "+ namePrompt + "\nYour name contains " + namePrompt.length + " letters. \nIt begins with " + namePrompt.charAt(0) + 
//             " and ends with " + namePrompt.charAt(namePrompt.length - 1));

// 5. Write a JavaScript program which will prompt the user to enter their hourly
// pay and number of hours worked. The program should output their gross
// pay, followed by their net pay after deduction of 20% tax. 

// const prompt = require("readline-sync");
// let hrlyPay = prompt.question("What's your hourly pay? ");
// let nmbrOfHrsWorked = prompt.question("What's the number of hours worked? ");
// let grossPay = hrlyPay * nmbrOfHrsWorked
// let deductedPay = grossPay - (grossPay * 0.2);
// console.log("The gross pay: " + grossPay);
// console.log("The pay after taxes: "+ deductedPay);


// 6. Update the previous task to also prompt for overtime hours, paid at 1.5x the
// hourly pay. 

// const prompt = require("readline-sync");
// let hrlyPay = prompt.question("What's your hourly pay? ");
// let nmbrOfHrsWorked = prompt.question("What's the number of hours worked? ");
// let overtimeWorked = prompt.question("How many hours of overtime worked? ");
// let grossPay = hrlyPay * nmbrOfHrsWorked + (overtimeWorked * hrlyPay * 1.5);
// let deductedPay = grossPay - (grossPay * 0.2);
// console.log("The gross pay: " + grossPay);
// console.log("The pay after taxes: "+ deductedPay);


// 7. (A bit more challenging!) Write a JavaScript program that prompts the user to
// enter a number of seconds. The program should then output that number in
// hours, minutes and seconds (e.g. an input of 3902 should output 1 hour, 5
// minutes and 2 seconds). 

const prompt = require("readline-sync");

let input = prompt.question("Enter seconds: ");

let calcHrs = Math.round((input / 3600) % 60);
let calcMns = Math.round((input / 60) % 60);
let calcScs = Math.round(input % 60);
console.log(calcHrs + " hours; " + calcMns + " minutes; " + calcScs + " seconds.");

