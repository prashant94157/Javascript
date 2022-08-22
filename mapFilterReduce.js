let arr = [1, 7, 5, 9, 4, 6, 11];

//----------------------------------------------------------------------------

//map function
//version 1
// function double(x) {
//   return x * 2;
// }
// let output = arr.map(double);
//version 2
// let output = arr.map(function triple(x) {
//   return x * 3;
// });
// console.log(output);
//version 3
// let output = arr.map((x) => x * 2);
// console.log(output);

//----------------------------------------------------------------------------

//filter
//version 1
// let even = arr.filter((x) => x % 2 === 0);
// console.log(even);
// let greaterThan4 = arr.filter((x) => x > 4);
// console.log(greaterThan4);

//----------------------------------------------------------------------------

//reduce function
//first parameter is reduce is callBack function and other initial value of acc
//acc is used to store value and curr store the value of array arr

//version 1
// let sum = arr.reduce((acc, curr) => acc + curr, 0);
// console.log(sum);
// let max = arr.reduce((acc, curr) => Math.max(acc, curr), 0);
// console.log(max);
// let squareSum = arr.reduce((acc, curr) => acc + curr * curr, 0);
// console.log(squareSum);

//version 2
// let minValue = arr.reduce((min, curr) => {
//   if (min > curr) min = curr;
//   return min;
// }, 10000);
// console.log(minValue);

//--------------------------------------------------------------------------------

var users = [
  { firstName: 'akshay', lastName: 'saini', age: 26 },
  { firstName: 'donald', lastName: 'trump', age: 75 },
  { firstName: 'elon', lastName: 'musk', age: 50 },
  { firstName: 'deep', lastName: 'singh', age: 26 },
];

//O/P {26 : 2, 50 : 1, 75 : 1}
// var output = users.reduce((acc, curr) => {
//   if (acc[curr.age]) {
//     acc[curr.age]++;
//   } else acc[curr.age] = 1;
//   return acc;
// }, {});
// console.log(output);

//O/P   ['akshay saini', 'donald trump', 'elon musk', 'deep singh']
// var username = users.map((user) => user.firstName + ' ' + user.lastName);
// console.log(username);

//firstname of people whose age is less than 30
//O/P ['akshay', 'deep']
//version 1 pretty basic
// var firstNames = users
//   .filter((user) => user.age < 30)
//   .map((user) => user.firstName);
//version 2
var firstNames = users.reduce((acc, curr) => {
  if (curr.age < 30) acc.push(curr.firstName);
  return acc;
}, []);
console.log(firstNames);
