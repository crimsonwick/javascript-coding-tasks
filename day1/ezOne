// Day 1:
// question 1

// check if incoming object has another array

let countSubarrays = (x) => {
  let count = 0;
  for (let i = 0; i < x.length; i++) {
    x.forEach((element) => {
      count += element.length;
    });
  }
  return count;
};

const twoDeeArr = [
  [
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
    [[1], [[2], [3]], [4]],
  ],
];
console.log(typeof twoDeeArr);
let res = countSubarrays(twoDeeArr);
console.log(res);

count = countSubarrays(twoDeeArr);
console.log(count);

// //question 2
function capitalizeMe(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
  }
}

const names = ["mavis", "senaida", "letty"];
console.log(names);
capitalizeMe(names);
console.log(names);

//question 3
function removeDuplicates(arr) {
  const uniqueArr = arr.filter((item, pos) => {
    return arr.indexOf(item) === pos;
  });
  return uniqueArr;
}

const arr = removeDuplicates(["John", 1, 1, "John", "Doe"]);
console.log(arr);

// //question 5
function intersectionUnion(arrOne, arrTwo) {
  const result = [];
  const intersection = arrOne.filter((value) => arrTwo.includes(value));
  result.push(intersection);
  const union = [...new Set([...arrOne, ...arrTwo])];
  result.push(union);
  return result;
}

const r = intersectionUnion([1, 2, 3, 7], [2, 3]);
console.log("result:");
console.log(r);

// //question 4
function objectToArray(obj) {
  res = [];
  const objKeys = Object.keys(obj);
  const objVals = Object.values(obj);

  for (let i = 0; i < objKeys.length; i++) {
    resObj = [];
    resObj.push(objKeys[i]);
    resObj.push(objVals[i]);
    res.push(resObj);
  }
  return res;
}

const ans = objectToArray({ fName: "Tom", lName: "Cruise", Age: 52 });
console.log(ans);
