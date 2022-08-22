//version 1
// let radius = [1, 2, 3, 5];
// let area = function (radius) {
//   return Math.PI * radius * radius;
// };
// let diameter = function (radius) {
//   return 2 * radius;
// };
// let circumference = function (radius) {
//   return 2 * Math.PI * radius;
// };

// let calculate = function (radius) {
//   let calculatedArea = [],
//     calculatedDiameter = [],
//     calculatedCircumference = [];
//   radius.forEach((rad) => {
//     // console.log(rad);
//     calculatedArea.push(area(rad));
//     calculatedDiameter.push(diameter(rad));
//     calculatedCircumference.push(circumference(rad));
//   });
//   console.log(calculatedArea, calculatedCircumference, calculatedDiameter);
// };

// calculate(radius);

//------------------------------------------------------------------------------

//version2
// let radius = [1, 2, 3, 5];
// let area = function (radius) {
//   return Math.PI * radius * radius;
// };
// let diameter = function (radius) {
//   return 2 * radius;
// };
// let circumference = function (radius) {
//   return 2 * Math.PI * radius;
// };

// let calculate = function (radius, logic) {
//   let output = [];
//   radius.forEach((rad) => {
//     output.push(logic(rad));
//   });
//   return output;
// };
// console.log(radius.map(area));
// console.log(calculate(radius, area));
// console.log(calculate(radius, diameter));
// console.log(calculate(radius, circumference));

//-------------------------------------------------------------------------------
