---
layout: none
---

let mButton;
function makeButtonClickAgain() {
  console.log('from MBCA');

  const allButtons = document.getElementsByClassName('clickButton');
  for(let i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener('mousedown', function() {
      console.log(this.getAttribute('data-text'));
    }, false);

    allButtons[i].addEventListener('mouseover', function() {
      document.getElementById('my-center-text').innerHTML = this.getAttribute('data-text');
    }, false);
  }
}

window.onload = function() {
  makeButtonClickAgain();
}
