function x(y) {
  console.log('X');
  y();
}
function y() {
  console.log('Y');
}
x(y);
//--------------------------------------------------------------------

// function close() {
//   let count = 0;
//   document.getElementById('my-btn').addEventListener('click', function () {
//     console.log('clicked', ++count, 'times');
//   });
// }
// close();

//----------------------------------------------------------------------
(function close() {
  let count = 0;
  document.getElementById('my-btn').addEventListener('click', function () {
    console.log('clicked', ++count, 'times');
  });
})();
