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
  navbar.classList.add("show");
  xIcon.classList.add("show");
  hamburgerIcon.classList.add("hide");
  header.classList.add("responsive-header-height");
  main.classList.add("responsive-menu-margin");
  navbar.removeAttribute("inert");
};

const closeResponsiveMenu = () => {
  navbar.classList.remove("show");
  xIcon.classList.remove("show");
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


// web3forms custom subject
// const form = document.getElementById('form');
// const result = document.getElementById('result');

// form.addEventListener('submit', function(e) {
//     e.preventDefault();
    
//     const formData = new FormData(form);
    
//     // Get the name input value
//     const name = formData.get('name');

//     // Create a custom subject
//     const subject = `${name} sent a message from website`;
    
//     // Append the custom subject to the form data
//     formData.append('subject', subject);
    
//     const object = Object.fromEntries(formData);
//     const json = JSON.stringify(object);
    
//     result.innerHTML = "Please wait...";

//     fetch('https://api.web3forms.com/submit', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json'
//         },
//         body: json
//     })
//     .then(async (response) => {
//         let json = await response.json();
//         if (response.status == 200) {
//             result.innerHTML = json.message;
//         } else {
//             console.log(response);
//             result.innerHTML = json.message;
//         }
//     })
//     .catch(error => {
//         console.log(error);
//         result.innerHTML = "Something went wrong!";
//     })
//     .then(function() {
//         form.reset();
//         setTimeout(() => {
//             result.style.display = "none";
//         }, 3000);
//     });
// });