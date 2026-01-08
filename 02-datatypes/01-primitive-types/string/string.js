const string1 = "A string primitive";
const string2 = "Also a string primitive";
const string3 = "Yet another string primitive";

//String object
const string4 = new String("A string object");

console.log(typeof string1); //String
console.log(string1 instanceof String); //True

console.log(typeof string4); //Object
console.log(string4 instanceof String); //False

//Truy cập vào phần tử:
//Có 2 cách:
//Sử dụng charAt(number)
//VÍ dụ:
console.log(string1.charAt(2)); // KQ: "s"

//CÁCH 2: coi string như là 1 mảng, trong đó các ký tự tương đương
//với các chỉ số riêng
//Ví dụ:
console.log(string2[1]); //KQ: "l"

//Các phương thức được sử dụng nhiều!

//"leagth" - Đếm số ký tự
const password = "abc123";
console.log(password.length); //KQ:6

//Truy cập ký tự([number], charAt(number));
const s = "JavaScript";
console.log(s[0]); // KQ: J
console.log(s.charAt(4)); //KQ: S

//slice(start, end) – cắt chuỗi (an toàn)
const phone = "0987654321";
console.log(phone.slice(0, 4) + "****"); //KQ: 0987****

//substring(start, end) – cắt chuỗi (không dùng số âm)
//khi dùng index luôn dương
const role = "ADMIN_USER";
console.log(role.substring(0, 5)); //KQ: ADMIN

// split(separator) – tách chuỗi thành mảng
// Dùng để parse dữ liệu.
const skills = "HTML,CSS,JS";
console.log(skills.split(",")); //KQ: ["HTML", "CSS", "JS"]

// includes() – kiểm tra có chứa hay không
// Dùng để validate email, keyword search.
const email = "user@gmail.com";
console.log(email.includes("@")); //KQ: true

// search() – tìm bằng regex
// 👉 Dùng khi cần pattern.
console.log(email.search("@"));// 4

// startsWith() / endsWith() – kiểm tra đầu/cuối chuỗi
// Dùng cho URL, file name.
const file = "avata.png";
console.log(file.endsWith(".png")); //KQ; true

// replace() / replaceAll() – thay thế nội dung
// Dùng để chuẩn hóa dữ liệu.
const text = "JS JS N T Trung";
console.log(text.replace("JS", "Javascript"));
console.log(text.replaceAll("JS", "Javascript"));

//trim() – xóa khoảng trắng thừa
// Dùng khi lấy dữ liệu từ form.
const passw = "    0294424   ";
console.log(passw.trim()); //KQ: "0294424"

//toLowerCase() - Chuyển hóa chữ thường
// toUpperCase() – Chuyển hóa chữ Hoa

const ad = "Admin";
console.log(ad.toUpperCase()); //ADMIN
console.log(ad.toLowerCase()); //admin
//Có thể chuyển hóa so sánh không phân biệt chữ hoa thường bằng cách
// console.log(a.toLowerCase() === b.toLowerCase());

// Template String – nối chuỗi chuyên nghiệp
// Dùng để render UI, log, message.
const name1 = "Trung";
const score = 90;
console.log(`User ${name1} đạt ${score} điểm`); //KQ: "User Trung đạt 90 điểm"

// concat() – nối chuỗi
// 👉 Dùng để nối nhiều chuỗi (ít dùng hơn template string).
const a = "Hello";
const b = "World";
console.log(a.concat(" ", b));

// repeat(n) – lặp chuỗi
// 👉 Dùng tạo separator, format output.
const lap = "x";
console.log(lap.repeat(5));// xxxxx

// padStart() / thêm ký tự cho đủ độ dài star
// padEnd() – thêm ký tự cho đủ độ dài END
// 👉 Dùng format mã, số thứ tự.
const id ="7";
console.log(id.padStart(3,"0"));// 003
console.log(id.padEnd(3,"!"));// 3!!!

//indexOf() – tìm vị trí đầu tiên
//lastIndexOf() – tìm vị trí cuối cùng
// 👉 Dùng kiểm tra tồn tại + vị trí.
const j = "JS I love JS ";
console.log(j.indexOf("JS"));// 0
console.log(j.lastIndexOf("JS")); // 7

// match() – lấy kết quả regex
// 👉 Dùng validate / extract.
const phonea = "Phone: 0987654321";
console.log(phonea.match(/\d+/)); // ["0987654321"]

// charCodeAt() – mã Unicode
// 👉 Ít dùng, nhưng gặp trong encoding.
console.log("A".charCodeAt(0));//65

// normalize() – chuẩn Unicode
// 👉 Quan trọng khi xử lý tiếng Việt
const se = "ế"; 
console.log(se.normalize("NFC"));//ế

// toString() – chuyển sang string
// 👉 Dùng khi ép kiểu an toàn.
const n = 123;
console.log(n.toString()); // 123

// Lấy & xóa phần tử đầu mảng
const first = arr.shift();

console.log(first); // "a"

// Lấy & xóa phần tử cuối mảng
const last = arr.pop();

console.log(last); // "d"

//Tìm hiểu thêm các phương thức
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
console.log(lap.repeat(100));// xxxxx
console.log("BAI TAP")



// Bài toán
// Người dùng nhập:

// "   Trung,HTML,CSS,JS   "

// Yêu cầu
// Xóa khoảng trắng dư
// Tách name và skills
// Chuẩn hóa chữ thường
// In kết quả đẹp

