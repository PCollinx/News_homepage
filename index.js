const navbar = document.querySelector('nav');
const openMenu = document.getElementById('menu-button');
const closeMenu = document.getElementById('menu-close');
const overlay = document.getElementById('overlay');

openMenu.addEventListener('click', () => {
    navbar.classList.add('open');
    overlay.classList.add('active');
});

closeMenu.addEventListener('click', () => {
    navbar.classList.remove('open');
    overlay.classList.remove('active');
});

overlay.addEventListener('click', () => {
    navbar.classList.remove('open')
    overlay.classList.remove('active');
})