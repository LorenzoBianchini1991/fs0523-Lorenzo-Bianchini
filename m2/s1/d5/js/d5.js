/* HEADER STICKY E COLORE */

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');

    if (window.scrollY > 0) {
        header.classList.add('fixed-header');
    } else {
        header.classList.remove('fixed-header');
    }
});

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const getStartedLink = document.querySelector('.button'); 
    const scrollPosition = window.scrollY;

    if (scrollPosition > 475) {
        header.style.backgroundColor = 'white'; 
        getStartedLink.style.backgroundColor = 'var(--verde)'; 
    } else {
        header.style.backgroundColor = 'var(--giallo)'; 
        getStartedLink.style.backgroundColor = 'var(--nero1)'; 
    }
});