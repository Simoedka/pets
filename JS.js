const openMenuBtn = document.querySelector('header .menu-btn');
const closeMenuBtn = document.querySelector('.menu-head .menu-btn');
const menu = document.querySelector('.menu');

function openMenu() {
    menu.style.display = 'block';
}
function closeMenu() {
    menu.style.display = 'none';
}

openMenuBtn.addEventListener('click', openMenu);
closeMenuBtn.addEventListener('click', closeMenu);

document.addEventListener('click', function(event) {
    if (menu.style.display === 'block' && 
        !menu.contains(event.target) && 
        !openMenuBtn.contains(event.target)) {
        closeMenu();
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && menu.style.display === 'block') {
        closeMenu();
    }
});

const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
let slideInterval;

function showSlide(index) {
    if (!slides.length) return;
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
    });
    slides[index].classList.add('active');
    currentSlide = index;
}

function nextSlide() {
    if (!slides.length) return;
    let newIndex = currentSlide + 1;
    if (newIndex >= slides.length) newIndex = 0;
    showSlide(newIndex);
}

function startAutoSlide() {
    if (!slides.length) return;
    if (slideInterval) clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 5000);
}

if (slides.length > 0) {
    startAutoSlide();
}