// 1. Menú Hamburguesa Móvil
const culToggle = document.getElementById('culToggle');
const culinaryNav = document.getElementById('culinaryNav');
culToggle.addEventListener('click', () => culinaryNav.classList.toggle('active'));

// 2. Filtro Interactivo de la Carta (Categorías)
const filterButtons = document.querySelectorAll('.filter-btn');
const menuCards = document.querySelectorAll('.menu-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Cambiar estado activo de los botones
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const category = button.getAttribute('data-filter');

        menuCards.forEach(card => {
            if (category === 'todos' || card.getAttribute('data-category') === category) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    });
});

// 3. Animación de Aparición al Hacer Scroll (Intersection Observer)
const revealOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => revealOnScroll.observe(el));
