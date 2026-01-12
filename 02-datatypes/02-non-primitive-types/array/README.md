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

## Bài tập ứng dụng

Dưới đây là một số bài tập thực tế sử dụng các phương thức Array, với giải thích chi tiết từng bước như một bài tập học tập.

### Bài tập 1: Tính tổng các số dương

**Mô tả:** Cho một mảng số nguyên, trả về tổng các phần tử dương (lớn hơn 0). Nếu mảng rỗng hoặc không có số dương, trả về 0.

**Ví dụ:** input: `[-1, 3, 0, 4, -2]` → output: `7` (vì 3 + 4 = 7)

**Giải pháp và giải thích:**

```javascript
const numbers = [-1, 3, 0, 4, -2];

// Bước 1: Lọc ra các số dương (> 0) sử dụng filter()
const positiveNumbers = numbers.filter((num) => num > 0);
console.log(positiveNumbers); // [3, 4]

// Bước 2: Tính tổng sử dụng reduce()
const sum = positiveNumbers.reduce(
  (accumulator, current) => accumulator + current,
  0
);
console.log(sum); // 7

// Giải pháp ngắn gọn hơn:
const total = numbers
  .filter((num) => num > 0)
  .reduce((acc, curr) => acc + curr, 0);
console.log(total); // 7
```

**Giải thích:**

- `filter(num => num > 0)`: Duyệt qua từng phần tử, chỉ giữ lại những số > 0
- `reduce((acc, curr) => acc + curr, 0)`: Cộng dồn các số từ trái sang phải, bắt đầu từ 0

### Bài tập 2: Loại bỏ giá trị falsy

**Mô tả:** Loại bỏ tất cả giá trị falsy (false, 0, "", null, undefined, NaN) khỏi mảng, giữ nguyên thứ tự các phần tử còn lại.

**Ví dụ:** input: `[0, 1, false, 2, '', 3, null]` → output: `[1, 2, 3]`

**Giải pháp và giải thích:**

```javascript
const mixedArray = [0, 1, false, 2, "", 3, null];

// Cách 1: Sử dụng filter() với Boolean constructor
const truthyValues = mixedArray.filter(Boolean);
console.log(truthyValues); // [1, 2, 3]

// Cách 2: Sử dụng filter() với callback rõ ràng
const truthyValues2 = mixedArray.filter((item) => !!item);
console.log(truthyValues2); // [1, 2, 3]

// Cách 3: Sử dụng filter() với truthy check trực tiếp
const truthyValues3 = mixedArray.filter((item) => item);
console.log(truthyValues3); // [1, 2, 3]
```

**Giải thích:**

- Giá trị falsy trong JavaScript: `false`, `0`, `""` (chuỗi rỗng), `null`, `undefined`, `NaN`
- `filter(Boolean)`: `Boolean()` chuyển đổi mỗi phần tử thành boolean, filter giữ lại truthy
- `!!item`: Double negation chuyển thành boolean rõ ràng
- `item => item`: JavaScript tự động coi truthy là true trong context boolean

### Bài tập 3: Tìm phần tử lớn nhất

**Mô tả:** Tìm phần tử lớn nhất trong mảng số. Nếu mảng rỗng, trả về undefined.

**Ví dụ:** input: `[3, 1, 4, 1, 5, 9, 2]` → output: `9`

**Giải pháp và giải thích:**

```javascript
const numbers = [3, 1, 4, 1, 5, 9, 2];

// Cách 1: Sử dụng Math.max() với spread operator
const max1 = Math.max(...numbers);
console.log(max1); // 9

// Cách 2: Sử dụng reduce()
const max2 = numbers.reduce(
  (max, current) => (current > max ? current : max),
  numbers[0]
);
console.log(max2); // 9

// Cách 3: Sử dụng sort() (không khuyến khích cho hiệu suất)
const max3 = [...numbers].sort((a, b) => b - a)[0];
console.log(max3); // 9
```

**Giải thích:**

- `Math.max(...numbers)`: Spread operator mở rộng array thành các argument riêng lẻ
- `reduce()`: So sánh từng phần tử với giá trị max hiện tại, cập nhật nếu lớn hơn
- `sort((a, b) => b - a)`: Sắp xếp giảm dần, phần tử đầu tiên là lớn nhất

### Bài tập 4: Đếm số lần xuất hiện của mỗi phần tử

**Mô tả:** Tạo một object đếm số lần xuất hiện của mỗi phần tử trong mảng.

**Ví dụ:** input: `['a', 'b', 'a', 'c', 'a', 'b']` → output: `{a: 3, b: 2, c: 1}`

**Giải pháp và giải thích:**

```javascript
const items = ["a", "b", "a", "c", "a", "b"];

// Sử dụng reduce() để tạo object đếm
const count = items.reduce((accumulator, current) => {
  // Nếu phần tử chưa có trong accumulator, khởi tạo bằng 1
  // Nếu đã có, tăng lên 1
  accumulator[current] = (accumulator[current] || 0) + 1;
  return accumulator;
}, {});

console.log(count); // {a: 3, b: 2, c: 1}
```

**Giải thích:**

- `reduce()` bắt đầu với object rỗng `{}`
- Với mỗi phần tử, kiểm tra xem đã có trong object chưa
- Nếu chưa có, gán bằng 1; nếu có rồi, tăng lên 1
- `accumulator[current] || 0`: Nếu undefined, dùng 0, rồi +1

### Bài tập 5: Làm phẳng mảng đa chiều

**Mô tả:** Làm phẳng một mảng đa chiều thành mảng một chiều.

**Ví dụ:** input: `[1, [2, [3, 4]], 5]` → output: `[1, 2, 3, 4, 5]`

**Giải pháp và giải thích:**

```javascript
const nested = [1, [2, [3, 4]], 5];

// Cách 1: Sử dụng flat() với Infinity
const flat1 = nested.flat(Infinity);
console.log(flat1); // [1, 2, 3, 4, 5]

// Cách 2: Sử dụng reduce() và đệ quy
function flattenArray(arr) {
  return arr.reduce((flat, item) => {
    return flat.concat(Array.isArray(item) ? flattenArray(item) : item);
  }, []);
}

const flat2 = flattenArray(nested);
console.log(flat2); // [1, 2, 3, 4, 5]

// Cách 3: Sử dụng JSON và regex (không khuyến khích)
const flat3 = JSON.parse(
  "[" + JSON.stringify(nested).replace(/\[|\]/g, "") + "]"
);
console.log(flat3); // [1, 2, 3, 4, 5]
```

**Giải thích:**

- `flat(Infinity)`: Làm phẳng tất cả các cấp độ lồng nhau
- Hàm `flattenArray`: Sử dụng reduce, nếu item là array thì đệ quy, ngược lại concat trực tiếp
- Cách JSON: Chuyển thành string, loại bỏ `[` và `]`, rồi parse lại (có thể lỗi với object phức tạp)

## Lưu ý

- Array trong JavaScript có thể chứa các kiểu dữ liệu khác nhau.
- Các phương thức như `map`, `filter`, `reduce` không thay đổi array gốc mà trả về array mới.
- `splice` và `sort` thay đổi array gốc.
- Sử dụng `slice()` để sao chép array mà không thay đổi gốc.
- Khi so sánh arrays, hãy nhớ rằng chúng là reference types: `[1, 2] === [1, 2]` trả về `false`.
- Để sao chép sâu (deep copy) array chứa objects, sử dụng `JSON.parse(JSON.stringify(array))` hoặc thư viện như Lodash.
