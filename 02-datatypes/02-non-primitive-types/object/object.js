// Object in JavaScript

// Creating objects
let person = {
  name: "Alice",
  age: 30,
  isStudent: false,
  hobbies: ["reading", "coding"],
};

// Constructor
let car = new Object();
car.make = "Toyota";
car.model = "Camry";
car.year = 2020;

// Object literal with methods
let calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
};

// Accessing properties
console.log(person.name); // 'Alice'
console.log(person["age"]); // 30

// Modifying properties
person.age = 31;
person.city = "New York"; // Adding new property

// Deleting properties
delete person.isStudent;

// Object methods
let keys = Object.keys(person);
let values = Object.values(person);
let entries = Object.entries(person);

console.log("Keys:", keys);
console.log("Values:", values);
console.log("Entries:", entries);

// Checking properties
console.log("Has name:", person.hasOwnProperty("name"));
console.log("Has city:", "city" in person);

// Object.assign() - copying properties
let personCopy = Object.assign({}, person);
let extendedPerson = Object.assign({}, person, { job: "Developer" });

// Object.freeze() - prevent modifications
let frozenPerson = Object.freeze({ name: "Bob", age: 25 });
// frozenPerson.name = 'Charlie'; // This will not work

// Object.seal() - prevent adding/removing properties
let sealedPerson = Object.seal({ name: "David", age: 35 });
sealedPerson.age = 36; // OK
// sealedPerson.city = 'LA'; // This will not work

// Prototypes
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(this.name + " makes a sound.");
};

let dog = new Animal("Dog");
dog.speak(); // 'Dog makes a sound.'

// Classes (ES6)
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

let john = new Person("John", 25);
console.log(john.greet());

// Inheritance
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }

  study() {
    return `${this.name} is studying in grade ${this.grade}.`;
  }
}

let student = new Student("Emma", 16, 10);
console.log(student.greet());
console.log(student.study());

// JSON conversion
let jsonString = JSON.stringify(person);
console.log("JSON:", jsonString);

let parsedObject = JSON.parse(jsonString);
console.log("Parsed:", parsedObject);

// Examples
console.log("Person:", person);
console.log("Calculator add:", calculator.add(5, 3));
console.log("Calculator multiply:", calculator.multiply(4, 2));
