// vars in conditional statement definition is reassigned  with =

// let myVariable = 4;
// if (myVariable = 5) {
//     console.log(myVariable);
// };

////////////////////////////////////////////////////////////////////

// const prompt = require("readline-sync");

// let data = prompt.question("Please enter the number 5: ");

// data = Number(data);

// if(data == 5) {
//     console.log("Well done, you followed the instructions!");
// };


////////////////////////////////////////////////////////////////////

// const prompt = require("readline-sync");

// let data = prompt.question("Please enter the number 5: ");
// data = Number(data);

// if(data == 5) {
//     console.log("Well done, you followed the instructions");
// } else {
//     console.log("You didn't follow the instructions!");
// };


////////////////////////////////////////////////////////////////////

// const prompt = require("readline-sync");

// let data = prompt.question("Please enter the number between 1 and 10: ");
// data = Number(data);

// if (data >= 1 && data <= 10) {
//     console.log("You followed the instructions!");
// } else {
//     console.log("You didn't follow the instructions!");
// }


////////////////////////////////////////////////////////////////////

// const prompt = require("readline-sync");

// let data = prompt.question("Please enter the number between 1 and 10: ");
// data = Number(data);

// if(data < 1 || data > 10) {
//     console.log("You didn't follow the instructions!");
// } else {
//     console.log("You followed the instructions!");
// }

/////////
//TASKS//
/////////


// 1. Write a program that prompts the user to enter a number between 1 and 10,
// and displays in the console a “well done” message if they do, or a “you got it
// wrong” message if they don’t.

// const prompt = require("readline-sync");

// let data = prompt.question("Please enter the number between 1 and 10: ");
// data = Number(data);

// if (data >= 1 && data <= 10) {
//     console.log("well done");
// } else {
//     console.log("you got it wrong");
// }


// 2. Write a program that prompts the user to enter the number of a month (1-12),
// then displays in the console if that month is in the spring (3, 4 or 5), summer
// (6, 7 or 8), autumn (9, 10 or 11), or winter (1, 2 or 12). An error message
// should be displayed if an invalid input is entered. Hint: to check if a number
// is entered, you can use the function isNaN(), passing the input (converted to
// a Number) as a parameter

// const prompt = require("readline-sync");

// let data = prompt.question("Please enter the month's number! e.g. January - 1, February - 2, etc. -> ");


// if (data >= 3 && data < 6) {
//     console.log("This month is in spring!");
// } else if (data >= 6 && data < 12) {
//     console.log("This month is in summer!");
// } else if (isNaN(data)) {
//     console.log("Warning! The input is not a number!");
// } else {
//     console.log("The month is in winter!");
// };


// (More challenging!) Write a program that tests for eligibility to ride a
// rollercoaster based on the following rules:
// o Anyone who is 16 or older can ride, regardless of height.
// o Anyone who is younger than 16 but 12 or older can ride if they are
// over 150cm tall.
// o Anyone younger than 12 cannot ride.
// Your program should prompt the user for an age and height, then print an
// appropriate message depending on the values entered. 

// let prompt = require("readline-sync");

// let heightPormpt = prompt.question("What is your height in cm? Enter only the number ");
// heightPormpt = Number(heightPormpt);
// let agePrompt = prompt.question("What is your age? ");
// agePrompt = Number(agePrompt);

// if (agePrompt >= 16) {
//     console.log("You can ride!");
// } else if (agePrompt < 12) {
//     console.log("You cannot ride!");
// } else if (agePrompt < 16 && agePrompt >= 12) {
//     if (heightPormpt > 150) {
//         console.log("You can ride!");
//     } else if (heightPormpt <= 150) {
//         console.log("You cannot ride!");
//     } else {
//         console.log("Not a number!");
//     }
// } else {
//     console.log("Not a number!");
// }


// 1. Use a switch statement to write a program that asks the user to enter a
// number from 1-7, then prints the day of the week corresponding to that
// number in the console (i.e. 1=Monday, 2=Tuesday etc.). An error message if
// an invalid input is entered.

// let prompt = require("readline-sync");

// let data = prompt.question("Enter the number corresponding to the day of the week! e.g. 1-Monday, 2-Tuesday, etc. ");

// switch(data) {
//     case "1":
//         console.log("Monday");
//     case "2":
//         console.log("Tuesday"); 
//     case "3":
//         console.log("Wednesday"); 
//     case "4":
//         console.log("Thursday");
//     case "5":
//         console.log("Friday");
//     case "6":
//         console.log("Satuday");
//     case "7":
//         console.log("Sunday");
//     default:
//         console.log("Wrong input!"); 
// }


// 2. Write a program that uses a switch to model a menu system for a game,
// where a user has to enter a number for an option. You should first print the
// menu to the console, then prompt the user for their option. When an option
// is selected, simply print a message saying “You selected <option>”. The
// menu should be:
// 1. New Game
// 2. Load Game
// 3. Settings
// 4. Quit


// let prompt = require("readline-sync");

// let data = prompt.question("Please select an option!\n1. New game\n2. Load game\n3. Settings\n4. Quit");

// switch (data) {
//     case "1":
//         console.log("You selected New Game");
//          break;
//     case "2":
//         console.log("You selected Laod Game");
//          break;
//     case "3":
//         console.log("You selected Settings");
//          break;
//     case "4":
//         console.log("You selected Quit");
//          break;
//     default:
//         console.log("Wrong input!");
//          break;
// }


// 3. (More advanced – see below!) Write a program that uses a switch to convert
// percentage scores (i.e. numbers from 0-100) into letter grades based on the
// following formula:
// 70 – 100 = A
// 60 – 69 = B
// 50 – 59 = C
// 40 – 49 = D
// 30 – 39 = E
// 0 – 29 = F
// The program should print the correct letter grade, or display an error if the
// input is invalid.


// let prompt = require("readline-sync");

// let data = prompt.question("Please enter the percentage score!: ");
// data = Number(data);

// switch (true) {
//     case (data>= 0 && data < 30):
//         console.log("F");
//         break;
//     case (data>=30 && data<40):
//         console.log("E");
//         break;
//     case (data>=40 && data <50):
//         console.log("D");
//         break;
//     case (data>=50 && data <60):
//         console.log("C");
//         break;
//     case (data>=60 && data <70):
//         console.log("B");
//         break;
//     case (data >= 70 && data<100):
//         console.log("A");
//         break;
//     default:
//         console.log("Error occured!");
//         break;
// }


// 1. Starline: Use a while-loop to output a line of asterisks (*) in the console. The
// number of asterisks in the line should be determined by the user, through
// prompting them for a number. Be sure to include appropriate validation of
// the user’s input.

// let prompt = require("readline-sync");

// let data = prompt.question("Please enter the number of * to display! ");


// data = Number(data);
// let i = 0;
// let str = "";
// while (i<data) {
//     let line = "";
//     if (!isNaN(data)) {
//         str += "*";
//         i++;
//     } else {
//         console.log("The input must be a number!");
//     }
// }
// console.log(str);


// 2. Countdown: Write a program which will use a loop to output a count down.
// The start value should be provided by the use via a prompt, and your program
// should display all numbers from the start value down to 1 in the console.
// Hint: You might want to use a loop counter which counts down instead of up
// - think about what your condition would look like in that case.

// let prompt = require("readline-sync");

// let data = prompt.question("Enter the number to countdown from: ");
// data = Number(data);
// for (data; data > 0; data--) {
//     console.log(data);
// }


// 3. Average: Write a program which accepts a sequence of values from a user
// then will output the average. You should start by prompting for the number of
// values to be input, use a loop to get that number of values while keeping a
// running total, then finally output the average in the console.

// let nums = 0;
// let len = 0;
// let prompt = require("readline-sync");
// let data = prompt.question("How many numbers? ");
// for (len; len < data; len++) {
//     nums += Number(prompt.question("Enter the number -> "));
// }
// console.log("The average is: " + nums/len);


// 4. Guess the number: Write a program that generates a random number
// between 0 and 10, then prompts the user to guess the number. They should
// continue to be prompted until they get it right.

// let rng = Math.round(Math.random() * 10);
// console.log(rng);

// let prompt = require("readline-sync");
// let data = prompt.question("Guess the number! -> ");

// while (data!=rng) {
//     data = prompt.question("Guess the number! -> ");
// }

// 5. (More challenging!) Write a program that loops through the numbers 1-20
// and:
// a. Prints the word “Fizz” if divisible by 3
// b. Prints the word “Buzz” if divisible by 5
// c. Prints the word “FizzBuzz” if divisible by both
// d. Prints the number otherwise

// for (let i = 1; i<= 20; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log(i + " FizzBuzz")
//     } else if (i % 5 == 0) {
//         console.log(i + " Buzz");
//     } else if (i % 3 == 0) {
//         console.log(i + " Fizz");
//     } else {
//         console.log(i);
//     }
// }


