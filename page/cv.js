document.addEventListener("DOMContentLoaded", function() {
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav');

    navToggle.addEventListener('click', function() {
        nav.classList.toggle('collapsed');
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            nav.classList.remove('collapsed');
        }
    });

    window.addEventListener('load', function() {
        document.querySelector('.container').classList.add('fade-in');
    });
});