/* Toggle responsive navbar visibility */
const header = document.getElementById("header");
const navbar = document.getElementById("topnav");
const main = document.getElementById("main");
const hamburgerIcon = document.getElementById("hamburger-icon");
const xIcon = document.getElementById("x-icon");
const media = window.matchMedia("(width <= 768px)");

media.addEventListener("change", (e) => updateNavbar(e));

const updateNavbar = (e) => {
  const isMobile = e.matches;
  if (isMobile) {
    navbar.setAttribute("inert", "");
    closeResponsiveMenu();
  } else {
    // desktop device
    navbar.removeAttribute("inert");
  }
};

const openResponsiveMenu = () => {
  navbar.classList.remove("hide");
  xIcon.classList.remove("hide");
  hamburgerIcon.classList.add("hide");
  header.classList.add("responsive-header-height");
  main.classList.add("responsive-menu-margin");
  navbar.removeAttribute("inert");
};

const closeResponsiveMenu = () => {
  navbar.classList.add("hide");
  xIcon.classList.add("hide");
  hamburgerIcon.classList.remove("hide");
  header.classList.remove("responsive-header-height");
  main.classList.remove("responsive-menu-margin");
  navbar.setAttribute("inert", "");
};

// Bookmark Links
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    closeResponsiveMenu()
  });
});