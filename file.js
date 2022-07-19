// // question 1

// var boole = Number.isInteger("abc");
// console.log(boole);

// function countSubarrays(arr) {
//   var count = 0;
//   for (var i = 0; i < twoDeeArr[i]; i++) {
//     for (var k = 0; i < twoDeeArr[i][k].length; i++) {
//       count++;
//       if (Number.isInteger(twoDeeArr[i][0][0]) == false) {
//         for (let j = 0; j < twoDeeArr[i][j]; j++) {
//           count++;
//         }
//       }
//     }
//     return count;
//   }
// }

// const twoDeeArr = [
//   [
//     [1, 2, 3],
//     [1, 2, 3],
//     [1, 2, 3],
//     [[1], [[2], [3]], [4]],
//   ],
// ];
// count = countSubarrays(twoDeeArr);
// console.log(count);

// //question 2
// function capitalizeMe(arr) {
//   for (var i = 0; i < arr.length; i++) {
//     arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
//   }
// }

// names = ["mavis", "senaida", "letty"];
// console.log(names);
// capitalizeMe(names);
// console.log(names);

// //question 3
// function removeDuplicates(array) {
//   newArray = uniqBy;
// }

// //question 5
// function intersectionUnion(arrOne, arrTwo) {
//   result = [];
//   intersection = arrOne.filter((value) => arrTwo.includes(value));
//   result.push(intersection);
//   union = [...new Set([...arrOne, ...arrTwo])];
//   result.push(union);
//   return result;
// }

// const r = intersectionUnion([1, 2, 3, 7], [2, 3]);
// console.log("result:");
// console.log(r);

// //question 4
// function objectToArray(obj) {
//   res = [];
//   const objKeys = Object.keys(obj);
//   const objVals = Object.values(obj);

//   for (let i = 0; i < objKeys.length; i++) {
//     resObj = [];
//     resObj.push(objKeys[i]);
//     resObj.push(objVals[i]);
//     res.push(resObj);
//   }
//   return res;
// }

// const ans = objectToArray({ fName: "Tom", lName: "Cruise", Age: 52 });
// console.log(ans);

// Write a function to Fetch JSON data from https://jsonplaceholder.typicode.com/users and return an array of phone numbers of the users.

// 1. Do it using callbacks.
// 2. Do it using .then syntax.
// 3. Do it using async/await

// //2:
import fetch from "node-fetch";

// let data = fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
//   res.json()
// );

// Promise.all([data])
//   .then((value) => console.log(value))
//   .catch((err) => alert(err));

// console.log(data);

//3:
var copy = {};
async function fetchData() {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");

  const res = await data.json();
  copy = { ...res };
  console.log(res);
}

fetchData();

console.log(copy);
for (const item in copy) {
  copy;
}

// var string = "phone"
// keys = Object.keys(res)
// console.log(keys);
// arr = []

// for (item in res) {
//   console.log(res[phone]);
// }

// for(var item in res){
//   if(== string){
//     arr.push(res[])
//   }
// }
//1:
