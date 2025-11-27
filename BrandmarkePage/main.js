document.addEventListener('DOMContentLoaded', function () {
    const burgerOpen = document.getElementById('burger-open');
    const burgerClose = document.getElementById('burger-close');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuOverlay = document.getElementById('menu-overlay');

    if (burgerOpen && burgerClose && mobileMenu && menuOverlay) {
        burgerOpen.onclick = function() {
            mobileMenu.classList.add('active');
            menuOverlay.style.display = 'block';
        };
        burgerClose.onclick = function() {
            mobileMenu.classList.remove('active');
            menuOverlay.style.display = 'none';
        };
        menuOverlay.onclick = function() {
            mobileMenu.classList.remove('active');
            menuOverlay.style.display = 'none';
        };
    }
});
