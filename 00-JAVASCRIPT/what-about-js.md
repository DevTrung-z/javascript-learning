# Giới thiệu về JavaScript

## JavaScript là gì?

JavaScript (viết tắt là JS) là một ngôn ngữ lập trình động, đa năng, được sử dụng chủ yếu để phát triển các ứng dụng web tương tác. Nó là một trong ba công nghệ cốt lõi của World Wide Web, cùng với HTML và CSS. JavaScript cho phép bạn thêm hành vi động vào các trang web, làm cho chúng trở nên sống động và tương tác.

## Lịch sử phát triển

JavaScript được tạo ra bởi Brendan Eich tại Netscape Communications vào năm 1995. Ban đầu, nó được gọi là Mocha, sau đó đổi tên thành LiveScript, và cuối cùng là JavaScript để tận dụng sự phổ biến của Java vào thời điểm đó. Mặc dù tên gọi gợi ý mối liên hệ với Java, nhưng JavaScript và Java là hai ngôn ngữ hoàn toàn khác nhau.

Năm 1997, JavaScript được chuẩn hóa thành ECMAScript (ES) bởi tổ chức ECMA International. Các phiên bản chính bao gồm:

- ES1 (1997)
- ES3 (1999)
- ES5 (2009)
- ES6/ES2015 (2015) - một bản cập nhật lớn
- ES2016 đến ES2023 - các phiên bản hàng năm

## Đặc điểm chính

### 1. Ngôn ngữ lập trình động

JavaScript là ngôn ngữ động, nghĩa là kiểu dữ liệu của biến được xác định tại thời gian chạy, không phải tại thời gian biên dịch.

### 2. Đa nền tảng

JavaScript có thể chạy trên nhiều môi trường khác nhau:

- **Trình duyệt web**: Sử dụng engine như V8 (Chrome), SpiderMonkey (Firefox), JavaScriptCore (Safari)
- **Máy chủ**: Với Node.js
- **Ứng dụng di động**: Với React Native, Cordova
- **Ứng dụng desktop**: Với Electron

### 3. Prototype-based

JavaScript sử dụng mô hình prototype-based thay vì class-based như nhiều ngôn ngữ khác (mặc dù ES6 đã giới thiệu class syntax).

### 4. Event-driven

JavaScript thường được sử dụng trong lập trình hướng sự kiện, đặc biệt là trong phát triển web.

### 5. Single-threaded

JavaScript chạy trên một luồng duy nhất, nhưng có thể xử lý bất đồng bộ thông qua callback, Promise, và async/await.

## Cách sử dụng JavaScript

### 1. Trong trình duyệt

JavaScript được nhúng trực tiếp vào HTML thông qua thẻ `<script>`:

```html
<script>
  console.log("Hello, World!");
</script>
```

### 2. File riêng biệt

```html
<script src="script.js"></script>
```

### 3. Trên máy chủ với Node.js

```javascript
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello World\n");
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
```

## Ưu điểm của JavaScript

1. **Dễ học**: Cú pháp đơn giản, dễ tiếp cận cho người mới bắt đầu
2. **Phổ biến**: Được hỗ trợ rộng rãi trên tất cả các trình duyệt hiện đại
3. **Vệc làm**: Một trong những kỹ năng được yêu cầu nhiều nhất trong ngành công nghệ
4. **Cộng đồng lớn**: Có rất nhiều thư viện và framework như React, Vue, Angular, Express, etc.
5. **Vạn năng**: Có thể sử dụng cho frontend, backend, mobile, desktop, IoT, v.v.

## Nhược điểm

1. **Bảo mật**: Code chạy trên client-side có thể bị khai thác
2. **Hiệu suất**: Có thể chậm hơn so với các ngôn ngữ biên dịch như C++ hoặc Java
3. **Debugging**: Đôi khi khó debug do tính động của ngôn ngữ

## Các khái niệm cơ bản cần nắm vững

- Biến và kiểu dữ liệu
- Hàm và scope
- Đối tượng và prototype
- Mảng và vòng lặp
- DOM manipulation
- Event handling
- Asynchronous programming (Promise, async/await)
- ES6+ features (arrow functions, destructuring, modules, etc.)

JavaScript là nền tảng của phát triển web hiện đại và tiếp tục phát triển với các tính năng mới mỗi năm. Việc học JavaScript sẽ mở ra nhiều cơ hội trong lĩnh vực công nghệ thông tin.
