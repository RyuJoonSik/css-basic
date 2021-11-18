// Parallax effect
// Adapted from @ilonacodes article ->  https://link.medium.com/7fFiON6Q1X

// Update : added throttle to increase performance
window.addEventListener('scroll', parallax);

// function throttle(fn, wait) {
//   var time = Date.now();
//   console.log(time + ':1');
//   return function () {
//     if ((time + wait - Date.now()) < 0) {
//       fn();
//       time = Date.now();
//       console.log(time + '2');
// }
//   }
// };

function parallax() {
  // console.log('parallax');
  var scrolled = window.pageYOffset;
  // console.log(scrolled);
  var parallax = document.querySelector(".parallax");
  // You can adjust the 0.4 to change the speed
  var coords = (scrolled * 0.4) + 'px'
  console.log(coords);
  parallax.style.transform = 'translateY(' + coords + ')';
};