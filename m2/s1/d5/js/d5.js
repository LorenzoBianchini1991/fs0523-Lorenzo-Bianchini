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

    if (scrollPosition > 275) {
        header.style.backgroundColor = 'white'; 
        getStartedLink.style.backgroundColor = 'var(--verde)'; 
    } else {
        header.style.backgroundColor = 'var(--giallo)'; 
        getStartedLink.style.backgroundColor = 'var(--nero1)'; 
    }
});

/* TOOL-BOX*/

const authorLink = document.getElementById('author-link');
const tooltip = document.getElementById('tooltip');

let tooltipTimer;

function showTooltip() {
    clearTimeout(tooltipTimer);
    tooltip.style.display = 'block';
}

function hideTooltip() {
    tooltipTimer = setTimeout(() => {
        tooltip.style.display = 'none';
    }, 500);
}

authorLink.addEventListener('mouseover', showTooltip);
authorLink.addEventListener('mouseout', hideTooltip);
tooltip.addEventListener('mouseover', showTooltip);
tooltip.addEventListener('mouseout', hideTooltip);

/* STAR */

const stella = document.getElementById('stella');
const boxStellaGrigio = document.getElementById('box-stella-grigio');
let boxStellaGrigioVisible = false;

function showBoxStellaGrigio() {
    boxStellaGrigio.style.display = 'block';
    boxStellaGrigioVisible = true;
}

function hideBoxStellaGrigio() {
    boxStellaGrigioVisible = false;
    setTimeout(() => {
        if (!boxStellaGrigioVisible) {
            boxStellaGrigio.style.display = 'none';
        }
    }, 500);
}

stella.addEventListener('mouseover', showBoxStellaGrigio);
stella.addEventListener('mouseout', hideBoxStellaGrigio);

boxStellaGrigio.addEventListener('mouseover', showBoxStellaGrigio);
boxStellaGrigio.addEventListener('mouseout', hideBoxStellaGrigio);

/* stella tooltip */




/* MAIN INFINTE SCROLL */

