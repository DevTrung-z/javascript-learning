Primitive: Kiểu dữ liệu nguyên thủy:
Gồm 7 loại:
string
number
boolean
undefined
null
bigint
symbol
Đặc điểm:

Lưu giá trị trực tiếp
Immutable (không thay đổi giá trị gốc)

## Primitive Type là gì?

- Là **kiểu dữ liệu nguyên thủy**
- Lưu **giá trị trực tiếp**
- **Immutable** (không thể thay đổi giá trị gốc)
- So sánh theo **giá trị**

---

## 7 Primitive Types trong JavaScript

### 1. `string`

Chuỗi ký tự

```js
let name = "Trung";
```

---

### 2. `number`

Số nguyên & số thực

```js
let age = 20;
let price = 99.9;
```

---

### 3. `boolean`

Đúng / Sai

```js
let isLogin = true;
```

---

### 4. `undefined`

Biến khai báo nhưng **chưa gán giá trị**

```js
let x;
```

---

### 5. `null`

Giá trị rỗng **có chủ đích**

```js
let data = null;
```

---

### 6. `bigint`

Số nguyên rất lớn

```js
let big = 9007199254740991n;
```

---

### 7. `symbol`

Giá trị **duy nhất**

```js
const id = Symbol("id");
```

---

## Đặc điểm quan trọng

```js
let a = 10;
let b = a;
b = 20;

console.log(a); // 10
```

👉 Gán là **copy giá trị**, không ảnh hưởng nhau.

---

## Ghi nhớ nhanh

- Primitive → giá trị đơn giản
- Không có method riêng (JS tự wrap tạm thời)
- So sánh theo **value**

---

### Kết luận

Primitive Types là **nền móng của JS**.
Hiểu rõ → tránh bug → code chắc.

Muốn thể hiện kiểu dữ liệu sử dụng TypeOF
let Num = 10;
console.log(typeof Num);
