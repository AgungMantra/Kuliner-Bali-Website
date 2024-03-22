// ========== UNTUK TOMBOL NAV ==========
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const navbar = document.querySelector('.navbar');
const navlayout = document.querySelector('.nav-layout');
const control = document.querySelector('.control');

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    nav.classList.toggle('active');
    navbar.classList.toggle('active'); 
    navlayout.classList.toggle('active'); 
    control.classList.add('active');
});

control.addEventListener("click", () => {
    navlayout.classList.toggle('active-control');
    navlayout.classList.remove('active'); 
    control.classList.remove('active');
    navbar.classList.remove('active'); 
    hamburger.classList.remove("active");
    nav.classList.remove('active');
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    nav.classList.remove("active");
    navlayout.classList.remove("active-control");
    control.classList.remove('active');
}));

// ========== Scroll Reveal ==========
ScrollReveal({
    reset: false,
    distance: '30px',
    duration: 1000,
    delay: 100
});

ScrollReveal().reveal('.texthome, .text, .home-gallery, .video-container,.container,.contact-us-container', { origin: 'bottom' });
ScrollReveal().reveal('.img-kulinerbali,.text-makanan ,.img-kuliner,.thanks' ,{ origin: 'left' });
ScrollReveal().reveal('.text-penjelasan,.img-penjelasan,.contact' ,{ origin: 'right' });

// Typing text



