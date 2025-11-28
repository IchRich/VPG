/**
 * Producers Brand Switcher
 * Переключение логотипов производителей при клике на кнопку
 */

document.addEventListener('DOMContentLoaded', function() {
    initProducersSwitcher();
});

function initProducersSwitcher() {
    const producerButtons = document.querySelectorAll('.producer_btn');
    const producersImage = document.querySelector('.producers_image');

    if (!producerButtons.length || !producersImage) {
        console.warn('Producers elements not found');
        return;
    }

    producerButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            switchProducer(this, producersImage);
        });
    });
}

function switchProducer(button, imageElement) {
    const brand = button.dataset.brand;

    // Удаляем active со всех кнопок
    document.querySelectorAll('.producer_btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Добавляем active текущей кнопке
    button.classList.add('active');

    // Fade out эффект
    imageElement.classList.add('fade-out');

    // После анимации меняем src
    setTimeout(() => {
        imageElement.src = `Assets\Image\${brand}_logo.webp`;
        imageElement.alt = `Логотип ${brand}`;
        imageElement.classList.remove('fade-out');
    }, 300);
}
