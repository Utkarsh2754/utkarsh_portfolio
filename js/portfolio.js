const navMenu = document.getElementById('nav_menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close');



if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add('show-menu');
    });
}

if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove('show-menu');
        console.log("hhii");
    });
}

const navlink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}

navlink.forEach((n) => n.addEventListener('click', linkAction));

function activelink() {
    navlink.forEach((a) => a.classList.remove('active-link'));
    this.classList.add('active-link');
}

navlink.forEach((a) => a.addEventListener('click', activelink));

function scrollHeader() {
    const header = document.getElementById('header');

    if (this.scrollY >= 50) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);
