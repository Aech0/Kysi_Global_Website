'use strict';

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [overlay, navCloseBtn, navOpenBtn];

/**
 * close navbar when click on any navbar link
 */

for (let i = 0; i < navbarLinks.length; i++) { navElemArr.push(navbarLinks[i]); }

/**
 * addd event on all elements for toggling navbar
 */

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    elemToggleFunc(navbar);
    elemToggleFunc(overlay);
  });
}



/**
 * header active state
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 400 ? header.classList.add("active")
    : header.classList.remove("active");
}); 


// carousel
  $(document).ready(function() {
      // Set the interval for the carousel slides inside each card
    $('.carousel-card').carousel({
      interval: 3000 // 1 second
    });
  });


// our partners
// JavaScript for sliding animation
const logoContainer = document.querySelector(".partners-container");
const partnerLogos = document.querySelectorAll(".partner-logo");
const logoCount = partnerLogos.length;
const logoWidth = partnerLogos[0].clientWidth;
const totalLogosWidth = logoCount * logoWidth;

logoContainer.style.width = totalLogosWidth * 2 + "px";

let scrollAmount = 0;
const speed = 0.4; // Adjust the scrolling speed as needed

function slideLogos() {
  scrollAmount += speed;
  if (scrollAmount >= totalLogosWidth) {
    scrollAmount = 0;
  }
  logoContainer.style.transform = `translateX(-${scrollAmount}px)`;
  requestAnimationFrame(slideLogos);
}

slideLogos();