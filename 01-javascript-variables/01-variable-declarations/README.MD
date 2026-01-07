Dưới đây là **giải thích đầy đủ – có hệ thống – đúng bản chất** về **Variable trong JavaScript**.
Tôi đi thẳng vào cốt lõi, không lan man.

---

# 1️⃣ Variable (Biến) trong JavaScript là gì?

**Variable = vùng nhớ có tên**, dùng để **lưu trữ dữ liệu** trong quá trình chương trình chạy.

Ví dụ:

```js
let age = 20;
```

* `age` → tên biến
* `20` → giá trị
* JS cấp phát bộ nhớ cho `age` và trỏ tới giá trị `20`

---

# 2️⃣ 3 cách khai báo biến trong JavaScript

## ❌ `var` – KHÔNG KHUYẾN KHÍCH (legacy)

```js
var name = "Trung";
```

### Vấn đề của `var`

* **Không có block scope**
* Bị **hoisting sai cách**
* Dễ gây bug lớn

Ví dụ nguy hiểm:

```js
if (true) {
  var x = 10;
}
console.log(x); // 10 ❌ (lộ ra ngoài block)
```

👉 **Không dùng trong code hiện đại**

---

## ✅ `let` – biến có thể thay đổi

```js
let score = 100;
score = 120; // hợp lệ
```

### Đặc điểm

* Có **block scope**
* Có thể gán lại giá trị
* An toàn

Ví dụ:

```js
if (true) {
  let x = 10;
}
console.log(x); // ReferenceError ✅
```

---

## ✅ `const` – biến KHÔNG đổi tham chiếu

```js
const PI = 3.14;
```

❌ Sai:

```js
PI = 3.15; // Error
```

### ⚠️ Hiểu đúng `const`

> `const` **không cho đổi reference**,
> **KHÔNG phải không đổi giá trị**

Ví dụ:

```js
const user = { name: "Trung" };
user.name = "An"; // ✅ OK
```

❌ Sai:

```js
user = {}; // Error
```

---

# 3️⃣ Scope (Phạm vi của biến) – RẤT QUAN TRỌNG

## 1. Global Scope

```js
let a = 10;
```

* Truy cập được ở mọi nơi
* Dễ gây xung đột

❌ Hạn chế dùng

---

## 2. Function Scope

```js
function test() {
  let x = 5;
}
```

* Biến chỉ tồn tại trong function

---

## 3. Block Scope (`let`, `const`)

```js
if (true) {
  let y = 10;
}
```

👉 An toàn – đúng chuẩn hiện đại

---

# 4️⃣ Hoisting – Cơ chế dễ gây hiểu nhầm

## `var` (hoisting + undefined)

```js
console.log(a); // undefined
var a = 10;
```

JS hiểu thành:

```js
var a;
console.log(a);
a = 10;
```

---

## `let` / `const` – Temporal Dead Zone

```js
console.log(b); // ReferenceError
let b = 10;
```

👉 **Cố tình chặn bug**

---

# 5️⃣ Naming Convention – đặt tên biến

### ✅ Nên

```js
let userName;
let totalPrice;
let isLoggedIn;
```

### ❌ Không nên

```js
let x1;
let temp;
let a;
```

### Quy tắc:

* camelCase
* Có ý nghĩa
* Boolean → bắt đầu bằng `is`, `has`, `can`

---

# 6️⃣ Khi nào dùng `let`, khi nào dùng `const`?

### Quy tắc VÀNG

> **Luôn dùng `const` trước
> Chỉ dùng `let` khi cần gán lại**

Ví dụ:

```js
const users = [];
users.push("A"); // OK

let count = 0;
count++;
```

---

# 7️⃣ Lỗi kinh điển người mới

### ❌ Dùng `var`

### ❌ Khai báo không gán giá trị

```js
let x;
console.log(x); // undefined
```

### ❌ Dùng sai scope

```js
for (var i = 0; i < 3; i++) {}
console.log(i); // 3 ❌
```

---

# 8️⃣ Tổng kết ngắn gọn

| Từ khóa | Scope    | Gán lại | Khuyến nghị  |
| ------- | -------- | ------- | ------------ |
| var     | function | ✅       | ❌ Không dùng |
| let     | block    | ✅       | ✅ Dùng       |
| const   | block    | ❌       | ⭐ Ưu tiên    |

---


