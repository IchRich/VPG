// Catalog Filter Functionality

document.addEventListener('DOMContentLoaded', function() {
    const filterBtn = document.getElementById('filter-btn');
    const filterModal = document.getElementById('filter-modal');
    const filterClose = document.getElementById('filter-close');
    const filterSections = document.querySelectorAll('.filter_section');

    // Open mobile/tablet filter modal
    if (filterBtn) {
        filterBtn.addEventListener('click', function() {
            filterModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    // Close filter modal
    if (filterClose) {
        filterClose.addEventListener('click', function() {
            filterModal.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    // Close on overlay click
    if (filterModal) {
        filterModal.addEventListener('click', function(e) {
            if (e.target === filterModal) {
                filterModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // Toggle filter sections
    filterSections.forEach(function(section) {
        const header = section.querySelector('.filter_section_header');
        if (header) {
            header.addEventListener('click', function() {
                section.classList.toggle('collapsed');
            });
        }
    });

    // Update filter badge count
    function updateBadgeCount() {
        const checkedFilters = document.querySelectorAll('.filter_checkbox input:checked');
        const badge = document.querySelector('.filter_badge');
        if (badge) {
            const count = checkedFilters.length;
            if (count > 0) {
                badge.style.display = 'block';
                // badge можно обновлять числом, но в дизайне это просто индикатор
            } else {
                badge.style.display = 'block'; // Всегда показываем в дизайне
            }
        }
    }

    // Listen to checkbox changes
    const checkboxes = document.querySelectorAll('.filter_checkbox input');
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', updateBadgeCount);
    });

    // Initialize
    updateBadgeCount();
});