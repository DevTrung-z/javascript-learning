
//Var
console.log(a); // 👉 undefined (KHÔNG lỗi)
var a = 10;
//Nhưng về phía js sẽ hiểu rằng:
    // var a;          // khai báo được hoisted
    // console.log(a); // undefined
    // a = 10;         // gán giá trị ở execution phase

//Let
console.log(b); // ❌ ReferenceError
let b = 20;

// Giải thích:
    // JS biết biến b tồn tại
    // Nhưng đặt b vào TDZ
    // Truy cập trước khi khởi tạo → lỗi
    // 📌 Kết luận:
    // let có hoisting, nhưng không cho dùng trước


// Hoisting với const
console.log(c); // ❌ ReferenceError
const c = 30;


// 📌 Giống let, nhưng:
// const bắt buộc gán giá trị ngay

// Function Declaration (hoisted toàn bộ)...

sayHello(); // 👉 "Hello"

function sayHello() {
  console.log("Hello");
}

// Vì sao chạy được?
// JS hoisted cả hàm + body
// Có thể gọi trước khi khai báo
// 📌 Kết luận:
// Function declaration hoisted hoàn chỉnh

let fullName = "Nguyenthanhtrung";
{
    let fullName = "Nguyenthanhtruung";
    {
        console.log(fullName);
        let fullName = "trung";
    }
}