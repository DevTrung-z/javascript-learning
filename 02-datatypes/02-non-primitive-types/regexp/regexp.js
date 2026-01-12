// RegExp in JavaScript

// Creating regular expressions
let pattern1 = /hello/i; // Literal syntax, case insensitive
let pattern2 = new RegExp("hello", "i"); // Constructor

// Testing patterns
let text = "Hello World";
console.log(pattern1.test(text)); // true
console.log(pattern2.test("HELLO")); // true

// Matching
let matches = text.match(/l/g); // Global match for 'l'
console.log(matches); // ['l', 'l', 'l']

// Replacing
let replaced = text.replace(/world/i, "Universe");
console.log(replaced); // 'Hello Universe'

// Splitting
let words = "apple,banana,cherry".split(/,/);
console.log(words); // ['apple', 'banana', 'cherry']

// Common patterns
let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let phonePattern = /^\d{3}-\d{3}-\d{4}$/;
let urlPattern = /^https?:\/\/.+/;

// Validation examples
function validateEmail(email) {
  return emailPattern.test(email);
}

function validatePhone(phone) {
  return phonePattern.test(phone);
}

// Extracting data
let data = "Name: John, Age: 30, City: New York";
let nameMatch = data.match(/Name: (\w+)/);
let ageMatch = data.match(/Age: (\d+)/);
console.log("Name:", nameMatch ? nameMatch[1] : "Not found");
console.log("Age:", ageMatch ? ageMatch[1] : "Not found");

// Flags
let caseSensitive = /hello/; // No flags
let caseInsensitive = /hello/i; // Case insensitive
let global = /l/g; // Global match
let multiline = /^start/gm; // Multiline

// Advanced patterns
let wordBoundary = /\bword\b/; // Word boundary
let digit = /\d/; // Any digit
let nonDigit = /\D/; // Any non-digit
let whitespace = /\s/; // Any whitespace
let nonWhitespace = /\S/; // Any non-whitespace
let wordChar = /\w/; // Word character (letter, digit, underscore)
let nonWordChar = /\W/; // Non-word character

// Quantifiers
let zeroOrMore = /a*/; // Zero or more 'a's
let oneOrMore = /a+/; // One or more 'a's
let zeroOrOne = /a?/; // Zero or one 'a'
let exactlyThree = /a{3}/; // Exactly 3 'a's
let atLeastTwo = /a{2,}/; // At least 2 'a's
let betweenTwoAndFour = /a{2,4}/; // Between 2 and 4 'a's

// Groups and capturing
let captureGroup = /(\w+) (\w+)/; // Capture first and last name
let match = "John Doe".match(captureGroup);
console.log("Full match:", match[0]); // 'John Doe'
console.log("First name:", match[1]); // 'John'
console.log("Last name:", match[2]); // 'Doe'

// Lookahead and lookbehind
let positiveLookahead = /John (?=Doe)/; // Matches 'John ' only if followed by 'Doe'
let negativeLookahead = /John (?!Doe)/; // Matches 'John ' only if NOT followed by 'Doe'
let positiveLookbehind = /(?<=John )Doe/; // Matches 'Doe' only if preceded by 'John '
let negativeLookbehind = /(?<!John )Doe/; // Matches 'Doe' only if NOT preceded by 'John '

console.log("Email validation:", validateEmail("test@example.com"));
console.log("Phone validation:", validatePhone("123-456-7890"));
