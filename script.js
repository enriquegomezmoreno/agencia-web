// 1. Menú Móvil
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// 2. Smooth Scroll optimizado
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute('href'));
        if (targetElement) {
            const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY - 75;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// --- SISTEMA DE PRESUPUESTO POR WHATSAPP ---
function enviarPresupuestoWA() {
    const negocio = document.getElementById('negocio').value;
    const servicio = document.getElementById('servicio').value;
    const detalles = document.getElementById('detalles').value;

    // Validación básica
    if(!negocio) {
        alert('Por favor, indica tu nombre o el de tu negocio para poder atenderte.');
        document.getElementById('negocio').focus();
        return;
    }

    // Construcción del mensaje
    let mensaje = `👋 Hola Enrique, me gustaría solicitar un presupuesto sin compromiso.\n\n`;
    mensaje += `*🏢 Negocio/Nombre:* ${negocio}\n`;
    mensaje += `*🚀 Servicio de interés:* ${servicio}\n`;
    
    if(detalles) {
        mensaje += `*📝 Detalles extra:* ${detalles}\n`;
    }

    // Apertura directa a WhatsApp
    const numero = "34684156359";
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
}
