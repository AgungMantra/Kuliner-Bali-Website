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




// Conect to website setting
function redirectToWebsiteGithub() {
    // Ganti URL dengan URL yang diinginkan
    window.open("https://github.com/AgungMantra/Kuliner-Bali-Website-github.io", "_blank");
} 


document.addEventListener("DOMContentLoaded", function() {
  const navbar = document.querySelector('.navbar');

  // Fungsi untuk menghapus kelas 'transparent' saat scroll ke bawah
  function toggleNavbarBackground() {
    if (window.scrollY > 0) {
      navbar.classList.remove('transparent');
    } else {
      navbar.classList.add('transparent');
    }
  }

  // Tambahkan event listener untuk scroll
  window.addEventListener('scroll', toggleNavbarBackground);

  // Panggil fungsi saat halaman dimuat
  toggleNavbarBackground();
});

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
      navbar.classList.add('scrolled');
      navbar.classList.remove('scrolled-up');
    } else {
      navbar.classList.remove('scrolled');
      navbar.classList.add('scrolled-up');
    }
  });
  