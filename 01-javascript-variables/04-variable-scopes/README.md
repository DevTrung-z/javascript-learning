**Scope** là *phạm vi mà biến/biểu thức có thể được truy cập*.
Biến **ngoài scope → không dùng được**.
Scope có **tính phân cấp**: scope con dùng được biến của scope cha, **không ngược lại**.

---

### Các loại scope trong JavaScript

1. **Global Scope**

* Phạm vi mặc định.
* Biến dùng được ở mọi nơi.

let a = 10;

function test() {
  console.log(a); // 10
}

test();
console.log(a); // 10
👉 Biến khai báo ngoài cùng → dùng được mọi nơi.


2. **Module Scope**

* Áp dụng cho file chạy ở chế độ `module`.
* Biến chỉ dùng trong module đó.

3. **Function Scope**

* Tạo bởi function.
* Biến khai báo trong function **chỉ dùng trong function**.
function demo() {
  let x = 5;
  console.log(x); // 5
}

demo();
console.log(x); // ❌ ReferenceError
Biến trong function không lọt ra ngoài.

4. **Block Scope**

* Tạo bởi `{}` (if, for, while…).
* Chỉ áp dụng cho `let`, `const`, `class`.
* `var` **không có block scope**.
if (true) {
  let y = 20;
  const z = 30;
  console.log(y, z); // 20 30
}

console.log(y); // ❌
console.log(z); // ❌
👉 Chỉ tồn tại trong {}.


---

### Ghi nhớ nhanh

* Function tạo scope riêng.
* Block `{}` chỉ giới hạn `let` / `const`.
* `var` thoát block → dễ gây bug.
* Scope con đọc được biến scope cha.

---

### Kết luận thực tế

* Dùng `const` mặc định.
* Dùng `let` khi cần thay đổi.
* Tránh `var`.
