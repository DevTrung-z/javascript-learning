// Date in JavaScript

// Creating dates
let now = new Date(); // Current date and time
let specificDate = new Date("2023-12-25"); // Specific date
let dateFromComponents = new Date(2023, 11, 25, 10, 30, 0); // Year, month (0-based), day, hour, minute, second

// Getting date components
console.log("Year:", now.getFullYear());
console.log("Month:", now.getMonth()); // 0-11
console.log("Day:", now.getDate());
console.log("Hour:", now.getHours());
console.log("Minute:", now.getMinutes());
console.log("Second:", now.getSeconds());

// Setting date components
let date = new Date();
date.setFullYear(2024);
date.setMonth(5); // June
date.setDate(15);

// Date formatting
console.log("toString():", now.toString());
console.log("toDateString():", now.toDateString());
console.log("toTimeString():", now.toTimeString());
console.log("toISOString():", now.toISOString());
console.log("toLocaleDateString():", now.toLocaleDateString());
console.log("toLocaleTimeString():", now.toLocaleTimeString());

// Date arithmetic
let tomorrow = new Date(now);
tomorrow.setDate(now.getDate() + 1);

let nextWeek = new Date(now);
nextWeek.setDate(now.getDate() + 7);

// Date comparison
let date1 = new Date("2023-01-01");
let date2 = new Date("2023-01-02");
console.log("date1 < date2:", date1 < date2); // true

// Calculating difference
let diffInMs = date2 - date1;
let diffInDays = diffInMs / (1000 * 60 * 60 * 24);
console.log("Difference in days:", diffInDays);

// Static methods
console.log("Now (timestamp):", Date.now());
console.log("Parse:", Date.parse("2023-12-25T00:00:00"));

// UTC methods
console.log("UTC Year:", now.getUTCFullYear());
console.log("UTC Month:", now.getUTCMonth());

// Time zones
let utcDate = new Date(now.getTime() + now.getTimezoneOffset() * 60000);
console.log("UTC Date:", utcDate.toISOString());

console.log("Current date:", now);
console.log("Tomorrow:", tomorrow);
console.log("Next week:", nextWeek);
