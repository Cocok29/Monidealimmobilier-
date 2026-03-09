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
function observeElements() {
    document.querySelectorAll('.feature-card, .testimonial-card, .cat-card').forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });
}

// ===== Rendu des cartes de biens =====
function createPropertyCard(bien) {
    return `
        <article class="cat-card" data-type="${bien.type}" data-prix="${bien.prix.replace(/\s/g, '')}" data-ville="${bien.ville}">
            <a href="produit.html?id=${bien.id}" class="cat-card-link">
                <div class="cat-card-image">
                    <img src="${bien.photos[0]}" alt="${bien.titre}">
                    <div class="cat-badges">
                        ${bien.id === 1 || bien.id === 2 || bien.id === 3 ? '<span class="cat-badge badge-coeur">Coup de cœur</span>' : ''}
                        ${bien.id === 2 || bien.id === 3 || bien.id === 4 ? '<span class="cat-badge badge-exclusif">Exclusif</span>' : ''}
                        ${bien.id === 4 ? '<span class="cat-badge badge-nouveau">Nouveau</span>' : ''}
                        ${bien.type === 'Appartement' ? '<span class="cat-badge badge-type">Appartement</span>' : ''}
                    </div>
                    <button class="btn-favorite cat-fav" aria-label="Ajouter aux favoris">♡</button>
                </div>
                <div class="cat-card-body">
                    <div class="cat-prix">${bien.prix} €</div>
                    <div class="cat-nom">${bien.type} ${bien.pieces} pièce(s) ${bien.chambres} chambre(s)</div>
                    <div class="cat-localisation">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        ${bien.ville}
                    </div>
                    <div class="cat-stats">
                        <div class="cat-stat">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                <polyline points="9 22 9 12 15 12 15 22"></polyline>
                            </svg>
                            <span>${bien.pieces}</span>
                            <small>pièces</small>
                        </div>
                        <div class="cat-stat">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            </svg>
                            <span>${bien.chambres}</span>
                            <small>chambres</small>
                        </div>
                        <div class="cat-stat">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"></path>
                                <path d="M10 5H4v4h6v-4z"></path>
                            </svg>
                            <span>${bien.sdb}</span>
                            <small>SdB</small>
                        </div>
                        <div class="cat-stat">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                            </svg>
                            <span>${bien.surface}</span>
                            <small>m²</small>
                        </div>
                    </div>
                    <div class="cat-tags">
                        ${bien.tags.map(tag => `<span class="cat-tag">${tag}</span>`).join('')}
                    </div>
                    <a href="produit.html?id=${bien.id}" class="btn-voir-details">Voir les détails</a>
                </div>
            </a>
        </article>
    `;
}

function attachFavEvents() {
    document.querySelectorAll('.cat-fav').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const isFav = btn.textContent.trim() === '♥';
            btn.textContent = isFav ? '♡' : '♥';
            btn.style.color = isFav ? '' : 'var(--accent-color)';
        });
    });
}

// Rendu des biens sur la page d'accueil (limité à 3)
if (document.querySelector('.properties-grid') && typeof BIENS !== 'undefined') {
    const homeGrid = document.querySelector('.properties-grid');
    // On ne prend que les 3 premiers
    const topBiens = BIENS.slice(0, 3);
    homeGrid.innerHTML = topBiens.map(bien => createPropertyCard(bien)).join('');
    attachFavEvents();
    observeElements();
} else {
    // Si on n'est pas sur l'accueil, on observe quand même les éléments présents
    observeElements();
}
