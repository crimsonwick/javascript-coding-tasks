# JS Coding Tasks + API CRUD Basics
# Training during my first coding job
# July 2022.

**Count the Number of Arrays in an Array**  
Write a function to count the number of arrays in a given array.
countSubarrays([[1, 2, 3], [1, 2, 3], [1, 2, 3]]) ➞ 3
countSubarrays([[1, 2, 3], [1, 2, 3], [1, 2, 3], [[1], [[2],[3]], [4]]]) ➞ 9
countSubarrays([1, 2, 3]) ➞ 0

**Capitalize the Names**  
Create a function that takes an array of names and returns an array with the first letter capitalized.
capitalizeMe(["mavis", "senaida", "letty"]) ➞ ["Mavis", "Senaida", "Letty"]
capitalizeMe(["samuel", "MABELLE", "letitia", "meridith"]) ➞ ["Samuel", "Mabelle", "Letitia", "Meridith"]
capitalizeMe(["Slyvia", "Kristal", "Sharilyn", "Calista"]) ➞ ["Slyvia", "Kristal", "Sharilyn", "Calista"]

**Remove Duplicates from an Array**  
Write a function to remove duplicates from an array.  
removeDuplicates([1, 0, 1, 0]) ➞ [1, 0]  
removeDuplicates(["The", "big", "cat"]) ➞ ["The", "big", "cat"]  
removeDuplicates(["John", "Taylor", "John"]) ➞ ["John", "Taylor"]  

**Convert Key, Values in an Object to Array**  
Write a function that converts an object into an array of keys and values.  
objectToArray({ D: 1, B: 2, C: 3 }) ➞ [["D", 1], ["B", 2], ["C", 3]]  

**Union and Intersection of Arrays**  
Create a function that takes in two arrays and returns an intersection array and a union array.  
intersectionUnion([1, 2, 3, 4, 4], [4, 5, 9]) ➞ [[4], [1, 2, 3, 4, 5, 9]]  
intersectionUnion([1, 2, 3], [4, 5, 6]) ➞ [[], [1, 2, 3, 4, 5, 6]]  
intersectionUnion([1, 1], [1, 1, 1, 1]) ➞ [[1], [1]]  

**ExpressJS based API**  
Create a simple ExpressJS-based API with the following endpoints:    

http://localhost:4000/users  
http://localhost:4000/comments  
http://localhost:4000/posts/:id/comments  

External API source:  
https://jsonplaceholder.typicode.com/users  
https://jsonplaceholder.typicode.com/posts  
https://jsonplaceholder.typicode.com/comments  
https://jsonplaceholder.typicode.com/posts/:id/comments  

Additional API Endpoints  
Create API endpoints to return JSON data from the external API (https://jsonplaceholder.typicode.com/photos) and modify the structure of the output response by embedding comments inside the relevant posts or by embedding posts inside the users.

Sorting and Delete  
Implement sorting and delete functionalities:

Write an API endpoint to sort posts by title or body or both.  
Write an API endpoint to delete posts of a specific user. Return all other posts except the deleted ones.  
Expected Endpoints and Responses:  
Sorting:

Endpoint: http://localhost:4000/posts?sort=1&title=first&body=details  
Output: Link to Screenshot  
Delete Posts:

Endpoint: http://localhost:4000/posts?user=3  
Output: Link to Screenshot  

**Learning Resources**  
[ES6 Quick Guide  ](https://www.tutorialspoint.com/es6/es6_quick_guide.htm)
[JavaScript Clean Coding Best Practices - Node.js at Scale  ](https://blog.risingstack.com/javascript-clean-coding-best-practices-node-js-at-scale/)https://blog.risingstack.com/javascript-clean-coding-best-practices-node-js-at-scale/
