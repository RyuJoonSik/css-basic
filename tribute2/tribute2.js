window.addEventListener('scroll', function(){
  var scollLength = parseInt(window.pageYOffset);
  console.log(scollLength);
  document.querySelector('.background').style.transform = 'translateY(' + (scollLength) + 'px)';
})