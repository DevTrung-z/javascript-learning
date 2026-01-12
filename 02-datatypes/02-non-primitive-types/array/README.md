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

- `length`: Trả về số lượng phần tử trong array.
- `push(element)`: Thêm phần tử vào cuối array.
- `pop()`: Xóa phần tử cuối và trả về nó.
- `shift()`: Xóa phần tử đầu và trả về nó.
- `unshift(element)`: Thêm phần tử vào đầu array.
- `splice(start, deleteCount, ...items)`: Thêm/xóa phần tử tại vị trí chỉ định.
- `slice(start, end)`: Trả về phần array từ start đến end.
- `map(callback)`: Tạo array mới bằng cách áp dụng callback cho mỗi phần tử.
- `filter(callback)`: Lọc array dựa trên điều kiện callback.
- `reduce(callback, initialValue)`: Giảm array thành một giá trị duy nhất.
- `forEach(callback)`: Thực thi callback cho mỗi phần tử.
- `find(callback)`: Trả về phần tử đầu tiên thỏa mãn điều kiện.
- `includes(element)`: Kiểm tra xem array có chứa element không.

## Ví dụ

```javascript
let numbers = [1, 2, 3, 4, 5];

// Map: nhân đôi mỗi số
let doubled = numbers.map((num) => num * 2); // [2, 4, 6, 8, 10]

// Filter: lọc số chẵn
let even = numbers.filter((num) => num % 2 === 0); // [2, 4]

// Reduce: tính tổng
let sum = numbers.reduce((acc, curr) => acc + curr, 0); // 15
```

## Lưu ý

- Array trong JS có thể chứa các kiểu dữ liệu khác nhau.
- Array là mutable, có thể thay đổi nội dung.
- Để sao chép array, sử dụng `slice()` hoặc spread operator `[...array]`.
