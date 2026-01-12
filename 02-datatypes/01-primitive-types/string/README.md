# String trong JavaScript

## Giới thiệu

String (chuỗi) là một kiểu dữ liệu nguyên thủy (primitive) trong JavaScript, dùng để biểu diễn văn bản. String là immutable, nghĩa là không thể thay đổi nội dung của nó sau khi tạo.

## Cách khai báo String

Có ba cách khai báo string:

- Sử dụng dấu ngoặc đơn: `'Hello World'`
- Sử dụng dấu ngoặc kép: `"Hello World"`
- Sử dụng template literals (backticks): `` `Hello World` ``

Ví dụ:

```javascript
let str1 = "Xin chào";
let str2 = "JavaScript";
let str3 = `Template literal`;
```

## Thuộc tính và phương thức phổ biến

- `length`: Trả về độ dài của string.

  ```javascript
  let str = "Hello";
  console.log(str.length); // 5
  ```

- `charAt(index)`: Trả về ký tự tại vị trí index.
- `substring(start, end)`: Trả về phần string từ start đến end.
- `slice(start, end)`: Tương tự substring nhưng hỗ trợ index âm.
- `indexOf(substring)`: Trả về vị trí đầu tiên của substring.
- `toUpperCase()`: Chuyển thành chữ hoa.
- `toLowerCase()`: Chuyển thành chữ thường.
- `trim()`: Loại bỏ khoảng trắng ở đầu và cuối.
- `split(separator)`: Chia string thành mảng dựa trên separator.
- `includes(substring)`: Kiểm tra xem string có chứa substring không (trả về true/false).
- `startsWith(substring)`: Kiểm tra xem string có bắt đầu bằng substring không.
- `endsWith(substring)`: Kiểm tra xem string có kết thúc bằng substring không.
- `replace(searchValue, replaceValue)`: Thay thế phần đầu tiên tìm thấy của searchValue bằng replaceValue.
- `replaceAll(searchValue, replaceValue)`: Thay thế tất cả các lần xuất hiện của searchValue bằng replaceValue.
- `concat(string)`: Nối string với string khác.
- `repeat(count)`: Lặp lại string count lần.
- `padStart(targetLength, padString)`: Thêm padding ở đầu để đạt độ dài targetLength.
- `padEnd(targetLength, padString)`: Thêm padding ở cuối để đạt độ dài targetLength.

## Template Literals

Template literals cho phép nhúng biểu thức và đa dòng:

```javascript
let name = "Alice";
let greeting = `Xin chào, ${name}!`;
console.log(greeting); // "Xin chào, Alice!"
```

## Lưu ý

- String là immutable: Không thể thay đổi trực tiếp, phải tạo string mới.
- So sánh string: Sử dụng `===` để so sánh giá trị và kiểu.
- Concatenation: Sử dụng `+` hoặc template literals.

## Ví dụ thực tế

```javascript
let text = "JavaScript is awesome";
console.log(text.toUpperCase()); // "JAVASCRIPT IS AWESOME"
console.log(text.indexOf("is")); // 11
let words = text.split(" ");
console.log(words); // ["JavaScript", "is", "awesome"]
```
