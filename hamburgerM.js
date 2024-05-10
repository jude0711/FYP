document.addEventListener("DOMContentLoaded", function() {
    const menu = document.querySelector('.hamburger-menu');
    const navLinks = document.getElementById('navLinks');

    menu.addEventListener('click', function() {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });
});
