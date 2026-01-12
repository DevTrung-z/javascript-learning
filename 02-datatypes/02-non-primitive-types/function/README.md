# Function trong JavaScript

## Giới thiệu

Function là một khối code có thể tái sử dụng, thực hiện một tác vụ cụ thể. Function là first-class citizen trong JS, nghĩa là có thể gán cho biến, truyền làm tham số, hoặc trả về từ function khác.

## Cách khai báo Function

### 1. Function Declaration

```javascript
function functionName(parameters) {
  // code
  return value;
}
```

### 2. Function Expression

```javascript
const functionName = function (parameters) {
  // code
  return value;
};
```

### 3. Arrow Function (ES6)

```javascript
const functionName = (parameters) => {
  // code
  return value;
};

// Hoặc rút gọn nếu chỉ có một biểu thức
const functionName = (parameters) => expression;
```

## Các loại Function

### IIFE (Immediately Invoked Function Expression)

```javascript
(function () {
  // code executed immediately
})();
```

### Higher-Order Function

Function nhận function khác làm tham số hoặc trả về function.

```javascript
function applyOperation(a, b, operation) {
  return operation(a, b);
}
```

### Callback Function

Function được truyền làm tham số cho function khác.

```javascript
setTimeout(function () {
  console.log("Executed after 1 second");
}, 1000);
```

## Thuộc tính và phương thức

| Thuộc tính/Phương thức   | Mô tả                                  |
| ------------------------ | -------------------------------------- |
| `name`                   | Tên của function                       |
| `length`                 | Số lượng tham số                       |
| `call(thisArg, ...args)` | Gọi function với this được chỉ định    |
| `apply(thisArg, [args])` | Tương tự call nhưng tham số là array   |
| `bind(thisArg, ...args)` | Trả về function mới với this được bind |

## Ví dụ chi tiết

### Ví dụ cơ bản

```javascript
// Function declaration
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("Alice")); // 'Hello, Alice!'

// Function expression
const add = function (a, b) {
  return a + b;
};

console.log(add(2, 3)); // 5

// Arrow function
const multiply = (a, b) => a * b;
console.log(multiply(4, 5)); // 20
```

### Ví dụ với tham số

```javascript
// Tham số mặc định
function greetWithDefault(name = "World") {
  return `Hello, ${name}!`;
}

console.log(greetWithDefault()); // 'Hello, World!'
console.log(greetWithDefault("Alice")); // 'Hello, Alice!'

// Rest parameters
function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3, 4)); // 10
```

### Ví dụ Higher-Order Function

```javascript
// Function trả về function
function createMultiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15

// Function nhận function làm tham số
function applyOperation(a, b, operation) {
  return operation(a, b);
}

console.log(applyOperation(5, 3, add)); // 8
console.log(applyOperation(5, 3, multiply)); // 15
```

### Ví dụ với this và bind/call/apply

```javascript
const person = {
  name: "Alice",
  greet: function () {
    return `Hello, I'm ${this.name}`;
  },
};

console.log(person.greet()); // 'Hello, I'm Alice'

// Sử dụng call
const person2 = { name: "Bob" };
console.log(person.greet.call(person2)); // 'Hello, I'm Bob'

// Sử dụng apply
console.log(person.greet.apply(person2)); // 'Hello, I'm Bob'

// Sử dụng bind
const greetBob = person.greet.bind(person2);
console.log(greetBob()); // 'Hello, I'm Bob'
```

### Ví dụ Closure

```javascript
function createCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
```

### Ví dụ IIFE

```javascript
// Tạo scope riêng tư
(function () {
  let privateVar = "This is private";
  console.log(privateVar);
})();

// privateVar không thể truy cập bên ngoài
// console.log(privateVar); // ReferenceError
```

## Lưu ý

- Function có thể có tham số mặc định: `function func(a = 1) {}`
- Rest parameters: `function func(...args) {}`
- Function trong JS có thể truy cập biến bên ngoài (closure).
- Arrow function không có `this` riêng, kế thừa từ parent scope.
- Function declaration được hoisted, function expression thì không.
- Sử dụng arrow function cho callback ngắn gọn, function declaration cho methods.
