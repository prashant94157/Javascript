//sum(1)(2)(3)(4)(5)() = 15

// var sum = function (x) {
//   return function (y) {
//     if (y) return sum(x + y);
//     return x;
//   };
// };

var sum = (x) => (y) => y ? sum(x + y) : x;
var add = sum(1)(2)(3)(4)(5)();
console.log(add);
