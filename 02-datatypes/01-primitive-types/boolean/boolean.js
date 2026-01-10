console.log(
  Boolean(1), // true
  Boolean(0), // false
  Boolean("abc"), // true
  Boolean(""), // false
  Boolean(null), // false
  Boolean(undefined), // false
  Boolean(!"hello"), // true
  Boolean(!!0), // false
  Boolean("0"), // true
  Boolean([]), // true
  Boolean({}), // true
  Boolean("false") // true
);

// 6 falsy values (ghi nhớ, chưa cần dùng)
// false, 0, "", null, undefined, NaN
// // ND &&
// true && true   // true
// false && true  // false

// OR ||
// false || true  //

// NOT !
// !true  // false

//Ví dụ
let user = null;
let name = user && user.name;
console.log(name); //null
//cách gán giá trị
let username = "" || "Trung";
console.log(username); // Trung


// | vs ?? (rất quan trọng)
// let score = 0;

// score || 10   // 10 ❌ sai logic
// score ?? 10   // 0  ✅ đúng


// ✔ || check falsy
// ✔ ?? chỉ check null | undefined

// 8. Boolean trong if (bug phổ biến)

// Sai lầm
// if ("false") {
//   console.log("RUN"); // vẫn chạy
// }

// Đúng
// if (value === false) {
// }

// 9. So sánh boolean
// true == 1    // true  ❌
// true === 1   // false ✅

// 👉 Luôn dùng ===