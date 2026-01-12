# Date trong JavaScript

## Giới thiệu

Date là một built-in object trong JavaScript dùng để làm việc với ngày và giờ. Nó đại diện cho một thời điểm cụ thể trong thời gian.

## Cách tạo Date

```javascript
// Ngày và giờ hiện tại
let now = new Date();

// Từ string
let date1 = new Date("2023-12-25");
let date2 = new Date("December 25, 2023 10:30:00");

// Từ các thành phần
let date3 = new Date(year, month, day, hour, minute, second, millisecond);
// Lưu ý: month bắt đầu từ 0 (0 = January)

// Từ timestamp (milliseconds since 1970-01-01)
let date4 = new Date(1671926400000);
```

## Phương thức phổ biến

### Phương thức lấy thông tin

| Phương thức         | Mô tả                                |
| ------------------- | ------------------------------------ |
| `getFullYear()`     | Năm (4 chữ số)                       |
| `getMonth()`        | Tháng (0-11)                         |
| `getDate()`         | Ngày trong tháng (1-31)              |
| `getDay()`          | Ngày trong tuần (0-6, 0 = Sunday)    |
| `getHours()`        | Giờ (0-23)                           |
| `getMinutes()`      | Phút (0-59)                          |
| `getSeconds()`      | Giây (0-59)                          |
| `getMilliseconds()` | Milliseconds (0-999)                 |
| `getTime()`         | Timestamp (milliseconds since epoch) |

### Phương thức đặt thông tin

| Phương thức          | Mô tả                |
| -------------------- | -------------------- |
| `setFullYear(year)`  | Đặt năm              |
| `setMonth(month)`    | Đặt tháng (0-11)     |
| `setDate(date)`      | Đặt ngày trong tháng |
| `setHours(hour)`     | Đặt giờ              |
| `setMinutes(minute)` | Đặt phút             |
| `setSeconds(second)` | Đặt giây             |

### Phương thức định dạng

| Phương thức            | Mô tả            |
| ---------------------- | ---------------- |
| `toString()`           | String đầy đủ    |
| `toDateString()`       | Chỉ ngày         |
| `toTimeString()`       | Chỉ giờ          |
| `toISOString()`        | ISO 8601 format  |
| `toLocaleDateString()` | Ngày theo locale |
| `toLocaleTimeString()` | Giờ theo locale  |

### Phương thức UTC

| Phương thức                            | Mô tả     |
| -------------------------------------- | --------- |
| `getUTCFullYear()`, `setUTCFullYear()` | Năm UTC   |
| `getUTCMonth()`, `setUTCMonth()`       | Tháng UTC |
| `getUTCDate()`, `setUTCDate()`         | Ngày UTC  |
| `getUTCHours()`, `setUTCHours()`       | Giờ UTC   |
| `getUTCMinutes()`, `setUTCMinutes()`   | Phút UTC  |
| `getUTCSeconds()`, `setUTCSeconds()`   | Giây UTC  |

### Phương thức tĩnh

| Phương thức                                        | Mô tả                        |
| -------------------------------------------------- | ---------------------------- |
| `Date.now()`                                       | Timestamp hiện tại           |
| `Date.parse(string)`                               | Parse string thành timestamp |
| `Date.UTC(year, month, day, hour, minute, second)` | Tạo timestamp UTC            |

## Ví dụ chi tiết

### Ví dụ cơ bản

```javascript
let now = new Date();
console.log("Năm:", now.getFullYear());
console.log("Tháng:", now.getMonth() + 1); // +1 vì month 0-based
console.log("Ngày:", now.getDate());
console.log("Giờ:", now.getHours());
```

### Ví dụ với set methods

```javascript
let date = new Date();
date.setFullYear(2024);
date.setMonth(5); // June
date.setDate(15);
console.log("Ngày đã đặt:", date.toDateString());
```

### Ví dụ định dạng

```javascript
let now = new Date();
console.log("toString():", now.toString());
console.log("toDateString():", now.toDateString());
console.log("toISOString():", now.toISOString());
console.log("toLocaleDateString():", now.toLocaleDateString());
```

### Ví dụ tính toán ngày

```javascript
let now = new Date();

// Ngày mai
let tomorrow = new Date(now);
tomorrow.setDate(now.getDate() + 1);
console.log("Ngày mai:", tomorrow.toDateString());

// Tuần sau
let nextWeek = new Date(now);
nextWeek.setDate(now.getDate() + 7);
console.log("Tuần sau:", nextWeek.toDateString());
```

### Ví dụ so sánh và tính khoảng cách

```javascript
let date1 = new Date("2023-01-01");
let date2 = new Date("2023-01-02");

console.log("date1 < date2:", date1 < date2); // true
console.log("date1 === date2:", date1 === date2); // false

// Tính khoảng cách
let diffInMs = date2 - date1;
let diffInDays = diffInMs / (1000 * 60 * 60 * 24);
console.log("Khoảng cách:", diffInDays, "ngày");
```

### Ví dụ với UTC

```javascript
let now = new Date();
console.log("Local year:", now.getFullYear());
console.log("UTC year:", now.getUTCFullYear());

let utcDate = new Date(now.getTime() + now.getTimezoneOffset() * 60000);
console.log("UTC Date:", utcDate.toISOString());
```

### Ví dụ với static methods

```javascript
console.log("Now (timestamp):", Date.now());
console.log("Parse:", Date.parse("2023-12-25T00:00:00"));
console.log("UTC timestamp:", Date.UTC(2023, 11, 25)); // Tháng 11 = December
```

## Lưu ý

- JavaScript Date dựa trên thời gian UTC, nhưng có thể bị ảnh hưởng bởi timezone của hệ thống.
- Tháng trong Date object bắt đầu từ 0 (January = 0).
- Date object có thể so sánh trực tiếp bằng toán tử <, >, ==, ===.
- Để làm việc với timezone phức tạp, nên sử dụng thư viện như moment.js hoặc date-fns.
- Date.parse() có thể không consistent giữa các browser, nên tránh dùng với string phức tạp.
