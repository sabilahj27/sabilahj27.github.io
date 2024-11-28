document.addEventListener("DOMContentLoaded", function() {
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav');

    navToggle.addEventListener('click', function() {
        nav.classList.toggle('collapsed');
    });

    // Menangani perubahan ukuran jendela
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            nav.classList.remove('collapsed');
        }
    });

    setTimeout(function () {
        const hero = document.querySelector('.work');
        hero.classList.remove('hidden');

        const heroTexts = hero.querySelectorAll('h1, .timeline-item, timeline-icon, timeline-content, timeline-divider');
        heroTexts.forEach((text) => {
            text.classList.add('slide-in-left');
        });

        const organization = document.querySelector('.organization');
        organization.classList.remove('hidden');

        const organizationText = organization.querySelectorAll('h1, .timeline-item, timeline-icon, timeline-content, timeline-divider');
        organizationText.forEach((text) => {
            text.classList.add('slide-in-right');
        });

    }, 100);
});