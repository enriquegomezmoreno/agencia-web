// 1. Control del Menú Hamburguesa Móvil
const orgToggle = document.getElementById('orgToggle');
const organicNav = document.getElementById('organicNav');
orgToggle.addEventListener('click', () => organicNav.classList.toggle('active'));

// 2. Control de Pestañas del Selector Interactivo de Tratamientos
const tabButtons = document.querySelectorAll('.tab-btn');
const selectorPanels = document.querySelectorAll('.selector-panel');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Quitar clase active a todos los botones y paneles
        tabButtons.forEach(btn => btn.classList.remove('active'));
        selectorPanels.forEach(panel => panel.classList.remove('active'));

        // Activar el seleccionado
        button.classList.add('active');
        const targetId = button.getAttribute('data-target');
        document.getElementById(targetId).classList.add('active');
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
