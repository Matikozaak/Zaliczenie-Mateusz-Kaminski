// Rozwijanie menu "Przegladaj" na mobile
const btn = document.querySelector('.navbar__mobile-toggle');
const menu = document.querySelector('.navbar__list');

btn.addEventListener('click', () => {
  menu.classList.toggle('is-open');
});
