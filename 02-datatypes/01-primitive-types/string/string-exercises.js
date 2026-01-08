// Bài toán 01:
// Người dùng nhập:

// "   Trung,HTML,CSS,JS   "

// Yêu cầu
// Xóa khoảng trắng dư sử dụng trim()
// Tách name và skills: sử dụng split() sẽ tách name và skills theo từng dấu ",", chuyển 
                        // từ dạng string thành array(bài học sau) sau đó sẽ truy vấn
                        // tên bằng []
// Chuẩn hóa chữ thường : Đối với tên sử dụng toLowerCase() để thường tất cả sau đó in lại chữ cái đầu tiên
// In kết quả đẹp

// Lấy các phần tử DOM
const inputText = document.getElementById("ntext");
const printText = document.getElementById("printText");
const formatButton = document.querySelector(".ntext");

// // Thêm event listener cho button
// formatButton.addEventListener("click", function () {
//   // Lấy giá trị từ input
//   let userInput = inputText.value

//   // Bước 1: Xóa khoảng trắng dư (trim toàn bộ chuỗi)
//   let trimmedInput = userInput.trim();

//   // Bước 2: Tách name và skills theo dấu phẩy
//   let parts = trimmedInput.split(",");

//   // Bước 3: Chuẩn hóa chữ thường
//   let name = parts[0].toLowerCase();
//   let skills = parts.slice(1).map((skill) => skill.toLowerCase());

//   // Bước 4: In kết quả đẹp
//   let result = `Name: ${name} Skills: ${skills.join(", ")}`;

//   // Hiển thị kết quả
//   printText.textContent = result;

// });
