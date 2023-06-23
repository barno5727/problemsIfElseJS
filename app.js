// alert, confirm, prompt

// let name = prompt("Ismingizni kiriting?");

// console.log(name);

// var, let, const
//scope - Function, Global va Block
// let hi = "hi";
// if (0) {
//   console.log(hi);
// } else {
//   console.log(hi);
// }

// let gLet = "in global";
// const gConst = "in global";
// var gVar = "in global";

// function sayHi() {
//   var gVar = "hello";
// }

// console.log(gVar);

// sayHi();

// const va let  - Block

// DOM - Document Object Modal

// const newBTN = document.createElement("button");
// newBTN.innerHTML = "Submit";
// document.body.appendChild(newBTN);
// const h1title = document.getElementById("title");
// h1title.innerHTML = "<i>yellow </i>";
// newBTN.style = "background: red; width: 300px;";
// newBTN.style.height = "40px";
// newBTN.className = "newclassname";
// Functions -

// Function Declaration
// function getFunc() {
//     console.log("function declaration");
//   }
//   getFunc();

//   // Function Expression
//   let fExpression = function (e) {
//     console.log(e);
//     console.log("expression");
//   };

//   // Arrow Function
//   const arrFunc = () => {
//     console.log("arrow function");
//   };
//   // invoke - chaqirish

//   arrFunc();

//   // IIFE - Immidiately Invokable Function Expression

//   (function () {
//     console.log("IIFE works");
//   })();

//   const title = document.getElementById("title");
//   title.addEventListener("click", () => {
//     title.innerHTML = "Changed";
//   });

//   // data types = 8 ta
//   // primitive va non-primitive
//   let a = "12sdfsdfkm";

//   const obj = {
//     name: "dfsdf",
//     age: 124,
//     "First Name": "Ilhomjon",
//   };

//   console.log(obj["First Name"]);

// camelCase
// PascalCase
// kebab-case
// UPPERCASE

// const arr = [1, 2343, 243, "hdfisdf", true, null, undefined];
//   const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//   arr.push(10, 11, 12);

//   console.log(
//       arr.filter( n => n % 2 !== 0 )
//   )

// arr.pop()
// arr.unshift(-1, 0);
// arr.shift();

// splice va slice
//splice(qayerdanboshlanishi, nechtaolinishi, elementqoshish)
// arr.splice(3)

// const newSlicedArr = arr.slice(3, 5)
// console.log(arr);
// console.log(newSlicedArr);
// // map
// let mappedArr = newSlicedArr.map((number) => number * 3 );
// console.log(mappedArr);

//   masala
// n-1 , 2, 3

// let a = 16;

// if (0 < a ) {
//     console.log("Musbat son");
// } else {
//     console.log("Manfiy son");
// }

// if (a %2  !== 0) {
//     console.log("toq son");
// } else {
//     console.log("juft son");
// }

// n-4

// let a = 10;
// let b = 20;
// if (a %2 ===0 && b %2 ===0) {
//     console.log("juft son");
// } else {
//          console.log("toq son");
//      }

// n-5 n-6

// let a = 30;
// let b = 20;
// let c = 10;
// if (a > b && b > c) {
//     console.log('true');
// } else {
//     console.log("false");
// }

// n-7

// let a =30 ;
// let b = 20;
// if(a % 2 !==0 && b %  2 !==0){
//     console.log("juft");
// } else {
//     console.log("toq");
// }

// n-8 n-9

// let a =11;
// let b = 20;
// let c = 40;
// if(a % 2 === 0 && b %  2 === 0 && c % 2 === 0){
//     console.log("juft");
// } else {
//     console.log("toq");
// }

// n-10

// let day = 1;

// if (day == 1) {
//     console.log("dushanba")
// } else if (day == 2) {
//     console.log("sewanba")
// } else if (day == 3)  {
//     console.log("chorshanba")
// } else if (day==4) {
//     console.log("payshanba")
// }

// n-11

// let num = 93;

// if (num === 93) {
//     console.log("ucell");
// } else if (num === 97){
//     console.log("ums");
// }

// n- 12

// let num = 19;
// if (num %2 ===0 ) { num+=1
//     console.log("juft");
// } else { num-=1
//     console.log("toq");
// }
// console.log(num);

// n- 14

// let num = 10;
// let num2 = 11;

//  if (num > num2){
//   console.log(num);
//  } else (num2 > a){
//   console.log(num2);
//  }

// let num = 10;
// if(num %2 ===0 && 0>num ) {
//   console.log(num);
// } else if (num %2 ===0 && 0<num ){
//   console.log(num);
// } else if (num  %2 !==0 && 0>num) {
//   console.log(num);
// }

// 15- masal a

// let  a = 2;
// let b = 3;
// let c = 4;

// if (a> b) {
//   console.log('a kotta')
// } else if (b> a) {
//   console.log('b kotta')
// } else if (c> b){
//   console.log('c kotta')
// }

// let age = 20;
// // ternary operators

// let res = age >= 18 ? 'can vote' : 'cant vote';
// console.log(res)

// ? = if
// : = else

let age = 20;

let condition = age > 15;
let condition2 = age > 18;
let value = "can vote";
let value2 = "cant vote";
let value3 = "too young";

let res = condition ? value : condition2 ? value2 : value3;
console.log(res);
