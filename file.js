//Day 1:
// question 1

//check if incoming object has another array

// let countSubarrays = (x) => {
//   let count = 0;
//   for (let i = 0; i < x.length; i++) {
//     x.forEach((element) => {
//       count += element.length;
//     });
//   }
//   return count;
// };

// const twoDeeArr = [
//   [
//     [1, 2, 3],
//     [1, 2, 3],
//     [1, 2, 3],
//     [[1], [[2], [3]], [4]],
//   ],
// ];
// console.log(typeof twoDeeArr);
// let res = countSubarrays(twoDeeArr);
// console.log(res);

// // count = countSubarrays(twoDeeArr);
// // console.log(count);

// //question 2
// function capitalizeMe(arr) {
//   for (var i = 0; i < arr.length; i++) {
//     arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
//   }
// }

// const names = ["mavis", "senaida", "letty"];
// console.log(names);
// capitalizeMe(names);
// console.log(names);

// //question 3
// function removeDuplicates(array) {
//   newArray = uniqBy;
// }

// //question 5
// function intersectionUnion(arrOne, arrTwo) {
//   const result = [];
//   const intersection = arrOne.filter((value) => arrTwo.includes(value));
//   result.push(intersection);
//   const union = [...new Set([...arrOne, ...arrTwo])];
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

// ----------------------------------------------------------------------------------

// //Day 2:
// //Write a function to Fetch JSON data from https://jsonplaceholder.typicode.com/users and return an array of phone numbers of the users.

// //1. Do it using callbacks.
// //2. Do it using .then syntax.
// //3. Do it using async/await

import fetch from "node-fetch";
// // 1: callbacks

// // q: contacts are seperated in an array, how to return that array outside the function?

// let getUsers = (fetch_contacts) => {
//   setTimeout(() => {
//     fetch_contacts();
//   }, 2000);
// };

// let fetchContacts = () => {
//   let contacts = [];
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       contacts = data.map((iter) => {
//         return iter.phone;
//       });
//       console.log("contacts:::", contacts);
//       return contacts;
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// const ez = getUsers(fetchContacts);
// console.log("outside func ez:", ez);

// // --------------
// //2: .then syntax (Promise)
// // done by using the already returned promise from fetch()

// const promise = fetch("https://jsonplaceholder.typicode.com/users").then(
//   fetchContacts
// );

// Promise.all([promise])
//   .then((value) => {
//     // console.log(value);
//   })
//   .catch((err) => alert(err));

// // -------------
// // done by creating new promise

// let gettUsers = (fetch_contacts) => {
//   return new Promise((resolve, reject) => {
//     let ok = true;
//     if (ok) {
//       setTimeout(() => {
//         resolve(fetch_contacts());
//       }, 2000);
//     } else {
//       reject(console.log("Error Occured"));
//     }
//   });
// };

// gettUsers(fetchContacts);

// // // -------------------------------------------------------------
// // function getData() {
// //   fetch("https://jsonplaceholder.typicode.com/users")
// //     .then((response) => {
// //       return response.json();
// //     })
// //     .then((data) => {
// //       let contacts = [];
// //       for (let i = 0; i < data.length; i++) {
// //         contacts.push(data[i].phone);
// //         console.log(`phone of json obj with id ${data[i].id}:`);
// //         console.log(data[i].phone);
// //       }
// //       console.log(contacts);
// //       // let jsonObj = { ...data };
// //       // console.log(data);
// //     });
// //   // return jsonObj;
// // }
// // getData();
// // // const jsonObj = getData();
// // // console.log(jsonObj);
// // //-------------------------------------------------------------

// //-------------
// // 3: async/ await
// async function fetchData() {
//   const data = await fetch("https://jsonplaceholder.typicode.com/users");

//   const res = await data.json();
//   const contacts = res.map((iter) => {
//     return iter.phone;
//   });
//   console.log(contacts);
// }

// let a = fetchData();
// console.log("a:::", a);

// -----------------------------------------------------------------------------------

// Day 3:
// const express = require("express"); // q. why not working?
import express from "express";
const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

//fetch data from api

const fetchUsers = async () => {
  try {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const res = await data.json();
    return res;
  } catch (err) {
    console.log(err.message);
  }
};

// fetchUsers()
//   .then((val) => console.log(val))
//   .catch((err) => console.log(err));

app.get("/users", async (req, res) => {
  const fetchedUsers = await fetchUsers();
  if (fetchedUsers) {
    res.status(200).send({ fetchedUsers });
  } else {
  }
});

// --------practice:

// https://jsonplaceholder.typicode.com/photos

// const infoDetails = [
//   {
//     firstName: "john",
//     lastName: "doe",
//     age: 30,
//     hobbies: ["music", "movies", "sports"],
//     address: {
//       street: "50 B",
//       city: "Boston",
//       state: "MA",
//     },
//     done: true,
//   },
//   {
//     firstName: "dohn",
//     lastName: "joe",
//     age: 3,
//     hobbies: ["movies", "sports"],
//     address: {
//       street: "05 Y",
//       city: "NY",
//       state: "NY",
//     },
//     done: false,
//   },
// ];

// //---------- forEach/map/filter (High Order Array Methods) -=> dont work on object literals
// //(High Order Array Methods) take in a function as parameter (which is a callback => args of this func can be multiple but first one is variable for each item)
// //forEach -> loops through the array
// infoDetails.forEach(function (infoDetail) {
//   console.log("forEach:");
//   console.log(infoDetail.hobbies);
// });

// // map -> it returns an array
// const infoDetailsMapped = infoDetails.map(function (infoDetail) {
//   console.log("map:");
//   return infoDetail.hobbies;
// });
// console.log(infoDetailsMapped);

// //filter -> creates array based on a condition
// const infoDetailsFiltered = infoDetails.filter(function (infoDetail) {
//   console.log("filter:");
//   return infoDetail.done === true;
// });
// console.log(infoDetailsFiltered);

// //combine filter and map:
// const infoDetailsFilterMapped = infoDetails
//   .filter(function (infoDetail) {
//     console.log("filter:");
//     return infoDetail.done === true;
//   })
//   .map((mapper) => {
//     console.log("filter(map)");
//     return mapper.firstName;
//   });

// console.log(infoDetailsFilterMapped);

// //arrow func:
// function one() {
//   console.log("step 1");
// }
// let one = () => {
//   console.log("Step 1");
// };
// one();
