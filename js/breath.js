---
layout: none
---

function fadeIn() {
  document.getElementById('my-breath-info-wrapper').style.opacity = "1";
}

function fadeAndGoHome() {
  document.getElementById('my-breath-info-wrapper').style.opacity = "0";
  setTimeout(function() {
    window.location.href = '{{ site.baseurl }}/';
  }, 1000);
}

window.onload = function() {
  setTimeout(fadeIn, 500);
  document.getElementById('my-home-button').addEventListener('click', fadeAndGoHome, false);
}
