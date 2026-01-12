# Non-Primitive Types trong JavaScript

## Giới thiệu

Non-primitive types (hay reference types) là các kiểu dữ liệu không phải nguyên thủy trong JavaScript. Chúng được lưu trữ dưới dạng tham chiếu (reference) trong bộ nhớ, nghĩa là khi gán hoặc truyền, chúng chia sẻ cùng một địa chỉ bộ nhớ. Các non-primitive types bao gồm Object, Array, Function và các built-in objects khác.

## Đặc điểm chung

- **Mutable**: Có thể thay đổi nội dung sau khi tạo.
- **Reference-based**: So sánh bằng `===` kiểm tra tham chiếu, không phải giá trị.
- **Không có giới hạn kích thước cố định**: Có thể chứa nhiều dữ liệu.

## Các loại Non-Primitive Types phổ biến

### 1. Object

Object là tập hợp của các cặp key-value. Key là string hoặc symbol, value có thể là bất kỳ kiểu dữ liệu nào.

```javascript
let person = {
  name: "Alice",
  age: 30,
  isStudent: false,
};
console.log(person.name); // "Alice"
```

### 2. Array

Array là object đặc biệt dùng để lưu trữ danh sách các giá trị, có thể truy cập bằng index.

```javascript
let fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]); // "apple"
console.log(fruits.length); // 3
```

### 3. Function

Function là object có thể thực thi. Có thể khai báo bằng function declaration, expression hoặc arrow function.

```javascript
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Bob")); // "Hello, Bob!"

// Arrow function
const add = (a, b) => a + b;
console.log(add(2, 3)); // 5
```

### 4. Date

Object đại diện cho ngày và giờ.

```javascript
let now = new Date();
console.log(now.toString()); // "Mon Jan 12 2026 10:30:00 GMT+0000"
```

### 5. RegExp (Regular Expression)

Object dùng để xử lý pattern matching trong string.

```javascript
let pattern = /hello/i;
console.log(pattern.test("Hello World")); // true
```

### 6. Map và Set

- **Map**: Tập hợp cặp key-value, key có thể là bất kỳ kiểu dữ liệu nào.
- **Set**: Tập hợp các giá trị duy nhất.

```javascript
let map = new Map();
map.set("key", "value");

let set = new Set([1, 2, 3, 3]);
console.log(set.size); // 3 (loại bỏ trùng lặp)
```

## So sánh với Primitive Types

- Primitive: number, string, boolean, undefined, null, symbol, bigint.
- Non-primitive: object, array, function, etc.
- Primitive được so sánh theo giá trị, non-primitive theo tham chiếu.

```javascript
let a = "hello";
let b = "hello";
console.log(a === b); // true (primitive)

let obj1 = { name: "Alice" };
let obj2 = { name: "Alice" };
console.log(obj1 === obj2); // false (reference khác nhau)
```

## Lưu ý

- Khi sao chép non-primitive, chỉ sao chép tham chiếu, không phải giá trị.
- Để sao chép sâu (deep copy), cần sử dụng các phương pháp như JSON.parse(JSON.stringify()) hoặc thư viện chuyên dụng.
