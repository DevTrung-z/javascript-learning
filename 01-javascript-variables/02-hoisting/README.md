
## ĐỊNH NGHĨA CHUẨN

> **Hoisting là hành vi của JavaScript Engine đưa phần *khai báo* (declaration) của biến và hàm lên đầu scope trong giai đoạn tạo execution context – trước khi code được thực thi.**

❗ **Chỉ hoist khai báo, KHÔNG hoist giá trị.**

---

## 1️⃣ Hoisting xảy ra khi nào?

JavaScript chạy code theo **2 phase**:

### Phase 1: Creation Phase

* Tạo scope
* Đăng ký biến
* Đăng ký function
* Cấp bộ nhớ

### Phase 2: Execution Phase

* Chạy từng dòng code
* Gán giá trị
* Thực thi logic

👉 Hoisting xảy ra **ở phase 1**.

---

## 2️⃣ Hoisting với `var`

```js
console.log(a);
var a = 10;
```

JS hiểu thành:

```js
var a;        // hoisted
console.log(a); // undefined
a = 10;
```

📌 Vì vậy:

* Không lỗi
* Nhưng `undefined`

---

## 3️⃣ Hoisting với `let` và `const` (Temporal Dead Zone)

```js
console.log(b);
let b = 10;
```

❌ Lỗi:

```text
ReferenceError: Cannot access 'b' before initialization
```

👉 `let` và `const` **có hoisting**, nhưng:

* Bị khóa trong **Temporal Dead Zone (TDZ)**
* Không cho truy cập trước khi khởi tạo

📌 Đây là **cơ chế bảo vệ bug**, không phải lỗi thiết kế.

---

## 4️⃣ Hoisting với Function Declaration

```js
sayHi();

function sayHi() {
  console.log("Hi");
}
```

✔ Chạy bình thường

👉 Function declaration được hoisted **toàn bộ** (cả body).

---

## 5️⃣ Function Expression KHÔNG được hoisted như function

```js
sayHello();

const sayHello = function () {
  console.log("Hello");
};
```

❌ Lỗi:

* Vì `sayHello` nằm trong TDZ

---

## 6️⃣ So sánh nhanh

| Trường hợp           | Hoisted  | Truy cập trước |
| -------------------- | -------- | -------------- |
| `var`                | ✅        | undefined      |
| `let`                | ✅        | ❌ (TDZ)        |
| `const`              | ✅        | ❌ (TDZ)        |
| function declaration | ✅ (full) | ✅              |
| function expression  | ❌        | ❌              |

---

## 7️⃣ Hiểu đúng – tránh hiểu sai

❌ Sai:

> “JS chạy từ dưới lên”

❌ Sai:

> “Hoisting là JS tự động chuyển code”

✅ Đúng:

> **JS phân tích code trước, rồi mới chạy.**

---

## 8️⃣ Ví dụ thực tế senior rất hay gặp bug

```js
if (condition) {
  var isReady = true;
}

if (isReady) {
  doSomething();
}
```

❌ Bug ngầm do `var` leak scope

---

## 9️⃣ Quy tắc senior dùng để né hoisting bug

1. ❌ Không dùng `var`
2. ✅ Dùng `const` mặc định
3. ✅ Khai báo biến trước khi dùng
4. ✅ Function expression > declaration trong module

---

## 10️⃣ Câu chốt của senior

> **Hoisting không phải là feature để tận dụng,
> mà là behavior cần hiểu để tránh lỗi.**


- Tiêu chuẩn hoisting điều dựa trên quy luật Temporal Dead Zone(Vùng chết thời gian)!
Có liên quan đến:
Phase 1 – Creation / Compilation phase
(Quét – chuẩn bị – dựng môi trường)

JS engine làm trước khi chạy bất kỳ dòng nào:
Nó làm gì?
Quét toàn bộ code trong scope hiện tại
Tạo:
Scope
Environment Record
Binding cho:
let / const
var
function declaration

Xác định:
Biến nào thuộc scope nào
Có TDZ hay không
Có conflict (trùng tên) hay không
Quan trọng
Không gán giá trị cho let / const
Chỉ “ghi danh” biến

👉 Lỗi có thể phát hiện ở phase này:
Trùng khai báo let
Sai cú pháp
Shadowing bất hợp lệ

🔹 Phase 2 – Execution phase

(Chạy từng dòng từ trên xuống)
Nó làm gì?
Thực thi statement
Gán giá trị khi gặp dòng khai báo

Gọi hàm
Thực hiện logic
Lỗi xuất hiện ở phase này:
ReferenceError (TDZ)
TypeError
Runtime error
Logic error