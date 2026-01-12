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

### Lấy thông tin

- `getFullYear()`: Năm (4 chữ số)
- `getMonth()`: Tháng (0-11)
- `getDate()`: Ngày trong tháng (1-31)
- `getDay()`: Ngày trong tuần (0-6, 0 = Sunday)
- `getHours()`: Giờ (0-23)
- `getMinutes()`: Phút (0-59)
- `getSeconds()`: Giây (0-59)
- `getMilliseconds()`: Milliseconds (0-999)
- `getTime()`: Timestamp (milliseconds since epoch)

### Đặt thông tin

- `setFullYear(year)`
- `setMonth(month)`
- `setDate(date)`
- `setHours(hour)`
- `setMinutes(minute)`
- `setSeconds(second)`

### Định dạng

- `toString()`: String đầy đủ
- `toDateString()`: Chỉ ngày
- `toTimeString()`: Chỉ giờ
- `toISOString()`: ISO 8601 format
- `toLocaleDateString()`: Ngày theo locale
- `toLocaleTimeString()`: Giờ theo locale

### UTC

- `getUTCFullYear()`, `setUTCFullYear()`
- `getUTCMonth()`, `setUTCMonth()`
- Tương tự cho các phương thức khác

### Static methods

- `Date.now()`: Timestamp hiện tại
- `Date.parse(string)`: Parse string thành timestamp
- `Date.UTC(year, month, day, hour, minute, second)`: Tạo timestamp UTC

## Ví dụ

```javascript
let now = new Date();
console.log("Năm:", now.getFullYear());
console.log("Tháng:", now.getMonth() + 1); // +1 vì month 0-based

// Tính ngày mai
let tomorrow = new Date(now);
tomorrow.setDate(now.getDate() + 1);

// So sánh ngày
let date1 = new Date("2023-01-01");
let date2 = new Date("2023-01-02");
console.log(date1 < date2); // true

// Tính khoảng cách
let diff = date2 - date1; // milliseconds
let days = diff / (1000 * 60 * 60 * 24);
console.log("Khoảng cách:", days, "ngày");
```

## Lưu ý

- JavaScript Date dựa trên thời gian UTC, nhưng có thể bị ảnh hưởng bởi timezone của hệ thống.
- Tháng trong Date object bắt đầu từ 0 (January = 0).
- Date object có thể so sánh trực tiếp bằng toán tử <, >, ==, ===.
- Để làm việc với timezone phức tạp, nên sử dụng thư viện như moment.js hoặc date-fns.
