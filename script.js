/* =========================
   SUPPRIMER L'ANCRE AU RECHARGEMENT
========================== */
history.scrollRestoration = "manual";
window.scrollTo(0, 0);

if (window.location.hash) {
  history.replaceState(null, null, window.location.pathname);
}

/* =========================
   ANIMATIONS AU SCROLL
========================== */
const revealEls = document.querySelectorAll('.reveal');

const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => io.observe(el));

/* =========================
   FONCTION DES FLÈCHES DU CARROUSEL
========================== */
function scrollCarousel(carouselId, direction) {

  const carousel = document.getElementById(carouselId);
  const scrollAmount = 380;
  const maxScroll = carousel.scrollWidth - carousel.clientWidth;

  if (direction === 1) {

    if (carousel.scrollLeft >= maxScroll - 5) {
      carousel.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }

  } else {

    if (carousel.scrollLeft <= 0) {
      carousel.scrollTo({ left: maxScroll, behavior: "smooth" });
    } else {
      carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }

  }
}

/* =========================
   MENU BURGER MOBILE
========================== */
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

// Ferme le menu quand on clique un lien
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    burger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

