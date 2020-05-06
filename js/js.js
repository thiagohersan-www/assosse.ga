---
layout: none
---

let allButtons;

function buttonMouseover() {
  document.getElementById('my-center-text').innerHTML = this.getAttribute('data-text');
}

function makeButtonClickAgain() {
  allButtons = document.getElementsByClassName('clickButton');

  for(let i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener('mousedown', function() {
      for(let j = 0; j < allButtons.length; j++) {
        allButtons[j].removeEventListener('mouseover', buttonMouseover);
      }
      document.getElementById('my-calendar-svg').classList.add('calendar-svg-hide');
    }, false);

    allButtons[i].addEventListener('mouseover', buttonMouseover, false);
  }
}

window.onload = function() {
  makeButtonClickAgain();
}
