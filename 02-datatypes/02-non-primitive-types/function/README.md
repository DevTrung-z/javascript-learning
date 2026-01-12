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

- `name`: Tên của function.
- `length`: Số lượng tham số.
- `call(thisArg, ...args)`: Gọi function với this được chỉ định.
- `apply(thisArg, [args])`: Tương tự call nhưng tham số là array.
- `bind(thisArg, ...args)`: Trả về function mới với this được bind.

## Ví dụ

```javascript
// Function declaration
function greet(name) {
  return `Hello, ${name}!`;
}

// Arrow function
const add = (a, b) => a + b;

// Higher-order function
function createMultiplier(factor) {
  return (number) => number * factor;
}

const double = createMultiplier(2);
console.log(double(5)); // 10
```

## Lưu ý

- Function có thể có tham số mặc định: `function func(a = 1) {}`
- Rest parameters: `function func(...args) {}`
- Function trong JS có thể truy cập biến bên ngoài (closure).
