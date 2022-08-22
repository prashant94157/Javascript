//call function
//With the call() method, you can write a method that can be used on different objects.
//version 1
// let user1 = {
//   firstName: 'Prashant',
//   lastName: 'Maurya',
//   printFullName: function () {
//     console.log(this.firstName + ' ' + this.lastName);
//   },
// };

// user1.printFullName();

// let user2 = {
//   firstName: 'Sumit',
//   lastName: 'Kumar',
// };

// //function borrowing
// user1.printFullName.call(user2);

//version 2
// let user1 = {
//   firstName: 'Prashant',
//   lastName: 'Maurya',
// };

// let printFullName = function () {
//   console.log(this.firstName + ' ' + this.lastName);
// };

// printFullName.call(user1);

// let user2 = {
//   firstName: 'Sumit',
//   lastName: 'Kumar',
// };

// // function borrowing
// printFullName.call(user2);

//version 3
// let user1 = {
//   firstName: 'Prashant',
//   lastName: 'Maurya',
// };

// let printFullName = function(homeTown, city, state, country) {
//   console.log(this.firstName + ' ' + this.lastName + ' lives in ' + homeTown + ', ' + city + ', ' + state + ', ' + country);
// };

// printFullName.call(user1, 'Jankipuram', 'Lucknow', 'Uttar Pradesh', 'India');

// let user2 = {
//   firstName: 'Sumit',
//   lastName: 'Kumar',
// };

// function borrowing
// printFullName.call(user2, 'Charbagh', 'Lucknow', 'Uttar Pradesh', 'India');

//-----------------------------------------------------------

//apply
//With the apply() method, you can write a method that can be used on different objects.
//it is different from call function is that how arguments are passed
// printFullName.apply(user1, ['Jankipuram', 'Lucknow', 'Uttar Pradesh', 'India']);

//------------------------------------------------------------

//The Difference Between call() and apply()
// The difference is:

// The call() method takes arguments separately.

// The apply() method takes arguments as an array.

// The apply() method is very handy if you want to use an array instead of an argument list.

//------------------------------------------------------------

//bind function
//With the bind() method, an object can borrow a method from another object.

// let myDetails = printFullName.bind(user1, 'Jankipuram', 'Lucknow', 'Uttar Pradesh', 'India');

// myDetails();

//------------------------------------------------------------
