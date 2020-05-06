---
layout: none
---

let allButtons;

function buttonMouseover() {
  document.getElementById('my-center-text').innerHTML = this.getAttribute('data-text');
}

function buttonMouseout() {
  document.getElementById('my-center-text').innerHTML = '';
}

function slugify(str) {
  str = str.replace(/^\s+|\s+$/g, '');
  str = str.toLowerCase();

  var from = "àáãäâèéëêìíïîòóõöôùúüûñç·/_,:;";
  var to   = "aaaaaeeeeiiiiooooouuuunc------";

  for (var i=0, l=from.length ; i<l ; i++) {
    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }

  str = str.replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-').replace(/-+/g, '-');

  return str;
}

function makeButtonClickAgain() {
  allButtons = document.getElementsByClassName('clickButton');

  for(let i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener('mousedown', function() {
      for(let j = 0; j < allButtons.length; j++) {
        allButtons[j].removeEventListener('mouseover', buttonMouseover);
        allButtons[j].removeEventListener('mouseout', buttonMouseout);
      }

      document.getElementById('my-calendar-svg').classList.add('calendar-svg-hide');

      setTimeout(function() {
        window.location.href = '{{ site.baseurl }}/' + slugify(this.getAttribute('data-text')) + '/';
      }.bind(this), 2100);

    }, false);

    allButtons[i].addEventListener('mouseover', buttonMouseover, false);
    allButtons[i].addEventListener('mouseout', buttonMouseout, false);
  }
}

window.onload = function() {
  makeButtonClickAgain();
}
