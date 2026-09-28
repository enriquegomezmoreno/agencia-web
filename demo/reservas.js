// 1. Control del Menú Hamburguesa Móvil
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
menuToggle.addEventListener('click', () => navLinks.classList.toggle('active'));

// 2. Control de Pestañas Activas en el Menú según el Scroll
const sections = document.querySelectorAll('section[id]');
const allNavLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let scrollY = window.pageYOffset;
    sections.forEach(section => {
        let top = section.offsetTop - 120, height = section.offsetHeight, id = section.getAttribute('id');
        if (scrollY > top && scrollY <= top + height) {
            allNavLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) link.classList.add('active');
            });
        }
    });
});

// 3. Simulador Interactivo de Precios en Tiempo Real
const simDuracion = document.getElementById('simDuracion');
const simMicro = document.getElementById('simMicro');
const simLuces = document.getElementById('simLuces');
const simTotal = document.getElementById('simTotal');

function calcularPresupuesto() {
    let total = parseInt(simDuracion.value);
    if (simMicro.checked) total += parseInt(simMicro.value);
    if (simLuces.checked) total += parseInt(simLuces.value);
    simTotal.textContent = total + '€';
}

[simDuracion, simMicro, simLuces].forEach(element => {
    element.addEventListener('change', calcularPresupuesto);
});

// 4. Animación de Aparición al Hacer Scroll (Intersection Observer)
const revealOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => revealOnScroll.observe(el));

// 5. Acordeón Desplegable para Preguntas Frecuentes (FAQ)
document.querySelectorAll('.faq-item').forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    questionBtn.addEventListener('click', () => {
        document.querySelectorAll('.faq-item').forEach(other => {
            if (other !== item) other.classList.remove('active');
        });
        item.classList.toggle('active');
    });
});
