// Inject current year to footer
const rightNow = new Date();
const year = rightNow.getFullYear();
const yearEl = document.querySelector('#year');
if (yearEl) {
  yearEl.textContent = year;
}

// Hamburger menu toggle
function toggleMenu() {
  const nav = document.querySelector("nav");
  const hamb = document.querySelector("#hamb");
  const icon = hamb.querySelector(".icon");

  nav.classList.toggle("open");
  hamb.classList.toggle("open");

  // Toggle icon symbol between ☰ and ✕
  if (hamb.classList.contains("open")) {
    icon.textContent = "✕";
  } else {
    icon.textContent = "☰";
  }
}

document.querySelector("#hamb").addEventListener("click", toggleMenu);