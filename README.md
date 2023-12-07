Write function to Count the Number of Arrays in an Array.  e.g. countSubarrays([[1, 2, 3], [1, 2, 3], [1, 2, 3]]) ➞ 3 countSubarrays([[1, 2, 3], [1, 2, 3], [1, 2, 3], [[1], [[2],[3]], [4]]]) ➞ 9 countSubarrays([1, 2, 3]) ➞ 0
Write function to Capitalize the Names (Create a function that takes an array of names and returns an array with the first letter capitalized.)  e.g. capitalizeMe(["mavis", "senaida", "letty"]) ➞ ["Mavis", "Senaida", "Letty"] capitalizeMe(["samuel", "MABELLE", "letitia", "meridith"]) ➞ ["Samuel", "Mabelle", "Letitia", "Meridith"] capitalizeMe(["Slyvia", "Kristal", "Sharilyn", "Calista"]) ➞ ["Slyvia", "Kristal", "Sharilyn", "Calista"]
Write function to Remove Duplicates from an Array  e.g. removeDuplicates([1, 0, 1, 0]) ➞ [1, 0] removeDuplicates(["The", "big", "cat"]) ➞ ["The", "big", "cat"] removeDuplicates(["John", "Taylor", "John"]) ➞ ["John", "Taylor"]
Write function to Convert Key, Values in an Object to Array (Write a function that converts an object into an array of keys and values.)  e.g objectToArray({   D: 1,   B: 2,   C: 3 }) ➞ [["D", 1], ["B", 2], ["C", 3]]
Write function to Union and Intersection of Arrays (Create a function that takes in two arrays and returns an intersection array and a union array.)  e.g intersectionUnion([1, 2, 3, 4, 4], [4, 5, 9]) ➞ [[4], [1, 2, 3, 4, 5, 9]] intersectionUnion([1, 2, 3], [4, 5, 6]) ➞ [[], [1, 2, 3, 4, 5, 6]] intersectionUnion([1, 1], [1, 1, 1, 1]) ➞ [[1], [1]]

1. Create simple ExpressJS based API.

External API source:
https://jsonplaceholder.typicode.com/users
https://jsonplaceholder.typicode.com/posts
https://jsonplaceholder.typicode.com/comments
https://jsonplaceholder.typicode.com/posts/:id/comments

Expected API end points:
http://localhost:4000/users
http://localhost:4000/comments
http://localhost:4000/posts/:id/comments

External API source:
https://jsonplaceholder.typicode.com/users
https://jsonplaceholder.typicode.com/posts
https://jsonplaceholder.typicode.com/comments
https://jsonplaceholder.typicode.com/posts/:id/comments

Expected API end points:
http://localhost:4000/users
http://localhost:4000/comments
http://localhost:4000/posts/:id/comments

2. Create API end points to return JSON data from external API (https://jsonplaceholder.typicode.com/photos)
Modify the structure of the output response by embedding comments inside the relevant
posts or by embedding posts inside the users.

Implement sorting and delete.

1. Write API end point to sort posts by title or body or both.
2. Write API end point to delete posts of a specific user. Return all other posts except the deleted ones.

Expected end point and response:

endpoint: http://localhost:4000/posts?sort=1&title=first&body=details
output:  Added screenshot of the output (5)
https://drive.google.com/open?id=1no1CQ8TWArKkMEQ1WA2x7lsC6WT6V0Tp

endpoint: http://localhost:4000/posts?user=3
output: Added screenshot of the output (6)
https://drive.google.com/open?id=1O1CnfQNN5cXPMdguVp9-QkOvqGq_yBr3

Learning Resouces:
https://www.tutorialspoint.com/es6/es6_quick_guide.htm
https://blog.risingstack.com/javascript-clean-coding-best-practices-node-js-at-scale/
