let btn = document.getElementById("btn");

btn.onclick = function () {
  "use strict";
  window.scrollTo(500, 250);
  console.log("Window x " + window.scrollX);
  console.log("Window  y " + window.scrollY);
};
