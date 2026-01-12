// Array in JavaScript

// Creating arrays
let fruits = ["apple", "banana", "cherry"];
let numbers = new Array(1, 2, 3, 4, 5);
let mixed = [1, "hello", true, null];

// Accessing elements
console.log(fruits[0]); // 'apple'
console.log(fruits.length); // 3

// Modifying arrays
fruits.push("orange"); // Add to end
fruits.unshift("grape"); // Add to beginning
fruits.pop(); // Remove from end
fruits.shift(); // Remove from beginning

// Array methods
let doubled = numbers.map((num) => num * 2);
let evenNumbers = numbers.filter((num) => num % 2 === 0);
let sum = numbers.reduce((acc, curr) => acc + curr, 0);

// Iterating
fruits.forEach((fruit) => console.log(fruit));

// Slicing and splicing
let sliced = fruits.slice(1, 3);
fruits.splice(1, 1, "kiwi"); // Replace element

console.log("Fruits:", fruits);
console.log("Doubled numbers:", doubled);
console.log("Even numbers:", evenNumbers);
console.log("Sum:", sum);
console.log("Sliced:", sliced);
