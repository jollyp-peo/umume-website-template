const navbar = document.getElementById('navbar');
const toggle = document.querySelector('.toggle');

toggle.addEventListener('click', () => {
  toggle.classList.toggle('show');
  navbar.style.top = navbar.style.top === '100%' ? '-1000px' : '100%';
});

const cards = document.querySelectorAll('.card-copy'); // select all card text

cards.forEach((color) => {  // loop through each card p

  color.addEventListener('click', ()=> {

    const colorCode = color.textContent;

    navigator.clipboard.writeText(colorCode).then(() => {  // copy text

      color.textContent = "Copied"
      color.style.color = 'blue';

      setTimeout(() => {
        color.textContent = colorCode; // change text back from "copied" to the original text.
        color.style.color = "#fff";
      }, 1000);
    }).catch((err) => {
      console.log('Enable to copy', err);
    });
  });
});

// AOS Animation
document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 1000, // Animation duration (1s)
    once: false, // Animation runs once per scroll
    mirror: true, // Replays animation when scrolling back up
  });
});