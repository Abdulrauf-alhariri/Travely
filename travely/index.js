const collapsible = document.querySelector(".collapsible");
const hamburger = document.querySelector(".nav__toggler");

hamburger.addEventListener("click", showContetn);

function showContetn() {
  collapsible.classList.toggle("collapsible--expanded");
}
