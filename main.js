// const burger = document.querySelector('#burger');
// const menu = document.querySelector('#menu');

// burger.addEventListener('click', () => {
//     menu.classList.toggle('disp')

// });

const navBtn = document.querySelector('.nav__toggle');
const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('.nav');

navBtn.onclick = function(){
    nav.classList.toggle('nav--mobile');
    menuIcon.classList.toggle('menu-icon-active');
};

