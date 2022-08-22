//variation 1
// function close() {
//   var a = 20;
//   return function b() {
//     console.log(a);
//   };
// }

// var x = close();
// console.log(x);
// x();

//variation 2
// function close2() {
//   var a2 = 20;
//   function b2() {
//     console.log(a2);
//   }
//   return b2;
// }

// var x2 = close2();
// console.log(x2);
// x2();

//variation 3

// function close3() {
//   var a3 = 20;
//   function b3() {
//     console.log(a3);
//   }
//   a3 = 50;
//   return b3;
// }

// var x3 = close3();
// console.log(x3);
// x3();

//variation 4
// function outer(a) {
//   var b = 20;
//   function inner(c) {
//     console.log(a, b, c);
//   }
//   return inner;
// }

// outer(10)(30);

//variation 5
// function outer(a) {
//   function inner(c) {
//     console.log(a, b, c);
//   }
//   var b = 20;
//   return inner;
// }

// outer(10)(30);

//variation 6
// function outer(a) {
//   function inner(c) {
//     console.log(a, b, c);
//   }
//   let b = 20;
//   return inner;
// }

// outer(10)(30);

// variation 7
// function outest(a) {
//   var b = 20;
//   function outer(c) {
//     function inner(e) {
//       console.log(a, b, c, d, e);
//     }
//     var d = 40;
//     return inner;
//   }
//   return outer;
// }

// outest(10)(30)(50);

//variation 8
// function outest(a) {
//   var b = 20;
//   function outer(c) {
//     let d = 40;
//     function inner(e) {
//       console.log(a, b, c, d, e);
//     }
//     return inner;
//   }
//   return outer;
// }
// let d = 5;
// outest(10)(30)(50);

//data hiding and encapsulation
// function counter() {
//   var count = 0;
//   this.increase = function () {
//     count++;
//   };
//   this.print = function () {
//     console.log(count);
//   };
//   this.decrease = function () {
//     count--;
//   };
// }

// var counter1 = new counter();
// counter1.increase();
// counter1.print();
// counter1.increase();
// counter1.print();
// counter1.increase();
// counter1.print();
// counter1.increase();
// counter1.print();
// counter1.decrease();
// counter1.print();
