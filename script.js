//  String Manipulation Functions:
// Reverse a String: Write a function that reverses a given string.

// var string = ("Hello") ==> olleH

function reversedString(string) {
  // i use the split() method to separate the string in an array
  var splitString = string.split("");
  // i use the reverse() method to reverse the new created string in an array
  var reversedString = splitString.reverse();
  // console.log(reversedString);
  // i use the join() method to join all elements of the array 
  var joinString = reversedString.join("");
  // console.log(joinString);
  return joinString;
}
console.log(reversedString("Hello"));




// Count Characters: Create a function that counts the number of characters in a string.
const string = "Hello world";

function getCounts(string) {
  const histogram = {};
  // i use length property to count the number of character in a string
  for (let i = 0; i < string.length; i++) {
    // console.log(string[i]);
    const ch = string[i];
    //i use charAt() to returns an empty string 
    if (!histogram[ch]) {
      histogram[ch] = 0;
    }
    histogram[ch]++;
  }
  // return histogram;
}
// console.log(getCounts("Hello world"));



// Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.

// i love coding ==>  I Love Coding

// let's start with capitalizing the first letter of a single word  "use strict" method
const capitalized = function (sentence) {
  // i use the split() method to separate the string in an array
  let str = sentence.split(" ");
  // console.log(str);
  // i use length property to separate the string
  for (let i = 0; i < str.length; i++) {
    // console.log(str[i]);
    //i use toUpperCase() to capitalized the first letter of each word
    // console.log(str[i][0].toUpperCase());
    // i use substring method to return the part of the string from the start
    str[i] = str[i][0].toUpperCase() + str[i].substring(1);
  }
  // return str.join(" ");
}
// console.log(capitalized("i love coding"));


// Array Functions:
// Write functions to find the maximum and minimum values in an array of numbers.
// 
let numbers = [5, 7, 2, 8, 3, 9, 1];
function findMaxMin(numbers) {
  let max = numbers[0];
  let min = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    } else if (numbers[i] < min) {
      min = numbers[i];
    }
  }
  // return `Max: ${max}, Min: ${min}`;
}
// console.log(findMaxMin(numbers));


// Sum of Array: Create a function that calculates the sum of all elements in an array.
const arr = [5, 7, 2, 8, 3, 9, 1];
// i use loop method to calculate the sum of element in ana array
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  // return sum;
}
// console.log(sumArray(arr));


// Filter Array: Implement a function that filters out elements from an array based on a given condition.
const inputArr = [1, 5, 6, 2, 3, 2, 5, 1];
const elementToReplace = 2;
function resultArray(inputArr) {
  // i use .filter method to remove all occurences of the element
  // const resultArr = inputArr.filter(el=> el !== elementToReplace);
  // console.log(resultArr);
  // console.log(inputArr);

  // i use slice and findIndex method remove only first occurence of the element
  const index = inputArr.findIndex(el => el === elementToReplace);
  const resultArr = index > -1
    ? [...inputArr.slice(0, index), ...inputArr.slice(index + 1)] : [...inputArr];
  // console.log(resultArr);
  // console.log(inputArr);
  // return resultArr;

}
// console.log(resultArray (inputArr));



// Mathematical Functions:
// Factorial: Write a function to calculate the factorial of a given number.
// let integer = (n)
// i use forloop method to calculate the factorial number
function factorial(n) {
  let result = 1;
  if (n == 0 || n == 1) {
    return result;
  }
  else if (n > 1) {
    for (var i = n; i >= 1; i--) {
      result = result * i;
    }
    return result;
  }
  else {
    return "number has to be positive."
  }
}
// let n = 4;
// result = factorial(n)
// console.log("Factorial of " + n + " : " + result);



// Prime Number Check: Create a function to check if a number is prime or not.

// i use isPrime function checks whether a number is prime or not.
// i use prompt to ask the user to enter a number.
// i use parseInt entered value, which is a string, is converted to an integer.
function isPrime(n) {
  // Check if n=1 or n=0 
  // if (n <= 1) 
  // return false; 

  // Check if n=2 or n=3 
  // if (n == 2 || n == 3) 
  // return true; 

  // Check whether n is divisible by 2 or 3 
  // if (n % 2 == 0 || n % 3 == 0) 
  // return false;

  // Check from 5 to square root of n 
  // Iterate i by (i+6) 
  // for (var i = 5; i <= Math.sqrt(n); i = i + 6) 
  // if (n % i == 0 || n % (i + 2) == 0) 
  // return false; 
  // return true; 
}
// Get user input from a browser prompt
// let userInput = prompt("Enter a number:");
// let number = parseInt(userInput, 10); // Convert the input to an integer
// Check if the number is prime and display an appropriate message
// isPrime(number) ? console.log(`${number} is a prime number.`) 
// : console.log(`${number} is not a prime number.`);



// Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up 
// to a given number of terms. 

function fibonacci(n) {
  let a = 0;
  let b = 1;

  if (n === 0) {
    // return a;
  }
// i ues loop to calculates the nth number in the sequence by iterating from the third number (i.e., i=2).
  for (let i = 2; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }

  // return b;
}

// console.log(fibonacci(3));
