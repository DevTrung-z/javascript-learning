
## 1️⃣ Quy tắc BẮT BUỘC (vi phạm là lỗi)

✔ Bắt đầu bằng:

* chữ cái: `a–z`, `A–Z`
* dấu gạch dưới `_`
* ký hiệu `$`

```js
let name;
let _count;
let $price;
```

❌ Không được bắt đầu bằng số

```js
let 1name; // lỗi
```

---

✔ Chỉ dùng:

* chữ
* số
* `_`
* `$`

```js
let user1;
let total_amount;
```

❌ Không ký tự đặc biệt

```js
let user-name; // lỗi
let full name; // lỗi
```

---

✔ Không trùng từ khóa JS

```js
let let;      // lỗi
let function; // lỗi
```

---

## 2️⃣ Quy tắc CHUẨN (best practice – nên theo)

### 🔹 Dùng camelCase (chuẩn JS)

```js
let fullName;
let userAge;
```

---

### 🔹 Tên phải có ý nghĩa

```js
// ❌
let x;

// ✅
let totalPrice;
```

---

### 🔹 Boolean dùng tiền tố is / has / can

```js
let isLoggedIn;
let hasPermission;
let canEdit;
```

---

### 🔹 Hằng số dùng UPPER_CASE

```js
const API_URL = "...";
const MAX_SIZE = 100;
```

---

### 🔹 Tránh viết tắt mơ hồ

```js
// ❌
let fn;
let tmp;

// ✅
let fetchUser;
let tempValue;
```

---

## 3️⃣ Những điều CẦN TRÁNH (dễ bug, khó đọc)

❌ Trùng tên biến outer (shadowing không cần thiết)

```js
let count = 1;
{
  let count = 2; // tránh nếu không cần
}
```

❌ Tên quá dài

```js
let userProfileInformationDetailsData; // ❌
```

---

## 4️⃣ Checklist nhanh (ghi nhớ)

✔ camelCase
✔ Có nghĩa rõ ràng
✔ Boolean có tiền tố
✔ const viết hoa
✔ Không viết tắt bừa
✔ Không trùng keyword

---
