// a(); prints a called
// x(); x is not a function; TypeError

//----------------------------------------------------------

// Function Statements aka Function Declarations
// function a() {
//   console.log('a called');
// }

//----------------------------------------------------------

//Function Expression
// var x = function () {
//   console.log('x called');
// };

//----------------------------------------------------------

// a();
// x();

//----------------------------------------------------------

//Anonymous Functions : Does not have their own identity
// and they are used where function are used as values that
// means they are used to assign a variable;

//----------------------------------------------------------

//Named function Expression
// var y = function xyz() {
//   console.log(xyz);
//   //xyz is a local variable
// };
// y();
// xyz(); xyz is not defined; ReferenceError

//----------------------------------------------------------

// function add(p, q, r) {
//   //p,q,r are parameters
//   console.log(p + q + r);
// }
// add(60, 5, 4); //60,5,4 are arguments

//----------------------------------------------------------

//the ability to use functions as values is called first
// class function and can be passed as arguments, can be
// returned as function from other function
// var func = function abc(param1) {
//   return function def() {
//     console.log('function is called');
//   };
// };
// console.log(func());

//----------------------------------------------------------

//Arrow function
// var b = function () {
//   console.log('b called');
// };
// b();

//----------------------------------------------------------
