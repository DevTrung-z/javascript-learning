# Array trong JavaScript

## Giới thiệu

Array là một kiểu dữ liệu non-primitive dùng để lưu trữ danh sách các giá trị có thứ tự. Các phần tử trong array có thể là bất kỳ kiểu dữ liệu nào và có thể truy cập bằng index (bắt đầu từ 0).

## Cách tạo Array

```javascript
// Literal syntax
let fruits = ["apple", "banana", "cherry"];

// Constructor
let numbers = new Array(1, 2, 3);

// Empty array
let empty = [];
```

## Thuộc tính và phương thức phổ biến

### Thuộc tính

| Thuộc tính | Cú pháp        | Mô tả                               |
| ---------- | -------------- | ----------------------------------- |
| `length`   | `array.length` | Trả về số lượng phần tử trong array |

### Phương thức thêm/xóa phần tử

| Phương thức | Cú pháp                                      | Mô tả                                |
| ----------- | -------------------------------------------- | ------------------------------------ |
| `push()`    | `array.push(element)`                        | Thêm phần tử vào cuối array          |
| `pop()`     | `array.pop()`                                | Xóa phần tử cuối và trả về nó        |
| `shift()`   | `array.shift()`                              | Xóa phần tử đầu và trả về nó         |
| `unshift()` | `array.unshift(element)`                     | Thêm phần tử vào đầu array           |
| `splice()`  | `array.splice(start, deleteCount, ...items)` | Thêm/xóa phần tử tại vị trí chỉ định |

### Phương thức truy cập và cắt

| Phương thức  | Cú pháp                   | Mô tả                                    |
| ------------ | ------------------------- | ---------------------------------------- |
| `slice()`    | `array.slice(start, end)` | Trả về phần array từ start đến end       |
| `indexOf()`  | `array.indexOf(element)`  | Trả về index đầu tiên của element        |
| `includes()` | `array.includes(element)` | Kiểm tra xem array có chứa element không |

### Phương thức lặp và biến đổi

| Phương thức | Cú pháp                                                                                       | Mô tả                                      |
| ----------- | --------------------------------------------------------------------------------------------- | ------------------------------------------ |
| `forEach()` | `array.forEach((element, index, array) => { // code })`                                       | Thực thi callback cho mỗi phần tử          |
| `map()`     | `array.map((element, index, array) => { return newElement; })`                                | Tạo array mới bằng cách áp dụng callback   |
| `filter()`  | `array.filter((element, index, array) => { return condition; })`                              | Lọc array dựa trên điều kiện               |
| `reduce()`  | `array.reduce((accumulator, currentValue, index, array) => { return result; }, initialValue)` | Giảm array thành một giá trị duy nhất      |
| `find()`    | `array.find((element, index, array) => { return condition; })`                                | Trả về phần tử đầu tiên thỏa mãn điều kiện |

### Phương thức kiểm tra

| Phương thức | Cú pháp                                                         | Mô tả                                    |
| ----------- | --------------------------------------------------------------- | ---------------------------------------- |
| `some()`    | `array.some((element, index, array) => { return condition; })`  | Kiểm tra có ít nhất một phần tử thỏa mãn |
| `every()`   | `array.every((element, index, array) => { return condition; })` | Kiểm tra tất cả phần tử thỏa mãn         |

### Phương thức sắp xếp và biến đổi

| Phương thức | Cú pháp                         | Mô tả                        |
| ----------- | ------------------------------- | ---------------------------- |
| `sort()`    | `array.sort((a, b) => a - b)`   | Sắp xếp array                |
| `reverse()` | `array.reverse()`               | Đảo ngược array              |
| `join()`    | `array.join(separator)`         | Nối các phần tử thành string |
| `concat()`  | `array.concat(...arrays)`       | Nối nhiều arrays             |
| `flat()`    | `array.flat(depth)`             | Làm phẳng array đa chiều     |
| `fill()`    | `array.fill(value, start, end)` | Điền array với giá trị       |

### Phương thức tĩnh

| Phương thức       | Cú pháp                | Mô tả                            |
| ----------------- | ---------------------- | -------------------------------- |
| `Array.from()`    | `Array.from(iterable)` | Tạo array từ iterable            |
| `Array.isArray()` | `Array.isArray(value)` | Kiểm tra xem có phải array không |

## Ví dụ chi tiết

```javascript
let numbers = [1, 2, 3, 4, 5];
let fruits = ["apple", "banana", "cherry"];

// Thuộc tính length
console.log(numbers.length); // 5

// push: Thêm phần tử vào cuối
numbers.push(6);
console.log(numbers); // [1, 2, 3, 4, 5, 6]

// pop: Xóa phần tử cuối
let last = numbers.pop();
console.log(last); // 6
console.log(numbers); // [1, 2, 3, 4, 5]

// unshift: Thêm phần tử vào đầu
numbers.unshift(0);
console.log(numbers); // [0, 1, 2, 3, 4, 5]

// shift: Xóa phần tử đầu
let first = numbers.shift();
console.log(first); // 0
console.log(numbers); // [1, 2, 3, 4, 5]

// splice: Thêm/xóa tại vị trí chỉ định
numbers.splice(2, 1, 99); // Tại index 2, xóa 1 phần tử, thêm 99
console.log(numbers); // [1, 2, 99, 4, 5]

// slice: Trả về phần array
let sliced = numbers.slice(1, 4); // Từ index 1 đến 4 (không bao gồm 4)
console.log(sliced); // [2, 99, 4]

// forEach: Thực thi callback cho mỗi phần tử
numbers.forEach((num, index) => {
  console.log(`Index ${index}: ${num}`);
});

// find: Tìm phần tử đầu tiên thỏa mãn điều kiện
let found = numbers.find((num) => num > 3);
console.log(found); // 99

// includes: Kiểm tra có chứa phần tử không
console.log(numbers.includes(99)); // true
console.log(numbers.includes(10)); // false

// indexOf: Tìm index của phần tử
console.log(numbers.indexOf(99)); // 2
console.log(numbers.indexOf(10)); // -1

// Map: Tạo array mới bằng cách áp dụng callback
let doubled = numbers.map((num) => num * 2);
console.log(doubled); // [2, 4, 198, 8, 10]

// Filter: Lọc array dựa trên điều kiện
let even = numbers.filter((num) => num % 2 === 0);
console.log(even); // [2, 4]

// Reduce: Giảm array thành một giá trị
let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 1 + 2 + 99 + 4 + 5 = 111

// Sort: Sắp xếp array
let unsorted = [3, 1, 4, 1, 5];
unsorted.sort((a, b) => a - b); // Sắp xếp tăng dần
console.log(unsorted); // [1, 1, 3, 4, 5]

// Reverse: Đảo ngược array
let reversed = numbers.slice().reverse(); // slice() để không thay đổi array gốc
console.log(reversed); // [5, 4, 99, 2, 1]

// Join: Nối các phần tử thành string
let joined = fruits.join(", ");
console.log(joined); // "apple, banana, cherry"

// Concat: Nối nhiều arrays
let moreFruits = ["orange", "grape"];
let allFruits = fruits.concat(moreFruits);
console.log(allFruits); // ['apple', 'banana', 'cherry', 'orange', 'grape']

// Some: Kiểm tra có ít nhất một phần tử thỏa mãn điều kiện
let hasEven = numbers.some((num) => num % 2 === 0);
console.log(hasEven); // true

// Every: Kiểm tra tất cả phần tử thỏa mãn điều kiện
let allPositive = numbers.every((num) => num > 0);
console.log(allPositive); // true

// Flat: Làm phẳng array đa chiều
let nested = [1, [2, [3, 4]], 5];
let flat = nested.flat(2); // Độ sâu 2
console.log(flat); // [1, 2, 3, 4, 5]

// Fill: Điền array với giá trị
let filled = new Array(5).fill(0);
console.log(filled); // [0, 0, 0, 0, 0]

// from: Tạo array từ iterable
let fromString = Array.from("hello");
console.log(fromString); // ['h', 'e', 'l', 'l', 'o']

// isArray: Kiểm tra xem có phải array không
console.log(Array.isArray(numbers)); // true
console.log(Array.isArray("not an array")); // false
```

## Lưu ý

- Array trong JavaScript có thể chứa các kiểu dữ liệu khác nhau.
- Các phương thức như `map`, `filter`, `reduce` không thay đổi array gốc mà trả về array mới.
- `splice` và `sort` thay đổi array gốc.
- Sử dụng `slice()` để sao chép array mà không thay đổi gốc.
- Khi so sánh arrays, hãy nhớ rằng chúng là reference types: `[1, 2] === [1, 2]` trả về `false`.
- Để sao chép sâu (deep copy) array chứa objects, sử dụng `JSON.parse(JSON.stringify(array))` hoặc thư viện như Lodash.
