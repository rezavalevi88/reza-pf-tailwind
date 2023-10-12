//  Navbar Fixed
windows.onscroll = function() {
const header = document.querySelector('header');
const FixedNav = header.offsetTop;

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});