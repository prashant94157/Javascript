// for (var i = 1; i <= 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, i * 1000);
// }
//O/P
// 6
// 6
// 6
// 6
// 6

// for (let i = 1; i <= 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, i * 1000);
// }
//O/P
// 1
// 2
// 3
// 4
// 5

//Closures
// for (var i = 1; i <= 5; i++) {
//   function close(x) {
//     return setTimeout(function () {
//       console.log(x);
//     }, x * 1000);
//   }
//   close(i);
// }
