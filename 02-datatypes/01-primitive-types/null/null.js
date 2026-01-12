console.log("Thanh Trung");

///PHẦN 1 — NHẬN DIỆN null
//Bài tập 1: KIỂM TRA TRẠNG THÁI ĐĂNG NHẬP

const currentUse = null;

if (currentUse == null) {
  console.log("Guest");
} else {
  console.log(currentUse.name);
}
console.log(currentUse);

//Bài 2: Reset dữ liệu đã chọn
let selectProduct = {
  id: 101,
  name: "Iphone",
}; //yêu cầu reset lại như chưa chọn gì
console.log(selectProduct);
selectProduct = null; //Sử dụng null để reset
console.log("selectProduct " + selectProduct);

///PHẦN 2 — NULL TRONG API / DATA
//Bài 3: Dữ liệu từ backend

const user = {
  name: "Trung",
  avatar: null,
};
//Nếu avatar là null thì sử dụng ảnh mặt định default.png

const avatarURL = user.avatar ?? "default.png";
console.log(avatarURL);

//Bài 4: Kiểm tra dữ liệu hợp lệ

let email = null;
//nếu email = null thì báo email missing
if (email == null) {
  console.log("email missing");
}

//PHẦN 3 — NULL VS UNDEFINED (hay nhầm nhất)

//bài 5 phân biệt null và undefined

let a;
let b = null;

if (a === undefined) {
  console.log("a is undefined");
}
if (b === null) {
  console.log("b is null");
}
//Fix bug logic

let discount = null;
// let finalDiscount = discount || 10;

//Vấn đề: null -> 10 (ok)
//        nhưng discount = 0 cũng thành 10;
//sửa
let finalDiscount = discount ?? 10;

//Bài 7: Optional data

const order = {
  customer: null,
};
//Yêu cầu: truy cập vào order.customer.name, không crash

const customerName = order.customer?.name ?? "Anonymous";
console.log(customerName);


/// MỘt số bài tập vào từng trường hợp đề cử!