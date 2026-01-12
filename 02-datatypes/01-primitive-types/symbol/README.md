# BigInt trong JavaScript

## BigInt là gì?

BigInt là một kiểu dữ liệu nguyên thủy (primitive type) được giới thiệu trong ES2020 (ES11), cho phép làm việc với các số nguyên có độ lớn tùy ý, vượt qua giới hạn của kiểu `Number` thông thường.

## Tại sao cần BigInt?

Kiểu `Number` trong JavaScript sử dụng định dạng IEEE 754 double-precision floating-point, có giới hạn:

- Số nguyên an toàn tối đa: `Number.MAX_SAFE_INTEGER` = 2^53 - 1 = 9,007,199,254,740,991
- Số nguyên an toàn tối thiểu: `Number.MIN_SAFE_INTEGER` = -(2^53 - 1)

Với các số lớn hơn giới hạn này, JavaScript sẽ mất độ chính xác:

```javascript
console.log(9007199254740992); // 9007199254740992
console.log(9007199254740993); // 9007199254740992 (mất độ chính xác!)
```

BigInt giải quyết vấn đề này bằng cách cho phép làm việc với số nguyên có độ dài tùy ý.

## Cách khai báo BigInt

### 1. Thêm hậu tố `n`

```javascript
let bigNum = 123456789012345678901234567890n;
console.log(bigNum); // 123456789012345678901234567890n
```

### 2. Sử dụng constructor `BigInt()`

```javascript
let bigNum1 = BigInt("123456789012345678901234567890");
let bigNum2 = BigInt(123456789012345678901234567890); // Lưu ý: số trong ngoặc sẽ bị làm tròn
console.log(bigNum1); // 123456789012345678901234567890n
console.log(bigNum2); // 123456789012345678894268416n (đã bị làm tròn!)
```

## Các phép toán với BigInt

BigInt hỗ trợ hầu hết các phép toán số học:

```javascript
let a = 123n;
let b = 456n;

console.log(a + b); // 579n
console.log(a - b); // -333n
console.log(a * b); // 56088n
console.log(a / b); // 0n (chia nguyên)
console.log(a % b); // 123n
console.log(a ** 2n); // 15129n
```

### Lưu ý về phép chia

BigInt chỉ thực hiện phép chia nguyên, không có phần thập phân:

```javascript
console.log(7n / 3n); // 2n (không phải 2.333...)
```

## So sánh BigInt

BigInt có thể so sánh với BigInt và Number:

```javascript
let big = 123n;
let num = 123;

console.log(big === num); // false (kiểu khác nhau)
console.log(big == num); // true (chuyển đổi ngầm)
console.log(big > num); // false
console.log(big < 200); // true
```

## Chuyển đổi giữa BigInt và Number

### BigInt sang Number

```javascript
let big = 123n;
let num = Number(big);
console.log(num); // 123
console.log(typeof num); // "number"
```

### Number sang BigInt

```javascript
let num = 123;
let big = BigInt(num);
console.log(big); // 123n
console.log(typeof big); // "bigint"
```

## Các phương thức hữu ích

### 1. `BigInt.asIntN()` và `BigInt.asUintN()`

Giới hạn BigInt trong một số bit nhất định:

```javascript
let big = 123456789012345678901234567890n;

// Giới hạn trong 64 bit có dấu
let int64 = BigInt.asIntN(64, big);
console.log(int64); // -1n (do overflow)

// Giới hạn trong 64 bit không dấu
let uint64 = BigInt.asUintN(64, big);
console.log(uint64); // 18446744073709551615n (do overflow)
```

### 2. `BigInt.prototype.toString()`

Chuyển BigInt thành chuỗi:

```javascript
let big = 123456789012345678901234567890n;
console.log(big.toString()); // "123456789012345678901234567890"
console.log(big.toString(16)); // "1a2b3c4d5e6f7890abcde" (hệ 16)
```

## BigInt và JSON

BigInt không được JSON.stringify() hỗ trợ trực tiếp:

```javascript
let data = { bigNum: 123n };
JSON.stringify(data); // TypeError: Do not know how to serialize a BigInt
```

Giải pháp: Chuyển thành string trước khi serialize:

```javascript
let data = { bigNum: 123n };
let serialized = JSON.stringify({
  ...data,
  bigNum: data.bigNum.toString(),
});
console.log(serialized); // {"bigNum":"123"}
```

## BigInt trong các cấu trúc dữ liệu

BigInt có thể được sử dụng trong Array, Set, Map:

```javascript
// Array
let arr = [1n, 2n, 3n];
console.log(arr); // [1n, 2n, 3n]

// Set
let set = new Set([1n, 2n, 2n, 3n]);
console.log(set); // Set(3) {1n, 2n, 3n}

// Map
let map = new Map();
map.set(1n, "one");
map.set(2n, "two");
console.log(map.get(1n)); // "one"
```

## Lưu ý quan trọng

1. **Không thể mix BigInt và Number trong phép toán**: `1n + 1` sẽ gây lỗi.

2. **Boolean conversion**: BigInt `0n` là falsy, các giá trị khác là truthy.

3. **Math object**: Các phương thức của Math không hoạt động với BigInt.

4. **Bitwise operators**: BigInt hỗ trợ các toán tử bitwise như `&`, `|`, `^`, `~`, `<<`, `>>`.

## Khi nào sử dụng BigInt?

- Khi làm việc với ID lớn (database IDs, timestamps)
- Tính toán tiền tệ với độ chính xác cao
- Cryptography
- Thao tác với binary data
- Các tính toán khoa học cần độ chính xác cao
==--
BigInt là một bổ sung quan trọng cho JavaScript, cho phép xử lý các số nguyên lớn mà không lo mất độ chính xác.
