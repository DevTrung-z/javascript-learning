
//BÀI 01:
let a = "10";
let b = "5.5";
let c = "abc";

let numA = Number(a);
let numB = Number(b);
let numC = Number(c);

console.log(numA); // 10
console.log(numB)

if(Number.isNaN(numC)){
    console.log("is not numnber");
}

//Bài 02:
let x = 10;
let y = 3.14;

console.log(Number.isInteger(x));
console.log(Number.isInteger(y));

//Bài 03

let sum = 0.1 + 0.2;

const fixsum = Number(sum.toFixed(2))
console.log(fixsum)
//Áp dụng cho các bài toán tính tiennef

//bài 04

let price = 19999.99;
let quantity = 3;

let total = price * quantity;
total = Number(total.toFixed(2))
console.log(total)

