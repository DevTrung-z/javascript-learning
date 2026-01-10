# Boolean trong JavaScript

## Boolean là gì?

Boolean là một kiểu dữ liệu nguyên thủy (primitive type) trong JavaScript, chỉ có thể nhận một trong hai giá trị: `true` (đúng) hoặc `false` (sai). Boolean được sử dụng rộng rãi trong lập trình để biểu diễn các trạng thái logic, kiểm tra điều kiện, và thực hiện các phép toán logic.

## Cách khai báo Boolean

```javascript
// Khai báo trực tiếp
let isLoggedIn = true;
let isCompleted = false;

// Từ kết quả của biểu thức
let isGreater = 5 > 3; // true
let isEqual = 10 === "10"; // false
```

## Truthy và Falsy Values

JavaScript có khái niệm "truthy" và "falsy" - các giá trị được coi là `true` hoặc `false` trong ngữ cảnh boolean, mặc dù chúng không phải là kiểu boolean thực sự.

### Falsy values (được coi là false):

- `false`
- `0` (số không)
- `""` (chuỗi rỗng)
- `null`
- `undefined`
- `NaN`

### Truthy values (được coi là true):

- Tất cả các giá trị khác: `"hello"`, `42`, `[]`, `{}`, etc.

```javascript
if (0) {
  console.log("This won't run"); // 0 là falsy
}

if ("hello") {
  console.log("This will run"); // "hello" là truthy
}
```

## Toán tử logic

### 1. Phủ định (NOT): `!`

```javascript
let isTrue = true;
console.log(!isTrue); // false
console.log(!!isTrue); // true (double negation)
```

### 2. Và (AND): `&&`

```javascript
let a = true;
let b = false;
console.log(a && b); // false
console.log(a && true); // true
```

### 3. Hoặc (OR): `||`

```javascript
let a = true;
let b = false;
console.log(a || b); // true
console.log(false || false); // false
```

## Toán tử so sánh

Các toán tử so sánh trả về giá trị boolean:

```javascript
// So sánh bằng
console.log(5 == "5"); // true (loose equality)
console.log(5 === "5"); // false (strict equality)

// So sánh khác
console.log(5 != "5"); // false
console.log(5 !== "5"); // true

// So sánh lớn hơn/nhỏ hơn
console.log(5 > 3); // true
console.log(5 < 3); // false
console.log(5 >= 5); // true
console.log(5 <= 4); // false
```

## Sử dụng Boolean trong điều kiện

```javascript
let age = 18;
let hasLicense = true;

if (age >= 18 && hasLicense) {
  console.log("Bạn có thể lái xe");
} else {
  console.log("Bạn không thể lái xe");
}

// Toán tử ternary
let canVote = age >= 18 ? "Có thể bỏ phiếu" : "Không thể bỏ phiếu";
console.log(canVote);
```

## Vòng lặp với Boolean

```javascript
let counter = 0;
let continueLoop = true;

while (continueLoop) {
  console.log("Lần lặp:", counter);
  counter++;

  if (counter >= 5) {
    continueLoop = false; // Dừng vòng lặp
  }
}
```

## Chuyển đổi sang Boolean

### Sử dụng `Boolean()` constructor:

```javascript
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean("hello")); // true
console.log(Boolean([])); // true
console.log(Boolean({})); // true
```

### Double negation:

```javascript
console.log(!!0); // false
console.log(!!"hello"); // true
```

## Lưu ý quan trọng

1. **Case sensitive**: `true` và `false` phải viết thường.
2. **Không phải string**: `"true"` là một chuỗi, không phải boolean.
3. **Short-circuit evaluation**: Trong `&&` và `||`, JavaScript có thể không đánh giá toàn bộ biểu thức nếu không cần thiết.

```javascript
// Short-circuit với &&
false && console.log("This won't execute");

// Short-circuit với ||
true || console.log("This won't execute");
```

## Ứng dụng thực tế

Boolean được sử dụng trong:

- Kiểm tra form validation
- Xử lý trạng thái UI (hiển thị/ẩn elements)
- Logic điều khiển luồng chương trình
- API responses (success/error)
- Game logic (win/lose, active/inactive)

Boolean là nền tảng của logic lập trình và là một phần không thể thiếu trong việc viết code JavaScript hiệu quả.
