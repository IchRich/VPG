// Slider dots functionality
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('productSlider');
    const dots = document.querySelectorAll('.slider-dot');

    if (!slider || !dots.length) return;

    // Update active dot on scroll
    slider.addEventListener('scroll', function() {
        const slideWidth = slider.querySelector('.product__image').offsetWidth;
        const gap = parseFloat(getComputedStyle(slider).gap) || 0;
        const currentSlide = Math.round(slider.scrollLeft / (slideWidth + gap));

        dots.forEach((dot, index) => {
            if (index === currentSlide) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    });

    // Click on dot to scroll to slide
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            const slideWidth = slider.querySelector('.product__image').offsetWidth;
            const gap = parseFloat(getComputedStyle(slider).gap) || 0;
            slider.scrollTo({
                left: (slideWidth + gap) * index,
                behavior: 'smooth'
            });
        });
    });

    // Accordion functionality
    const accordionHeaders = document.querySelectorAll('.accordion__header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const accordionItem = this.parentElement;
            const isActive = accordionItem.classList.contains('active');

            // Close all accordions
            document.querySelectorAll('.accordion__item').forEach(item => {
                item.classList.remove('active');
            });

            // Open clicked accordion if it wasn't active
            if (!isActive) {
                accordionItem.classList.add('active');
            }
        });
    });
});
