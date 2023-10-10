const mobileMenu = document.querySelector(".hamburger-menu");

mobileMenu.addEventListener("click", toggleMenu);

function toggleMenu() {
  menu = document.querySelector(".nav-container");
  menu.classList.toggle("toggle-mobile");
}
