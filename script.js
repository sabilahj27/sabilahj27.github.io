document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav');
    const contactButton = document.querySelector('.hero button');
    const socialIcons = document.querySelector('.social-icons');

    navToggle.addEventListener('click', function() {
        nav.classList.toggle('collapsed');
    });

    contactButton.addEventListener('click', function () {
        socialIcons.classList.toggle('hidden');
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            nav.classList.remove('collapsed'); // Tampilkan kembali navigasi saat layar lebar
        }
    });

    setTimeout(function () {

        const hero = document.querySelector('.hero');
        hero.classList.remove('hidden');


        const heroTexts = hero.querySelectorAll('.hero-text, button');
        heroTexts.forEach((text) => {
            text.classList.add('slide-in-left');
        });


        const socialIcons = hero.querySelector('.social-icons');
        socialIcons.classList.add('slide-in-right');


        const about = document.querySelector('.about');
        about.classList.remove('hidden');


        const aboutImg = about.querySelector('.about-img');
        const aboutText = about.querySelector('.text');
        aboutImg.classList.add('slide-in-left');
        aboutText.classList.add('slide-in-right');

        const briefHighlight = document.querySelector('.brief-highlight');
        briefHighlight.classList.remove('hidden');
        briefHighlight.classList.add('slide-in-left');

        const navigationPrompt = document.querySelector('.navigation-prompt');
        navigationPrompt.classList.remove('hidden');
        navigationPrompt.classList.add('slide-in-right');
    }, 100);
});