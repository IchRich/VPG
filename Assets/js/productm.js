document.addEventListener('DOMContentLoaded', function() {
    const leftWrapper = document.querySelector('.product__left-wrapper');

    if (leftWrapper && window.innerWidth > 1024) {
        window.addEventListener('scroll', function() {
            const rect = leftWrapper.getBoundingClientRect();

            if (rect.top <= 20) {
                leftWrapper.classList.add('sticky-active');
            } else {
                leftWrapper.classList.remove('sticky-active');
            }
        });
    }
});