# Undefined trong JavaScript

## Undefined là gì?

`undefined` là một kiểu dữ liệu nguyên thủy (primitive type) trong JavaScript, đại diện cho một giá trị chưa được xác định hoặc chưa được gán. Khi một biến được khai báo nhưng chưa được gán giá trị, nó sẽ có giá trị mặc định là `undefined`.

## Cách khai báo và sử dụng

```javascript
// Khai báo biến mà không gán giá trị
let name;
console.log(name); // undefined

// Gán undefined trực tiếp (không khuyến khích)
let age = undefined;
console.log(age); // undefined

// Hàm không trả về giá trị
function doNothing() {
  // Không có return statement
}
console.log(doNothing()); // undefined
```

## Khi nào một biến trở thành undefined?

### 1. Biến được khai báo nhưng chưa gán giá trị

```javascript
let x;
console.log(x); // undefined
```

### 2. Thuộc tính của object không tồn tại

```javascript
let person = { name: "John" };
console.log(person.age); // undefined
```

### 3. Phần tử của mảng không tồn tại

```javascript
let arr = [1, 2, 3];
console.log(arr[5]); // undefined
```

### 4. Hàm không có return statement hoặc return không có giá trị

```javascript
function noReturn() {
  let x = 5;
  // Không có return
}
console.log(noReturn()); // undefined

function emptyReturn() {
  return;
}
console.log(emptyReturn()); // undefined
```

### 5. Tham số hàm không được truyền

```javascript
function greet(name) {
  console.log("Hello, " + name);
}
greet(); // Hello, undefined
```

## Sự khác biệt giữa undefined và null

Mặc dù cả `undefined` và `null` đều biểu diễn "không có giá trị", nhưng chúng có ý nghĩa khác nhau:

- `undefined`: Giá trị mặc định khi một biến chưa được gán
- `null`: Giá trị được gán một cách rõ ràng để biểu diễn "không có gì"

```javascript
let a; // undefined
let b = null; // null

console.log(a); // undefined
console.log(b); // null

console.log(typeof a); // "undefined"
console.log(typeof b); // "object"
```

## Cách kiểm tra undefined

### 1. So sánh trực tiếp

```javascript
let x;
if (x === undefined) {
  console.log("x is undefined");
}
```

### 2. Sử dụng typeof

```javascript
let y;
if (typeof y === "undefined") {
  console.log("y is undefined");
}
```

### 3. Sử dụng void operator

```javascript
let z;
if (z === void 0) {
  console.log("z is undefined");
}
```

## Lưu ý quan trọng

1. **Không nên gán undefined trực tiếp**: Thay vì `let x = undefined;`, hãy để biến không được gán giá trị.

2. **undefined là falsy**: Trong các biểu thức boolean, `undefined` được coi là `false`.

```javascript
if (undefined) {
  console.log("This won't run");
} else {
  console.log("undefined is falsy"); // This will run
}
```

3. **Global undefined**: Trong môi trường browser, `undefined` là một thuộc tính của global object và có thể bị ghi đè (mặc dù không nên làm vậy).

4. **Strict mode**: Trong strict mode, việc gán giá trị cho `undefined` sẽ gây lỗi.

## Các trường hợp đặc biệt

### 1. Default parameters

```javascript
function greet(name = "Anonymous") {
  console.log("Hello, " + name);
}
greet(); // Hello, Anonymous
```

### 2. Optional chaining (ES2020)

```javascript
let user = {};
console.log(user?.profile?.name); // undefined (không lỗi)
```

### 3. Nullish coalescing (ES2020)

```javascript
let value = undefined;
let result = value ?? "default";
console.log(result); // "default"
```

## Tại sao cần hiểu undefined?

Hiểu rõ `undefined` giúp bạn:

- Tránh lỗi runtime khi truy cập thuộc tính không tồn tại
- Viết code defensive programming
- Debug hiệu quả hơn khi gặp lỗi liên quan đến undefined
- Sử dụng các tính năng mới của JavaScript như optional chaining

`undefined` là một khái niệm cơ bản nhưng quan trọng trong JavaScript, giúp bạn hiểu cách ngôn ngữ xử lý các giá trị chưa được xác định.
