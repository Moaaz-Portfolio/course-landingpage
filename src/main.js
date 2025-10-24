import "./style.scss";
// smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

const menuToggle = document.querySelector(".header__toggle");
const nav = document.querySelector(".header__nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("header__nav--open");
});
// Close the menu when a link is clicked (for better UX on mobile)
document.querySelectorAll(".header__nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("header__nav--open");
  });
});