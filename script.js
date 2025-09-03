// Scroll progress indicator
window.onscroll = function() {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  document.getElementById("progressBar").style.width = scrolled + "%";
};

// Section animation on scroll
const sections = document.querySelectorAll('.section');
const listItems = document.querySelectorAll('.list li');
const skillCards = document.querySelectorAll('.skill-card');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => {
  observer.observe(section);
});

listItems.forEach((item, index) => {
  setTimeout(() => {
    observer.observe(item);
  }, index * 100);
});

skillCards.forEach((card, index) => {
  setTimeout(() => {
    card.classList.add('animate');
  }, index * 150);
});