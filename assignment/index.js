// Create a program that asks the user for two numbers and prints their sum.

let num1 = 20

let num2 = 20

let sum = num1 + num2;


console.log("The sum of " + num1 + " and " + num2 + " is: " + sum);


//Implement a program that calculates the area of a rectangle using given length and width.

var length = 10;
var width = 5;
var area = length * width;
console.log("The area of the rectangle is: " + area);


//Create a program that asks the user for their age and determines if they are eligible to vote (considering a voting age of 18).

let age = 18;


age = parseInt(age);


if (age <18) {
    console.log("you are not eligible to vote yet. You need to be at least 18 years old");
}
else if (age >= 18) {
        console.log("You are eligible to vote!");
    
}


//Write a script that takes a user's grade as input and outputs whether they passed or failed (assuming the passing grade is 60 or above).


let mark =30

if(mark>=60){
    console.log("you are passed with grade A");
}

else if(mark>=45){
    console.log("you are passed with grade B");
}

else if(mark>=30){
    console.log("you are passed with grade C");
}
else if(mark>=15){
    console.log("you are failed.....!!! with grade D");
}


//Implement a program that checks if a user's entered number is positive, negative, or zero

function checkNumber() {
    let num = 1

    if (num > 0) {
        console.log("The number is positive.");
    } else if (num < 0) {
        console.log("The number is negative.");
    } else {
        console.log("The number is zero.");
    }
}





//Write a script that takes a user's age and checks if they are a child (0-12), teenager (13-19), adult (20-59), or senior (60 and above).

function ages(age) {
    if (age >= 0 && age <= 12) {
        return "child";
    } else if (age >= 13 && age <= 19) {
        return "teenager";
    } else if (age >= 20 && age <= 59) {
        return "adult";
    } else {
        return "senior";
    }
}
let age1 = 7;
console.log("Example 1:");
console.log("Age: " + age1 + " child: " + (age1));


let age2 = 16;
console.log("\nExample 2:");
console.log("Age: " + age2 + " teenger: " + (age2));


let age3 = 35;
console.log("\nExample 3:");
console.log("Age: " + age3 + "adult : " + (age3));


let age4 = 70;
console.log("\nExample 4:");
console.log("Age: " + age4 + "senior: " + (age4));


// find the square of each number in an array=[1,3,9,12,15,18,21] using loop

let numbers = [1, 3, 9, 12, 15, 18, 21];


let squares = [];

for (let i = 0; i < numbers.length; i++) {
    
    squares.push(numbers[i] * numbers[i]);
}
console.log("Squares of each number:");
console.log(squares);


//Write a program to find the sum of all the odd numbers for a given limit
 ///(if you choose limit as 10 then need to find the sum of all odd numbers in between 1 and 10 )

function sumOfOddNumbers(limit) {
    let sum = 0;
    for (let i = 1; i <= limit; i += 2) {
        sum += i;
    }
    return sum;
}


let limit = 10;
let result = sumOfOddNumbers(limit);
console.log("The sum of all odd numbers up to", limit, "is:", result);
