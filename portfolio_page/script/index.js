let navBar = document.querySelector("#navId");
let navList = document.querySelector(".navList");
let menuIcon = document.querySelector(".menu");
menuIcon.addEventListener("click", function () {
  navBar.classList.toggle("collapsible--expanded");
});
