### Number trong JavaScript — nói thẳng, đủ dùng khi đi làm
---
## 1. Bản chất

* JavaScript **chỉ có 1 kiểu số duy nhất**: `Number`
* Chuẩn: **IEEE 754 – 64-bit floating point**
* Không phân biệt `int`, `float`, `double`

```js
let a = 10;
let b = 3.14;
let c = -5;
```

➡️ Tất cả đều là `number`

---

## 2. Các giá trị số đặc biệt (rất hay gặp bug)

```js
Infinity      // Vô cực dương
-Infinity     // Vô cực âm
NaN           // Not a Number
```

Ví dụ thực tế:

```js
10 / 0        // Infinity
"abc" * 2    // NaN
```

Check:

```js
Number.isNaN(value)
Number.isFinite(value)
```

---

## 3. Vấn đề kinh điển: sai số số thực

```js
0.1 + 0.2 === 0.3   // false
0.1 + 0.2          // 0.30000000000000004
```

➡️ **KHÔNG dùng Number để tính tiền trực tiếp**

Cách xử lý:

```js
Number((0.1 + 0.2).toFixed(2)) // 0.3
```

Hoặc:

* Nhân lên số nguyên (đơn vị nhỏ nhất)
* Dùng thư viện: `decimal.js`, `big.js`

---

## 4. Ép kiểu Number (rất quan trọng)

### 4.1 `Number()`

```js
Number("10")    // 10
Number("10a")   // NaN
Number(true)    // 1
Number(false)   // 0
```

### 4.2 `parseInt`, `parseFloat`

```js
parseInt("10px")    // 10
parseFloat("3.14s")// 3.14
```

➡️ Khi xử lý input người dùng → **ưu tiên parseInt / parseFloat**

---

## 5. So sánh số

```js
10 == "10"    // true  (ép kiểu)
10 === "10"   // false (không ép kiểu)
```

➡️ **Luôn dùng `===` khi đi làm**

---

## 6. Các phương thức Number hay dùng

```js
let n = 12.3456;


//toFixed() làm tròn số thực
n.toFixed(2)      // "12.35" (string)
n.toString()      // "12"
Number.isInteger(10)   // true
Number.isInteger(3.14)// false
```

⚠️ `toFixed()` **trả về string**, phải ép lại nếu cần số

---

## 7. Math – làm việc với số

```js
Math.round(4.5)   // 5
Math.floor(4.9)   // 4
Math.ceil(4.1)    // 5
Math.random()     // 0 → <1
Math.max(1, 5, 3) // 5
```

Random trong khoảng:

```js
Math.floor(Math.random() * 10) + 1 // 1 → 10
```

---

## 8. Case thực tế đi làm

### Input form

```js
let age = Number(input.value);

if (Number.isNaN(age)) {
  alert("Tuổi không hợp lệ");
}
```

### Tính tổng tiền

```js
let total = price * quantity;
total = Number(total.toFixed(2));
```

---

## 9. Những điều **tuyệt đối nhớ**

1. JS **không có int**
2. Số thực **luôn có sai số**
3. `NaN !== NaN`
4. `toFixed()` trả string
5. Tiền bạc → xử lý cẩn thận


Bài tập:

Bài 1: Ép kiểu an toàn
Cho biến:
    let a = "10";
    let b = "5.5";
    let c = "abc";

Yêu cầu:
    Ép a, b sang số
    Kiểm tra c có phải số không
    In kết quả ra console
    Kết quả mong đợi
        10
        5.5
        c is not a number

Bài 2: Kiểm tra số nguyên
let x = 10;
let y = 3.14;

PHẦN 2 — SỐ THỰC & LÀM TRÒN (rất hay gặp)

Bài 3: Sửa lỗi sai số
let sum = 0.1 + 0.2;

Yêu cầu
Làm tròn sum thành 0.3
Kiểu dữ liệu cuối cùng phải là number

Bài 4: Tính tiền

let price = 19999.99;
let quantity = 3;
Yêu cầu
Tính tổng tiền
Làm tròn 2 chữ số thập phân

In ra kết quả

