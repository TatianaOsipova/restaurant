// const burger = document.querySelector('#burger');
// const menu = document.querySelector('#menu');

// burger.addEventListener('click', () => {
//     menu.classList.toggle('disp');
// });

const menuBtn = document.querySelector('.menu__btn');
const menuMobile = document.querySelector('.nav__list-header');

menuBtn.addEventListener('click', () => {
  menuMobile.classList.toggle('menu--open');
});


