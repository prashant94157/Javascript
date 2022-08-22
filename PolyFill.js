// let user = {
//   firstName: 'Prashant',
//   lastName: 'Maurya',
// };

// let printName = function (homeTown, city, state, country) {
//   console.log(
//     this.firstName +
//       ' ' +
//       this.lastName +
//       ' lives in ' +
//       homeTown +
//       ', ' +
//       city +
//       ', ' +
//       state +
//       ', ' +
//       country
//   );
// };

// let printMyName = printName.bind(user, 'Jankipuram', 'Lucknow');
// printMyName('Uttar Pradesh', 'India');

// Function.prototype.myBind = function (user, ...args1) {
//   let obj = this;
//   return function (...args2) {
//     obj.apply(user, [...args1, ...args2]);
//   };
// };

// let printMyName2 = printName.myBind(user, 'Jankipuram');
// printMyName2('Lucknow', 'Uttar Pradesh', 'India');
