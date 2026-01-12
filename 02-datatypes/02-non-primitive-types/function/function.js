// Function in JavaScript

// Function declaration
function greet(name) {
  return `Hello, ${name}!`;
}

// Function expression
const add = function (a, b) {
  return a + b;
};

// Arrow function
const multiply = (a, b) => a * b;

// Anonymous function
setTimeout(function () {
  console.log("Anonymous function executed");
}, 1000);

// IIFE (Immediately Invoked Function Expression)
(function () {
  console.log("IIFE executed");
})();

// Function with default parameters
function greetWithDefault(name = "World") {
  return `Hello, ${name}!`;
}

// Rest parameters
function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

// Function as first-class citizen
function applyOperation(a, b, operation) {
  return operation(a, b);
}

// Higher-order function
function createMultiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

// Examples
console.log(greet("Alice")); // 'Hello, Alice!'
console.log(add(2, 3)); // 5
console.log(multiply(4, 5)); // 20
console.log(greetWithDefault()); // 'Hello, World!'
console.log(sum(1, 2, 3, 4)); // 10
console.log(applyOperation(5, 3, add)); // 8
console.log(double(5)); // 10
console.log(triple(5)); // 15
