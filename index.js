//method 1 : using bind function
// let multiply = function (x, y) {
//   console.log(x * y);
// };

// let multiplyBy2 = multiply.bind(this, 2);
// multiplyBy2(5);

// let multiplyBy3 = multiply.bind(this,3);
// multiplyBy3(5);

//variation 1
// let multiplyBy2 = multiply.bind(this,2,3); //prints 6 because x=2 and y=3
// multiplyBy2(5);

//variation 2
// let multiplyBy3 = multiply.bind(this); //prints 15 because x = 3 and y = 5
// multiplyBy3(3, 5);

//----------------------------------------------

//method 2 : using closures
// let multiply = function (x) {
//   return function (y) {
//     console.log(x * y);
//   };
// };

// let multiplyBy2 = multiply(2);
// multiplyBy2(5);
