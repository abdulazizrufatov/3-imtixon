// const numberOne = Number(prompt("Raqmingizni kiriting"));
// const numberTwo = Number(prompt("Raqmingizni kiriting"));
// const numberThree = Number(prompt("Raqmingizni kiriting"));

// const arr = [];

// arr.push(numberOne, numberTwo, numberThree);

// const numberFunc = function (arr) {
//   if (numberOne <= 0 || "" || numberTwo <= 0 || "" || numberThree <= 0 || "") {
//     console.log("0 dan katta son kiriting");
//   } else {
//     console.log(arr);
//     console.log(` yig'indisi ${numberOne + numberTwo + numberThree}`);
//   }
// };
// // console.log(numberFunc(arr));

// numberFunc(arr);

// 2-MASALA

// const array = ["Jazz", "Blues"];

// console.log(array);
// array.push("Rock-n-roll");
// console.log(array);
// array[1] = "Classic";
// console.log(array);
// array.shift();
// console.log(array);
// array.unshift("Reggae");
// array.unshift("Rap");
// console.log(array);

// 3-MASALA

// let salaries = {
//   Akmal: 1200,
//   Salim: 5200,
//   Karima: 1800,
// };

// const arr = [];

// const numFunc = function (salaries) {
//   let paySalaries = 0;
//   for (let num of salaries) {
//     paySalaries += num;
//   }
//   arr.push(paySalaries);
//   return arr;
// };
// console.log(numFunc(Object.values(salaries)));

// 4-MASALA

// const arr = [
//   1, 3, 3, 3, 5, 6, 2, 8, 9, 0, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// ];

// function calcSum(arr) {
//   const toqArr = [];
//   const juftArr = [];
//   for (let i of arr) {
//     if (arr[i] % 2 === 0) {
//       juftArr.push(arr[i]);
//       // console.log(arr[i]);
//     } else {
//       toqArr.push(arr[i]);
//     }
//   }
//   return `Juftlar ${juftArr}  Toqlar${toqArr}`;
// }
// console.log(calcSum(arr));

// 5-MASALA

let arr = [-3, -2, 1, 9];
let resultArr = [];

for (let i = arr[0]; i <= arr[arr.length - 1]; i++) {
  resultArr.push(i);
}

console.log(resultArr);
