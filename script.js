/* ==========================================================
   Configuración de Tailwind (debe cargarse DESPUÉS de
   https://cdn.tailwindcss.com y sin defer/async)
   ========================================================== */
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "error": "#ba1a1a",
        "surface-bright": "#f8f9ff",
        "outline": "#757684",
        "on-surface-variant": "#444653",
        "on-primary-fixed": "#001453",
        "background": "#f8f9ff",
        "surface-container": "#e5eeff",
        "on-secondary-fixed-variant": "#003ea8",
        "surface-container-lowest": "#ffffff",
        "surface": "#f8f9ff",
        "secondary": "#0051d5",
        "secondary-container": "#316bf3",
        "error-container": "#ffdad6",
        "surface-container-low": "#eff4ff",
        "on-secondary": "#ffffff",
        "on-tertiary-fixed-variant": "#3f465c",
        "on-error-container": "#93000a",
        "primary-container": "#1e40af",
        "primary": "#00288e",
        "on-tertiary-container": "#b4bbd5",
        "on-primary-fixed-variant": "#173bab",
        "surface-container-highest": "#d3e4fe",
        "whatsapp-green-hover": "#22C55E",
        "secondary-fixed": "#dbe1ff",
        "primary-fixed-dim": "#b8c4ff",
        "surface-dark": "#0F172A",
        "surface-dark-subtle": "#1E293B",
        "on-secondary-fixed": "#00174b",
        "on-surface": "#0b1c30",
        "on-background": "#0b1c30",
        "on-error": "#ffffff",
        "surface-variant": "#d3e4fe",
        "primary-fixed": "#dde1ff",
        "surface-alt": "#F1F5F9",
        "surface-container-high": "#dce9ff",
        "on-secondary-container": "#fefcff",
        "on-primary-container": "#a8b8ff",
        "on-tertiary": "#ffffff",
        "tertiary-container": "#434b60",
        "inverse-surface": "#213145",
        "on-primary": "#ffffff",
        "inverse-primary": "#b8c4ff",
        "tertiary-fixed-dim": "#bec6e0",
        "whatsapp-green": "#25D366",
        "outline-variant": "#c4c5d5",
        "surface-dim": "#cbdbf5",
        "surface-tint": "#3755c3",
        "tertiary-fixed": "#dae2fd",
        "on-tertiary-fixed": "#131b2e",
        "inverse-on-surface": "#eaf1ff",
        "secondary-fixed-dim": "#b4c5ff",
        "surface-default": "#F8FAFC",
        "tertiary": "#2d3449"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      spacing: {
        "gutter-desktop": "2rem",
        "space-sm": "0.5rem",
        "space-lg": "1.5rem",
        "margin-desktop": "3rem",
        "space-xs": "0.25rem",
        "space-2xl": "4rem",
        "gutter": "1.5rem",
        "space-3xl": "6rem",
        "space-xl": "2.5rem",
        "margin": "1rem",
        "margin-tablet": "2rem",
        "space-md": "1rem"
      },
      fontFamily: {
        "label-sm": ["Inter"],
        "body-md": ["Inter"],
        "headline-lg": ["Plus Jakarta Sans"],
        "display-hero-mobile": ["Plus Jakarta Sans"],
        "display-hero": ["Plus Jakarta Sans"],
        "headline-sm": ["Plus Jakarta Sans"],
        "body-lg": ["Inter"],
        "label-md": ["Inter"],
        "headline-lg-mobile": ["Plus Jakarta Sans"],
        "body-sm": ["Inter"],
        "headline-md": ["Plus Jakarta Sans"]
      },
      fontSize: {
        "label-sm": ["12px", { lineHeight: "16px", letterSpacing: "0.04em", fontWeight: "600" }],
        "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "headline-lg": ["36px", { lineHeight: "44px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-hero-mobile": ["36px", { lineHeight: "44px", letterSpacing: "-0.025em", fontWeight: "800" }],
        "display-hero": ["56px", { lineHeight: "64px", letterSpacing: "-0.03em", fontWeight: "800" }],
        "headline-sm": ["20px", { lineHeight: "28px", letterSpacing: "-0.01em", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        "label-md": ["14px", { lineHeight: "20px", letterSpacing: "0.01em", fontWeight: "600" }],
        "headline-lg-mobile": ["28px", { lineHeight: "36px", letterSpacing: "-0.015em", fontWeight: "700" }],
        "body-sm": ["14px", { lineHeight: "20px", fontWeight: "400" }],
        "headline-md": ["24px", { lineHeight: "32px", letterSpacing: "-0.015em", fontWeight: "600" }]
      }
    }
  }
};

/* ==========================================================
   FAQ (acordeón)
   ========================================================== */
function toggleFaq(btn) {
  const content = btn.nextElementSibling;
  const icon = btn.querySelector('.material-symbols-outlined');
  const isHidden = content.classList.contains('hidden');

  // Cerrar el resto de preguntas
  document.querySelectorAll('#faq-accordion .px-5.pb-5').forEach(el => {
    el.classList.add('hidden');
  });
  document.querySelectorAll('#faq-accordion button .material-symbols-outlined').forEach(i => {
    i.style.transform = 'rotate(0deg)';
  });

  if (isHidden) {
    content.classList.remove('hidden');
    icon.style.transform = 'rotate(180deg)';
  }
}

/* ==========================================================
   Formulario de presupuesto express -> WhatsApp
   ========================================================== */
function handleExpressSubmit(event) {
  event.preventDefault();
  const business = document.getElementById('form-business').value;
  const type = document.getElementById('form-type').value;
  const phone = document.getElementById('form-phone').value;
  const message = document.getElementById('form-message').value;

  const text = encodeURIComponent(
    `Hola Enrique, te solicito presupuesto para mi negocio:\n` +
    `- Negocio: ${business}\n` +
    `- Modelo de interés: ${type}\n` +
    `- Mi contacto: ${phone}\n` +
    (message ? `- Detalles: ${message}` : '')
  );

  window.open(`https://wa.me/34684156359?text=${text}`, '_blank');
}
