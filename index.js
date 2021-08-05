let btn = document.getElementById("btn");
let show = 0;
let time = setInterval(function () {
  console.log(show);
  show++;
}, 1000);
btn.onclick = function () {
  "use strict";
  clearInterval(time);
};
