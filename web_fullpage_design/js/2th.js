var clientHight = window.innerHeight;
var index = 0;
var flag = true;
var box = document.querySelector('.box');
var itemLen = document.querySelectorAll('.item').length;

const slide = function(index) {
  box.style.transform = 'translateY(' + (- index * clientHight) + 'px)';
}

window.addEventListener('mousewheel', e => {
  if (flag) {
    flag = false;
    if (e.wheelDelta < 0) {
      if (index === itemLen - 1) {
        index -= 1;
        flag = true;
      }
      index++;
    } else {
      if (index === 0) {
        index = 1;
        flag = true;
      } 
      index--;
    }
    slide(index);
  }
});

box.addEventListener('transitionend', e => {
  flag = true;
})