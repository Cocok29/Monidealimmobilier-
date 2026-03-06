// ===== Carrousel Hero =====
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const nextBtn = document.querySelector('.next-btn');
let currentSlide = 0;

function goToSlide(index) {
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    currentSlide = index % slides.length;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

if (nextBtn) {
    nextBtn.addEventListener('click', () => {
        goToSlide(currentSlide + 1);
    });
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        goToSlide(index);
    });
});

// Auto-play du carrousel toutes les 5 secondes
setInterval(() => {
    goToSlide(currentSlide + 1);
}, 5000);

// ===== Animation d'apparition au scroll =====
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observer les éléments à animer
document.querySelectorAll('.feature-card, .testimonial-card, .property-card').forEach(el => {
    el.classList.add('animate-on-scroll');
    observer.observe(el);
});
