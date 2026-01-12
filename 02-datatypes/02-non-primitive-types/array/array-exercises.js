// 1. Sum of Positive Numbers

// Mô tả: Cho một mảng số nguyên, trả về tổng các phần tử dương.
// Ví dụ: input: [ -1, 3, 0, 4, -2 ] → output: 7
// Ràng buộc: mảng có thể rỗng → trả về 0.
// Gợi ý: dùng filter + reduce hoặc duyệt một vòng.
// Mức độ: Dễ — O(n).
console.log("BÀI 01"); //7

const even = [-1, 3, 0, 4, -2];
//cách 1:
const nextEven = even.filter((num) => num >= 0); //Chọn các số dương >=0
console.log(nextEven); // [3, 0, 4]
const sumEven = nextEven.reduce((acc, curr) => acc + curr, 0);
//sử dụng reduce để tổng
console.log(sumEven); //7

//Cách 2:
//sử dụng vòng lặp for
let x = 0;
for (a in even) {
  if (even[a] >= 0) {
    x += even[a];
  }
}
console.log(x); // 7

console.log("BAI 02");
// 2. Remove Falsy Values

// Mô tả: Loại bỏ tất cả giá trị falsy (false, 0, "", null, undefined, NaN)
//        khỏi mảng, giữ thứ tự còn lại.
// Ví dụ: input: [0, 1, false, 2, '', 3, null] → output: [1,2,3]
// Ràng buộc: không dùng vòng lặp nếp sâu (one-pass preferred).
// Gợi ý: arr.filter(Boolean).

const removeFalsy = [0, 1, false, 2, "", 3, null];
const rm = removeFalsy.filter(Boolean);
console.log(rm); // [1, 2, 3]

// Cách khác 1: Sử dụng callback với !! (double negation)
const rm2 = removeFalsy.filter(item => !!item);
console.log(rm2); // [1, 2, 3]

// Cách khác 2: Sử dụng callback trực tiếp với item (truthy check)
const rm3 = removeFalsy.filter(item => item);
console.log(rm3); // [1, 2, 3]

// Cách khác 3: Sử dụng callback với Boolean constructor rõ ràng
const rm4 = removeFalsy.filter(item => Boolean(item));
console.log(rm4); // [1, 2, 3]

// Cách khác 4: Kiểm tra từng falsy value (dài dòng hơn)
const rm5 = removeFalsy.filter(item => 
    item !== false && 
    item !== 0 && 
    item !== "" && 
    item !== null && 
    item !== undefined && 
    !isNaN(item)
);
console.log(rm5); // [1, 2, 3]



