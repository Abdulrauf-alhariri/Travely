// Definging the rules for the nav bar on phone
let menu = document.querySelector(".toggle-menu");
let navBar = document.querySelector(".collapsible");

// If the menu icon is clicked we will display the links
menu.onclick = function () {
  "use strict";

  if (navBar.classList.contains("collapsible--expanded")) {
    navBar.classList.remove("collapsible--expanded");
  } else {
    navBar.classList.add("collapsible--expanded");

    // Removing the bottom of the border
  }
};
