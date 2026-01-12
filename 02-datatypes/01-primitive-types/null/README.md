# Null trong JavaScript

## Null là gì?

`null` là một kiểu dữ liệu nguyên thủy (primitive type) trong JavaScript, đại diện cho một giá trị rỗng hoặc không tồn tại một cách có chủ đích. `null` biểu diễn sự vắng mặt có chủ ý của bất kỳ giá trị object nào.

## Sự khác biệt giữa null và undefined

Mặc dù cả `null` và `undefined` đều biểu diễn "không có giá trị", nhưng chúng có ý nghĩa khác nhau:

- `null`: Giá trị được gán một cách rõ ràng để biểu diễn "không có gì" hoặc "trống"
- `undefined`: Giá trị mặc định khi một biến chưa được gán giá trị

```javascript
let a; // undefined (chưa được gán)
let b = null; // null (được gán rõ ràng)

console.log(a); // undefined
console.log(b); // null.

console.log(typeof a); // "undefined"
console.log(typeof b); // "object" (đây là một bug lịch sử)
```

## Khi nào sử dụng null?

### 1. Khởi tạo biến object sẽ được gán sau

```javascript
let user = null; // Sẽ được gán object user sau
// ... code ...
user = { name: "John", age: 30 };
```

### 2. Xóa tham chiếu đến object

```javascript
let data = { name: "John" };
data = null; // Xóa tham chiếu, giúp garbage collector dọn dẹp
```

### 3. Kiểm tra giá trị không tồn tại

```javascript
function findUser(id) {
  // Giả sử tìm không thấy
  return null; // Trả về null thay vì undefined
}
```

### 4. Trong DOM manipulation

```javascript
let element = document.getElementById("nonexistent");
console.log(element); // null (element không tồn tại)
```

## Kiểm tra null

### 1. So sánh trực tiếp

```javascript
let value = null;
if (value === null) {
  console.log("Giá trị là null");
}
```

### 2. Kiểm tra cả null và undefined

```javascript
let value = null;
if (value == null) {
  console.log("Giá trị là null hoặc undefined");
}
```

### 3. Sử dụng typeof (không khuyến khích)

```javascript
let value = null;
if (typeof value === "object" && value === null) {
  console.log("Giá trị là null");
}
```

## Null trong các toán tử

### 1. Toán tử logic

```javascript
console.log(null && "hello"); // null (short-circuit)
console.log(null || "hello"); // "hello" (short-circuit)
console.log(!null); // true
```

### 2. Toán tử so sánh

```javascript
console.log(null == undefined); // true
console.log(null === undefined); // false

console.log(null == 0); // false
console.log(null < 0); // false
console.log(null > 0); // false
console.log(null <= 0); // true
console.log(null >= 0); // true
```

### 3. Toán tử số học

```javascript
console.log(null + 1); // 1 (null chuyển thành 0)
console.log(null * 2); // 0
console.log(null - 1); // -1
```

## Null trong JSON

`null` là một giá trị hợp lệ trong JSON:

```javascript
let data = {
  name: "John",
  address: null, // Địa chỉ chưa được cung cấp
  phone: "123-456-7890",
};

let jsonString = JSON.stringify(data);
console.log(jsonString); // {"name":"John","address":null,"phone":"123-456-7890"}
```

## Null và falsy values

`null` là một trong những falsy values trong JavaScript:

```javascript
if (null) {
  console.log("This won't run");
} else {
  console.log("null is falsy"); // This will run
}
```

Các falsy values khác: `false`, `0`, `""`, `undefined`, `NaN`

## Các phương thức làm việc với null

### 1. Object.is()

```javascript
console.log(Object.is(null, null)); // true
console.log(Object.is(null, undefined)); // false
```

### 2. String conversion

```javascript
console.log(String(null)); // "null"
console.log(null + ""); // "null"
```

### 3. Number conversion

```javascript
console.log(Number(null)); // 0
console.log(+null); // 0
```

## Null trong các cấu trúc dữ liệu

### 1. Array

```javascript
let arr = [1, null, 3, null];
console.log(arr); // [1, null, 3, null]
console.log(arr.length); // 4
```

### 2. Object

```javascript
let obj = {
  name: "John",
  address: null,
};
console.log(obj.address); // null
```

### 3. Map và Set

```javascript
let map = new Map();
map.set("key", null);
console.log(map.get("key")); // null

let set = new Set([null, 1, null]);
console.log(set); // Set(2) {null, 1}
```

## Lưu ý quan trọng

1. **Typeof anomaly**: `typeof null` trả về `"object"` - đây là một bug lịch sử trong JavaScript.

2. **Không phải object thực sự**: Mặc dù `typeof null === "object"`, nhưng `null` không phải là object và không có properties.

```javascript
console.log(null.toString()); // TypeError: Cannot read property 'toString' of null
```

3. **Memory management**: Gán `null` cho biến giúp garbage collector giải phóng bộ nhớ.

4. **API design**: Thường dùng `null` để biểu diễn "không tìm thấy" trong các hàm tìm kiếm.

## Best practices

### 1. Sử dụng null thay vì undefined khi có chủ đích

```javascript
// Tốt
function findUser(id) {
  // Logic tìm user
  return user || null; // Trả về null nếu không tìm thấy
}

// Không tốt
function findUser(id) {
  // Logic tìm user
  return user || undefined; // Không rõ ràng
}
```

### 2. Kiểm tra null một cách rõ ràng

```javascript
// Tốt
if (value === null) {
  // Xử lý null
}

// Không tốt
if (!value) {
  // Có thể là null, undefined, false, 0, ""
}
```

### 3. Sử dụng default parameters

```javascript
function process(data = null) {
  if (data === null) {
    // Xử lý trường hợp null
  }
}
```

## Nullish coalescing operator (ES2020)

```javascript
let value = null;
let result = value ?? "default";
console.log(result); // "default"

let value2 = 0;
let result2 = value2 ?? "default";
console.log(result2); // 0 (vì 0 không phải nullish)
```

## Kết luận

`null` là một khái niệm quan trọng trong JavaScript để biểu diễn sự vắng mặt có chủ ý của giá trị. Hiểu rõ sự khác biệt giữa `null` và `undefined`, cũng như cách sử dụng chúng một cách phù hợp, sẽ giúp bạn viết code JavaScript tốt hơn và tránh được nhiều lỗi phổ biến.
