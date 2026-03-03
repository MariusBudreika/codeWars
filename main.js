"use strict";

// 01. Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

/* 
function evenOrOdd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}
console.log(evenOrOdd(2));
*/

// In this kata you will create a function that takes in a list and returns a list with the reverse order.

/*
function reverseList(list) {
  return list.reverse();
}

console.log(reverseList([0, 1, 2, 3]));
*/

// Create a method all which takes two params: a sequence a function and returns true if the function in the params returns true for every element in the sequence. Otherwise, it should return false. If the sequence is empty, it should return true, since technically nothing failed the test.

/*
function all(arr, fun) {
  for (let i = 0; i < arr.length; i++) {
    if (!fun(arr[i])) {
      return false;
    }
  }
  return true;
}

function greater_than_9(x) {
  return x > 9;
}

function less_than_9(x) {
  return x < 9;
}

console.log(all([1, 2, 3, 4, 5], greater_than_9));
console.log(all([1, 2, 3, 4, 5], less_than_9));
*/

// The other day I saw an amazing video where a guy hacked some wifi controlled lightbulbs by flying a drone past them. Brilliant.
// In this kata we will recreate that stunt... sort of. You will be given two strings: lamps and drone. lamps represents a row of lamps, currently off, each represented by x. When these lamps are on, they should be represented by o. The drone string represents the position of the drone T (any better suggestion for character??) and its flight path up until this point =. The drone always flies left to right, and always begins at the start of the row of lamps. Anywhere the drone has flown, including its current position, will result in the lamp at that position switching on.
// Return the resulting lamps string. See example tests for more clarity.

/*
function flyBy(lamps, drone) {
  let result = "o";

  for (let i = 0; i < lamps.length - 1; i++) {
    if (drone[i] == "=") {
      result += "o";
    } else {
      result += "x";
    }
  }
  return result;
}

console.log(flyBy("xxxxxx", "====T"));

// similar
const flyBy1 = (lamps, drone) => [...lamps].fill(`o`, 0, drone.length).join(``);

console.log(flyBy1("xxxxxx", "====T"));
*/

// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative. If the array is empty, return 0.

/*
function sum(numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
console.log(sum([1, 5.2, 4, 0, -1]));
*/

//  You are given two interior angles (in degrees) of a triangle. Write a function to return the 3rd.

/*
function otherAngle(a, b) {
  return 180- (a + b);
}
*/
